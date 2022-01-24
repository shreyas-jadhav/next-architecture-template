import { Db, MongoClient } from 'mongodb';

declare global {
	type MongoConnection = {
		client: MongoClient;
		db: Db;
	};

	interface mongo {
		conn: MongoConnection | null;
		promise: Promise<MongoConnection> | null;
	}

	// to cache MongoDB connection for reuse during development
	// (otherwise hot reload creates many connections)
	var mongo: mongo = {
		conn: null,
		promise: null,
	};
}
