import express from 'express';

import EmojiService from '../services/EmojiService';

const router = express.Router();

router.get('/', async (_, res) => {
	res.status(200).send(await EmojiService.getAll());
});

export default router;
