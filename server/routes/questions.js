import express from 'express';

import {
	commentQuestion,
	fetchQuestions,
	createQuestion,
	getQuestion,
	fetchUnAnsweredQuestions,
	upVoteQuestion,
	fetchQuestionsBySearch,
	deleteQuestion,
	fetchUserQuestions,
	deleteCommentQuestion,
} from '../controllers/questions.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createQuestion);
router.get('/getquestion/:id', getQuestion);
router.get('/', fetchQuestions);
router.get('/unanswered', fetchUnAnsweredQuestions);
router.get('/search', fetchQuestionsBySearch);
router.patch('/:id/upvote', auth, upVoteQuestion);
router.get('/user/:id', fetchUserQuestions);

router.patch('/:id/comment', auth, commentQuestion);
router.patch('/:id/deletecomment', auth, deleteCommentQuestion);
router.delete('/:id/delete', auth, deleteQuestion);

export default router;
