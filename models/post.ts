import Joi from "joi";
import { documentFields,  IDocument } from "models";

export interface IPost extends IDocument {
    title: string;
    description?: string;
}

export const PostSchema = Joi.object<IPost>({
    // ...documentFields,
    title: Joi.string().min(3).required().label('Title'),
    description: Joi.string()
});