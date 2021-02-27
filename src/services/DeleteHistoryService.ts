import db from '../config/db';

interface ChannelMessage {
	[key: string]: string;
}

const DEFAULT_SIZE = 10;

class DeleteHistoryService {
	async add(message: string, channel: string): Promise<ChannelMessage> {
		const ref = db.ref(`/messageLog/deleted/${channel}`);

		await ref.push(message);

		const updated = await this.get(channel, 10);

		await ref.set(updated);

		return { message, channel };
	}

	async get(channel: string, size = DEFAULT_SIZE): Promise<ChannelMessage[]> {
		try {
			const result = await db
				.ref(`/messageLog/deleted/${channel}`)
				.orderByChild('createdTimestamp')
				.limitToLast(size)
				.once('value');
			return result.val() || [];
		} catch (error) {
			return [];
		}
	}
}
export default new DeleteHistoryService();
