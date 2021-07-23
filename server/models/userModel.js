import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
	email: { type: String, required: true },
	password: { type: String, required: true },
	fullName: { type: String, required: true },
	dateCreated: Date,
	dateUpdated: Date,
	imageUrl: String,
});

const UserModel = mongoose.model('UserModel', userSchema);

export default UserModel;
