import { getSession } from "next-auth/react"
import { UnauthorizedError } from "server/errors";
import { ApiHandler } from "server/types"

export const withAuth = (handler: ApiHandler): ApiHandler => async (req, res) => {
    const session = await getSession({ req });
        
    if (!session) throw new UnauthorizedError();
    await handler(req,res)
}

