import { NextApiRequest, NextApiResponse } from 'next';
import { dbConnect } from '@services/database';

const getTicker = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	if (req.method !== 'GET') {
		res.status(405).json({ message: `Method ${req.method} is not allowed.` });
	} else {
		const db = await dbConnect();
		const marketData = await db.all('SELECT * FROM markets_day WHERE ticker = ?', req.query.ticker);

		res.json({
			ticker: req.query.ticker,
			marketData
		});
	}
};

export default getTicker;
