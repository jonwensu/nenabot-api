const { FILE_READ_PATH, PORT, INDEX_FILE, LOG_PATH } = process.env;

const {
	FIREBASE_API_KEY,
	FIREBASE_AUTH_DOMAIN,
	FIREBASE_DATABASE_URL,
	FIREBASE_PROJECT_ID,
	FIREBASE_STORAGE_BUCKET,
	FIREBASE_APP_ID,
	FIREBASE_APP_NAME,
} = process.env;

interface ConfigType {
	port: string;
	folderPath: string;
	indexFile: string;
	logPath: string;
	firebase: {
		apiKey?: string;
		authDomain?: string;
		databaseURL?: string;
		projectId?: string;
		storageBucket?: string;
		appId?: string;
		appName?: string;
	};
}

const config: ConfigType = {
	folderPath: FILE_READ_PATH || '',
	port: PORT || '8000',
	indexFile: INDEX_FILE || 'highrisk.txt',
	logPath: LOG_PATH || 'log',
	firebase: {
		apiKey: FIREBASE_API_KEY,
		authDomain: FIREBASE_AUTH_DOMAIN,
		databaseURL: FIREBASE_DATABASE_URL,
		projectId: FIREBASE_PROJECT_ID,
		storageBucket: FIREBASE_STORAGE_BUCKET,
		appId: FIREBASE_APP_ID,
		appName: FIREBASE_APP_NAME,
	},
};

export default config;
