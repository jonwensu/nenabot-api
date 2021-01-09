import dotenv from 'dotenv';
import argv from 'argv';

const opts = [
	{
		name: 'env',
		short: 'e',
		type: 'string',
	},
];

const args = argv.option(opts).run();

const { env = 'development' } = args.options;

const configPath = `.env.${env}`;

console.log('Loading config for env:', env);

dotenv.config({
	path: configPath,
});
