import { ObjectId } from "mongodb";
import Joi from 'joi'

// Basic Document fields
export interface IDocument {
    _id?: string | ObjectId;
    createdAt?: string;
    updatedAt?: string;
    // createdBy?: string;
    // updatedBy?: string;
}

export const documentFields = {
    _id: Joi.string(),
    createdAt: Joi.string().isoDate(),
    updatedAt: Joi.string().isoDate()
}