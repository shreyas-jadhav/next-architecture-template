import { MissingFieldError } from 'server/errors';
import { MongoClient, ObjectId } from 'mongodb';

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongo;

if (!cached) {
	cached = global.mongo = { conn: null, promise: null };
}

export async function connectToDatabase() {
	const MONGODB_URI = process.env.MONGODB_URI;
	const MONGODB_DB = process.env.MONGODB_DB;

	if (!MONGODB_URI) {
		throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
	}

	if (!MONGODB_DB) {
		throw new Error('Please define the MONGODB_DB environment variable inside .env.local');
	}

	if (cached.conn) {
		return cached.conn;
	}

	if (!cached.promise) {
		const mongoClient = new MongoClient(MONGODB_URI);
		cached.promise = mongoClient.connect().then((client) => {
			return {
				client,
				db: client.db(MONGODB_DB),
			};
		});
	}
	cached.conn = await cached.promise;
	return cached.conn;
}

export function getValidObjectId(id: string | ObjectId) {
	if (!ObjectId.isValid(id)) {
		throw new MissingFieldError('_id');
	}

	if (typeof id === 'string') {
		id = new ObjectId(id);
	}

	return id;
}
