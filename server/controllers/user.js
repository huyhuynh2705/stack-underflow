import mongoose from 'mongoose';
import UserModel from '../models/userModel.js';

const LIMIT = 24;

export const fetchUsers = async (req, res) => {
	const { page } = req.query;
	try {
		let data = [];
		const startIndex = (Number(page) - 1) * LIMIT;
		const total = await UserModel.countDocuments({});
		const users = await UserModel.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);
		for (const user of users) {
			data.push({ _id: user._id, fullName: user.fullName, dateCreated: user.dateCreated, imageUrl: user.imageUrl });
		}
		res.status(200).json({ data: data, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT), numberOfUsers: total });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
