import { NextApiRequest, NextApiResponse } from 'next';
import { dbConnect } from '@services/database';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

async function login(req: NextApiRequest, res: NextApiResponse): Promise<void> {
	if (req.method !== 'POST') {
		res.status(405).json({
			message: `Method ${req.method} is not allowed.`
		});
	} else {
		const { body } = req;
		const db = await dbConnect();
		const statement1 = await db.prepare(`
			SELECT * FROM "user" WHERE email = ?;
		`);
		const result1 = await statement1.get(body.email);

		await statement1.finalize();

		compare(body.password, result1.password, async (err, result) => {
			if (!result) {
				res.status(401).json({
					message: 'Email or password are incorrect.'
				});
			} else {
				const payload = {
					sub: result1.id,
					email: result1.email
				};
				const authToken = sign(payload, 'secret', { expiresIn: '1h' });

				res.status(200).json({
					authToken
				});
			}
		});
	}
}

export default login;
