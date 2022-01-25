import { IPost } from "models/post";
import { ClientSideError } from "../errors";

export const createPost = async (data: IPost) => {
    const res = await fetch(`/api/post`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (res.status != 200) {
        throw new ClientSideError('Something went wrong. Please try again.');
    }
    return res.text()
}