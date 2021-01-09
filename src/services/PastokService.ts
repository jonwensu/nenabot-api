import db from '../config/db';

interface PastokQuestions {
	questions: string[];
}

class PastokService {
	async getAll(): Promise<PastokQuestions> {
		const getQuestions = async () => {
			try {
				const result = await db.ref('/questions').once('value');
				return result.val();
			} catch (error) {
				console.log(error);

				return [];
			}
		};
		return { questions: await getQuestions() };
	}
}
export default new PastokService();
