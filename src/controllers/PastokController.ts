import express from 'express';

import PastokService from '../services/PastokService';

const router = express.Router();

router.get('/', async (_, res) => {
	res.status(200).send(await PastokService.getAll());
});

export default router;
