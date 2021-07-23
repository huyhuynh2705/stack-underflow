import express from 'express';

import { fetchUsers } from '../controllers/user.js';

const router = express.Router();

router.get('/', fetchUsers);

export default router;
