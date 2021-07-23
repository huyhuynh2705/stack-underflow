import mongoose from 'mongoose';
import QuestionModel from '../models/questionModel.js';
import TagModel from '../models/tagModel.js';
import AnswerModel from '../models/answerModel.js';

const LIMIT = 15;

export const getQuestion = async (req, res) => {
	const { id } = req.params;
	try {
		const question = await QuestionModel.findById(id);
		res.status(200).json(question);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const fetchQuestions = async (req, res) => {
	const { page } = req.query;
	try {
		const startIndex = (Number(page) - 1) * LIMIT;
		const total = await QuestionModel.countDocuments({});
		const questions = await QuestionModel.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);
		res.status(200).json({ data: questions, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT), numberOfQuestions: total });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const fetchUnAnsweredQuestions = async (req, res) => {
	const { page } = req.query;
	try {
		const startIndex = (Number(page) - 1) * LIMIT;
		const total = await QuestionModel.countDocuments({ answer: [] });
		const questions = await QuestionModel.find({ answer: [] }).sort({ _id: -1 }).limit(LIMIT).skip(startIndex);
		res.status(200).json({ data: questions, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT), numberOfQuestions: total });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const fetchUserQuestions = async (req, res) => {
	const { id } = req.params;
	const { page } = req.query;
	try {
		const startIndex = (Number(page) - 1) * LIMIT;
		const total = await QuestionModel.countDocuments({ creatorId: id });
		const questions = await QuestionModel.find({ creatorId: id }).sort({ _id: -1 }).limit(LIMIT).skip(startIndex);
		res.status(200).json({ data: questions, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT), numberOfQuestions: total });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const fetchQuestionsBySearch = async (req, res) => {
	const { searchQuery, tags, page } = req.query;
	try {
		const title = new RegExp(searchQuery, 'i');
		let questions, total;
		const startIndex = (Number(page) - 1) * LIMIT;
		if (tags && !searchQuery) {
			total = await QuestionModel.countDocuments({ $or: { tags: { $in: tags.split(',') } } });
			questions = await QuestionModel.find({ $or: { tags: { $in: tags.split(',') } } })
				.sort({ _id: -1 })
				.limit(LIMIT)
				.skip(startIndex);
		} else if (!tags && searchQuery) {
			total = await QuestionModel.countDocuments({ $or: [{ title }] });
			questions = await QuestionModel.find({ $or: [{ title }] })
				.sort({ _id: -1 })
				.limit(LIMIT)
				.skip(startIndex);
		} else {
			total = await QuestionModel.countDocuments({ $or: [{ title }, { tags: { $in: tags.split(',') } }] });
			questions = await QuestionModel.find({ $or: [{ title }, { tags: { $in: tags.split(',') } }] })
				.sort({ _id: -1 })
				.limit(LIMIT)
				.skip(startIndex);
		}
		res.status(200).json({ data: questions, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT), numberOfQuestions: total });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createQuestion = async (req, res) => {
	const { title, content, creator, tags } = req.body;
	try {
		if (!req.userId) {
			return res.json({ message: 'Unauthenticated' });
		}
		const dateCreated = new Date().toISOString();
		const newQuestion = new QuestionModel({
			title,
			content,
			creator,
			creatorId: req.userId,
			dateCreated: dateCreated,
			dateUpdated: dateCreated,
			tags,
		});
		for (const tag of tags) {
			const oldTag = await TagModel.findOne({ name: tag });
			oldTag.questionCount.push(newQuestion._id);
			await TagModel.findByIdAndUpdate(oldTag._id, oldTag, { new: true });
		}
		await newQuestion.save();
		res.status(201).json(newQuestion);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

export const upVoteQuestion = async (req, res) => {
	const { id } = req.params;
	try {
		if (!req.userId) {
			return res.json({ message: 'Unauthenticated' });
		}

		if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No question with id: ${id}`);

		const question = await QuestionModel.findById(id);

		const index = question.voteCount.findIndex((id) => String(id) === req.userId);
		if (index === -1) {
			question.voteCount.push(req.userId);
		} else {
			question.voteCount = question.voteCount.filter((id) => String(id) !== req.userId);
		}

		const updatedQuestion = await QuestionModel.findByIdAndUpdate(id, question, { new: true });
		res.status(200).json(updatedQuestion);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

export const commentQuestion = async (req, res) => {
	const { id } = req.params;
	const { comment } = req.body;
	try {
		const question = await QuestionModel.findById(id);

		question.comment.push(comment);

		const updatedQuestion = await QuestionModel.findByIdAndUpdate(id, question, { new: true });

		res.json(updatedQuestion);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

export const deleteQuestion = async (req, res) => {
	const { id } = req.params;
	try {
		if (!req.userId) {
			return res.json({ message: 'Unauthenticated' });
		}
		const question = await QuestionModel.findById(id);

		if (String(req.userId) !== String(question.creatorId)) {
			return res.json({ message: "Not User' owner" });
		}

		for (const tag of question.tags) {
			let oldTag = await TagModel.findOne({ name: tag });
			if (oldTag) {
				const index = oldTag.questionCount.findIndex((id) => String(id) === String(question._id));
				if (index !== -1) {
					oldTag.questionCount = oldTag.questionCount.filter((id) => String(id) !== String(question._id));
				}
				await TagModel.findByIdAndUpdate(oldTag._id, oldTag, { new: true });
			}
		}

		await AnswerModel.deleteMany({ questionId: id });
		await QuestionModel.findByIdAndDelete(id);

		res.json(question);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

export const deleteCommentQuestion = async (req, res) => {
	const { id } = req.params;
	const { comment } = req.body;
	try {
		const question = await QuestionModel.findById(id);
		question.comment = question.comment.filter((com) => com !== comment);
		const updatedQuestion = await QuestionModel.findByIdAndUpdate(id, question, { new: true });
		res.json(updatedQuestion);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};
