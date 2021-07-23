import mongoose from 'mongoose';
import UserModel from './userModel.js';

const questionSchema = mongoose.Schema({
	title: { type: String, required: true },
	content: { type: String, required: true },
	creator: { type: String, required: true },
	creatorId: { type: mongoose.Schema.Types.ObjectId, ref: UserModel },
	dateCreated: Date,
	dateUpdated: Date,
	voteCount: { type: [mongoose.Schema.Types.ObjectId], default: [] },
	answer: { type: [mongoose.Schema.Types.ObjectId], default: [] },
	comment: { type: [String], default: [] },
	tags: { type: [String], default: [] },
});

const QuestionModel = mongoose.model('QuestionModel', questionSchema);

export default QuestionModel;
