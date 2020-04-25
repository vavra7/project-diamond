import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

async function getTicker(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'GET') {
		res.status(500).json({ message: 'Only GET requests accepted' });
	} else {
		const db = await open({
			filename: './project-diamond.sqlite',
			driver: sqlite3.Database
		});
		
		const people = await db.all('SELECT * FROM person');

		res.json({
			ticker: req.query.ticker,
			people
		});
	}
}

export default getTicker;
