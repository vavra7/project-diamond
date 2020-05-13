import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { verify } from 'jsonwebtoken';

function withAuthentication(fn: NextApiHandler) {
	return async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
		const { headers, cookies } = req;

		if (!headers.authorization && !cookies.authorization) {
			res.status(401).json({
				message: 'Authorization token not found. Not authenticated.'
			});

			return;
		} else {
			verify(headers.authorization ?? cookies.authorization, 'secret', async (err, decoded) => {
				if (!decoded) {
					res.status(401).json({
						message: 'Authorization token is invalid. Not authenticated.'
					});
				} else {
					return await fn(req, res);
				}
			});
		}
	};
}

export default withAuthentication;
