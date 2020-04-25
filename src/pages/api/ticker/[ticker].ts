import { NextApiRequest, NextApiResponse } from 'next';

function getTicker(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'GET') {
		res.status(500).json({ message: 'Only GET requests accepted' });
	} else {
		res.json({
			ticker: req.query.ticker
		});
	}
}

export default getTicker;
