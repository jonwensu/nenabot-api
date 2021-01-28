import db from '../config/db';

interface ChannelMessage {
	[key: string]: string;
}

class DeleteHistoryService {
	async add(message: string, channel: string): Promise<ChannelMessage> {
		const ref = await db.ref(`/messageLog/deleted/${channel}`);

		await ref.update({ message });
		return { message, channel };
	}

	async get(channel: string): Promise<ChannelMessage | null> {
		try {
			const result = await db
				.ref(`/messageLog/deleted/${channel}`)
				.once('value');
			return result.val() || null;
		} catch (error) {
			return null;
		}
	}
}
export default new DeleteHistoryService();
