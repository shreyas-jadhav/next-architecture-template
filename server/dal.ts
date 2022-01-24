import { CollectionOptions } from "mongodb";
import { connectToDatabase } from "./db"

// data access layer
export const  getDb = async () => {
		const { db } = await connectToDatabase();
		return db;
	}
export const findOne = async <T>(collection: string, filter: Partial<T>) => {
    const db = await getDb();
    const res = await db.collection(collection).findOne(filter);
    return res;
}

export const createOne = async <T>(collection: string, data: T) => {
    const db = await getDb();
    const res = await db.collection(collection).insertOne(data);
    return res;
}

