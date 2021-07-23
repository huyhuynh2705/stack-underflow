import mongoose from 'mongoose';
import TagModel from '../models/tagModel.js';

const LIMIT = 24;

export const createTag = async (req, res) => {
	const tag = req.body;
	try {
		const oldTag = await TagModel.findOne({ name: tag.name });
		if (oldTag) return res.status(400).json({ message: 'Tag already exists' });
		const newTag = new TagModel(tag);
		await newTag.save();
		res.status(201).json(newTag);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

export const fetchTags = async (req, res) => {
	const { page } = req.query;
	try {
		const startIndex = (Number(page) - 1) * LIMIT;
		const total = await TagModel.countDocuments({});
		const tags = await TagModel.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);
		res.status(200).json({ data: tags, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT), numberOfTags: total });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const fetchRecommendTags = async (req, res) => {
	const { tag } = req.body;
	try {
		const name = new RegExp(tag, 'i');
		const tags = await TagModel.find({ $or: [{ name }] });
		res.status(200).json(tags);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const getTag = async (req, res) => {
	const { name } = req.params;
	try {
		const tag = await TagModel.findOne({ name: name });
		res.status(200).json(tag);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
