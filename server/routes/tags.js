import express from 'express';

import { createTag, fetchTags, fetchRecommendTags, getTag } from '../controllers/tag.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', fetchTags);
router.post('/', auth, createTag);
router.get('/:name', getTag);
router.post('/recommend', fetchRecommendTags);

export default router;
