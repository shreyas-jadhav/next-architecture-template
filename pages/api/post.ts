import { createPost } from "server/controllers/post.controller";
import { NextApiHandler } from "server/middelwares/NextApiHandler";

export default NextApiHandler({
  // on post method
  post: createPost
})