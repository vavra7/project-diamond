import { NextApiRequest, NextApiResponse } from 'next';
import withAuthentication from '../../api/middlewares/withAuthentication';

async function users(req: NextApiRequest, res: NextApiResponse): Promise<void> {
	if (req.method !== 'GET') {
		res.status(405).json({
			message: `Method ${req.method} is not allowed.`
		});
	} else {
		res.status(200).json({
			message: `Some user list`
		});
	}
}

export default withAuthentication(users);
