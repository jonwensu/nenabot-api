import './preStart';
import express from 'express';
import helmet from 'helmet';

import PastokController from './controllers/PastokController';
import EmojiController from './controllers/EmojiController';
import config from './config/config';

const app = express();

app.use(helmet());
app.get('/', (req, res) => res.send('Nena Bot API Server'));

app.use('/pastok', PastokController);
app.use('/emoji', EmojiController);

app.listen(config.port, () => {
	console.log(`⚡️[server]: Server is running at port:`, config.port);
});
