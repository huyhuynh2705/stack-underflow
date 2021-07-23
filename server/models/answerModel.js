import mongoose from 'mongoose';
import QuestionModel from './questionModel.js';
import UserModel from './userModel.js';

const answerSchema = mongoose.Schema({
	content: { type: String, required: true },
	creator: { type: String, ref: UserModel },
	creatorId: { type: mongoose.Schema.Types.ObjectId, ref: UserModel },
	questionId: { type: mongoose.Schema.Types.ObjectId, ref: QuestionModel },
	dateCreated: Date,
	dateUpdated: Date,
	likeCount: { type: [mongoose.Schema.Types.ObjectId], default: [] },
	comment: { type: [String], default: [] },
});

const AnswerModel = mongoose.model('AnswerModel', answerSchema);

export default AnswerModel;
