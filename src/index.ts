import './preStart';
import express from 'express';
import helmet from 'helmet';

import PastokController from './controllers/PastokController';
import DeleteHistoryController from './controllers/DeleteHistoryController';
import EmojiController from './controllers/EmojiController';
import config from './config/config';

const app = express();

// app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => res.send('Nena Bot API Server'));

app.use('/pastok', PastokController);
app.use('/emoji', EmojiController);
app.use('/message', DeleteHistoryController);

app.listen(config.port, () => {
	console.log(`⚡️[server]: Server is running at port:`, config.port);
});
