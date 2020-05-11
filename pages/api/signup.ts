import { NextApiRequest, NextApiResponse } from 'next';
import { dbConnect } from '@services/database';
import { hash } from 'bcrypt';

async function signup(req: NextApiRequest, res: NextApiResponse): Promise<void> {
	if (req.method !== 'POST') {
		res.status(405).json({
			message: `Method ${req.method} is not allowed.`
		});
	} else {
		const { body } = req;
		const db = await dbConnect();
		const [statement1, statement2] = await Promise.all([
			db.prepare(`
				SELECT COUNT(*) as count FROM "user" WHERE email = ?;
			`),
			db.prepare(`
		 		INSERT INTO "user" (email, first_name,last_name, password) VALUES (?, ?, ?, ?);
			`)
		]);
		const result1 = await statement1.get(body.email);

		await statement1.finalize();
		if (result1.count) {
			res.status(403).json({
				message: 'Account for given email already exists.'
			});

			return;
		}

		hash(body.password, 10, async (err, hash) => {
			await statement2.run(body.email, body.firstName, body.lastName, hash);
			await statement2.finalize();

			res.status(200).json({
				message: 'Signed Up'
			});
		});
	}
}

export default signup;
