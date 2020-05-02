import { NextApiRequest, NextApiResponse } from 'next';
import { dbConnect } from '@services/database';

async function getTicker(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'GET') {
		res.status(500).json({ message: 'Only GET requests accepted' });
	} else {
		const db = await dbConnect();
		const marketData = await db.all('SELECT * FROM markets_day WHERE ticker = ?', req.query.ticker);

		res.json({
			ticker: req.query.ticker,
			marketData
		});
	}
}

export default getTicker;
