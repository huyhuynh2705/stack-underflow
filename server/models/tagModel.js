import mongoose from 'mongoose';
import QuestionModel from './questionModel.js';

const tagSchema = mongoose.Schema({
	name: { type: String, required: true },
	content: { type: String, required: true },
	dateCreated: Date,
	dateUpdated: Date,
	questionCount: { type: [mongoose.Schema.Types.ObjectId], ref: QuestionModel, default: [] },
});

const TagModel = mongoose.model('TagModel', tagSchema);

export default TagModel;
