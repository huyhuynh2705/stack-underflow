import express from 'express';

import { signIn, signUp, signInWithGoogle } from '../controllers/auth.js';

const router = express.Router();

router.post('/signin', signIn);
router.post('/signingoogle', signInWithGoogle);
router.post('/signup', signUp);

export default router;
