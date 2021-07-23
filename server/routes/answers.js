import express from 'express';

import { addAnswer, getAnswerOfQuestion, likeAnswer, commentAnswer, deleteAnswer, deleteCommentAnswer } from '../controllers/answers.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/getanswerof/:id', getAnswerOfQuestion);
router.post('/addanswerto/:id', auth, addAnswer);
router.delete('/:id', auth, deleteAnswer);
router.patch('/:id/like', auth, likeAnswer);
router.patch('/:id/comment', auth, commentAnswer);
router.patch('/:id/deletecomment', auth, deleteCommentAnswer);

export default router;
