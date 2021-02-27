import express from 'express';

import DeleteHistoryService from '../services/DeleteHistoryService';

const router = express.Router();

router.post('/delete', async (req, res) => {
	const { message, channel } = req.body;
	await DeleteHistoryService.add(message, channel);

	res.status(200).send(req.body);
});

router.get('/delete/:channelId', async (req, res) => {
	const {
		params: { channelId },
		query: { size },
	} = req;
	const response = await DeleteHistoryService.get(channelId, +(size || 1));
	console.log(response);

	res.status(200).send(response);
});

export default router;
