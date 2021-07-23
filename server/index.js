import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import questionRoute from './routes/questions.js';
import answersRoute from './routes/answers.js';
import authRoute from './routes/auth.js';
import tagsRoute from './routes/tags.js';
import usersRoute from './routes/users.js';

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use(cors());

app.use('/auth', authRoute);
app.use('/questions', questionRoute);
app.use('/answers', answersRoute);
app.use('/tags', tagsRoute);
app.use('/users', usersRoute);

app.get('/', (req, res) => {
	res.status(200).json({ message: 'Hello World' });
});

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose
	.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
	.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
