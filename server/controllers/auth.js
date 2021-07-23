import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from '../models/userModel.js';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.SECRET_CODE;

export const signIn = async (req, res) => {
	const { email, password } = req.body;

	try {
		const oldUser = await UserModel.findOne({ email });

		if (!oldUser) return res.status(400).json({ message: "User doesn't exist" });

		const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

		if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials' });

		const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: '1h' });

		res.status(200).json({ result: oldUser, token });
	} catch (error) {
		res.status(500).json({ message: 'Something went wrong' });
	}
};

export const signInWithGoogle = async (req, res) => {
	const { googleId, imageUrl, email, name } = req.body;
	try {
		let oldUser = await UserModel.findOne({ email: googleId });

		if (!oldUser) {
			const hashedPassword = await bcrypt.hash(googleId, 12);
			const dateCreated = new Date().toISOString();
			oldUser = await UserModel.create({
				email: googleId,
				fullName: name,
				password: hashedPassword,
				imageUrl: imageUrl,
				dateCreated: dateCreated,
				dateUpdated: dateCreated,
			});
		}

		const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: '1h' });

		res.status(200).json({ result: oldUser, token });
	} catch (error) {
		res.status(500).json({ message: 'Something went wrong' });
	}
};

export const signUp = async (req, res) => {
	const { email, password, fullName } = req.body;
	try {
		const oldUser = await UserModel.findOne({ email });
		if (oldUser) return res.status(400).json({ message: 'Email already exists' });
		const dateCreated = new Date().toISOString();

		const hashedPassword = await bcrypt.hash(password, 12);
		const result = await UserModel.create({ email, password: hashedPassword, fullName: fullName, dateCreated: dateCreated, dateUpdated: dateCreated });

		const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: '1h' });

		res.status(201).json({ result, token });
	} catch (error) {
		res.status(500).json({ message: 'Something went wrong' });
		console.log(error);
	}
};
