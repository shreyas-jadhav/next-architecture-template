// post controllers
import { IPost, PostSchema } from "models/post";
import { createOne } from "server/dal";
import { ApiHandler } from "server/types";

const COLLECTION = 'post'

export const createPost: ApiHandler = async (req, res) => {
    const postData: IPost = req.body;
    await PostSchema.validateAsync(postData);

    await createOne(COLLECTION, postData);
    return res.status(200).send('Success');
}

