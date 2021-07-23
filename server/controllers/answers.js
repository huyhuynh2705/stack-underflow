import mongoose from 'mongoose';
import AnswerModel from '../models/answerModel.js';
import QuestionModel from '../models/questionModel.js';

export const addAnswer = async (req, res) => {
	const { id } = req.params;
	const answer = req.body;
	try {
		const oldQuestion = await QuestionModel.findById(id);
		if (!oldQuestion) return res.status(404).send(`No question with id: ${id}`);
		const newAnswer = new AnswerModel({ ...answer, questionId: id });
		oldQuestion.answer.push(newAnswer._id);
		await QuestionModel.findByIdAndUpdate(id, oldQuestion, { new: true });
		await newAnswer.save();
		res.status(201).json(newAnswer);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const getAnswerOfQuestion = async (req, res) => {
	const { id } = req.params;
	try {
		const answer = await AnswerModel.find({ questionId: id });
		res.status(201).json(answer);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const likeAnswer = async (req, res) => {
	const { id } = req.params;
	try {
		if (!req.userId) {
			return res.json({ message: 'Unauthenticated' });
		}

		if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No answer with id: ${id}`);

		const answer = await AnswerModel.findById(id);

		const index = answer.likeCount.findIndex((id) => String(id) === req.userId);
		if (index === -1) {
			answer.likeCount.push(req.userId);
		} else {
			answer.likeCount = answer.likeCount.filter((id) => String(id) !== req.userId);
		}

		const updatedAnswer = await AnswerModel.findByIdAndUpdate(id, answer, { new: true });
		res.status(200).json(updatedAnswer);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

export const commentAnswer = async (req, res) => {
	const { id } = req.params;
	const { comment } = req.body;
	try {
		const answer = await AnswerModel.findById(id);

		answer.comment.push(comment);

		const updatedAnswer = await AnswerModel.findByIdAndUpdate(id, answer, { new: true });

		res.json(updatedAnswer);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

export const deleteAnswer = async (req, res) => {
	const { id } = req.params;
	try {
		if (!req.userId) {
			return res.json({ message: 'Unauthenticated' });
		}
		const answer = await AnswerModel.findById(id);

		if (String(req.userId) !== String(question.creatorId)) {
			return res.json({ message: 'Unauthenticated' });
		}
		const question = QuestionModel.findById(answer.questionId);
		const index = question.answer.findIndex((id) => String(id) === String(answer._id));
		if (index !== -1) {
			question.answer = question.answer.filter((id) => String(id) !== String(answer._id));
			await QuestionModel.findByIdAndUpdate(question._id, question, { new: true });
		}
		await AnswerModel.findByIdAndDelete(id);
		res.json(answer);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

export const deleteCommentAnswer = async (req, res) => {
	const { id } = req.params;
	const { comment } = req.body;
	try {
		const answer = await AnswerModel.findById(id);
		answer.comment = answer.comment.filter((com) => com !== comment);
		const updatedAnswer = await AnswerModel.findByIdAndUpdate(id, answer, { new: true });
		res.json(updatedAnswer);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};
