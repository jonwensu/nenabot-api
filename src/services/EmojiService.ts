import db from '../config/db';

interface EmojiGameQuestion {
	answer: string;
	producerLocation: string;
	question: string;
	category?: string;
}

interface EmojiQuestionList {
	questions: EmojiGameQuestion[];
}

class EmojiService {
	async getAll(): Promise<EmojiQuestionList> {
		const getQuestions = async (): Promise<EmojiGameQuestion[]> => {
			try {
				const result = await db.ref('/emojis/movie').once('value');
				return (result.val() as EmojiGameQuestion[]).map(
					(e: EmojiGameQuestion) => ({
						...e,
						category: result.key?.toUpperCase(),
					})
				);
			} catch (error) {
				console.log(error);

				return [];
			}
		};
		return { questions: await getQuestions() };
	}
}
export default new EmojiService();
