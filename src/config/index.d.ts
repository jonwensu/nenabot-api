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
