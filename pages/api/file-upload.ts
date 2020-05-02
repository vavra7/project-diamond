import { NextApiRequest, NextApiResponse } from 'next';
import { dbConnect } from '../../services/database';
import moment from 'moment';

async function saveData(data: string[][]): Promise<void> {
	const db = await dbConnect();
	let inserted = 1;
	let duplicate = 1;

	const statement1 = await db.prepare(`
		SELECT
			*
		FROM
			markets_day
		WHERE
			(
				ticker = ?
				AND date = ?
			);
	`);

	const statement2 = await db.prepare(`
		INSERT INTO
			markets_day (ticker, date, open, high, low, close, volume)
		VALUES
			(?, ?, ?, ?, ?, ?, ?);
	`);

	data.forEach(async row => {
		row[2] = moment(row[2], 'YYYYMMDD').format('YYYY-MM-DD');

		const exist = await statement1.get(row[0], row[2]);

		if (exist) {
			console.log(`Row refused as duplicate. (${duplicate++})`);
		} else {
			await statement2.run(row[0], row[2], row[4], row[5], row[6], row[7], row[8]);
			console.log(`Row inserted. (${inserted++})`);
		}
	});

	await statement1.finalize();
	await statement2.finalize();
	await db.close();

	console.log('Finished.');
}

async function FileUpload(req: NextApiRequest, res: NextApiResponse): Promise<void> {
	if (req.method !== 'POST') {
		res.status(500).json({ message: 'Only POST requests accepted' });
	} else {
		if (req.body.file) {
			const base64str = req.body.file.split(',').pop();
			const buf = Buffer.from(base64str, 'base64');
			const utf8encoded = buf.toString('utf8');
			let rowsS = utf8encoded.split('\n');

			if (rowsS[0].includes('<')) {
				rowsS.splice(0, 1);
			}

			rowsS = rowsS.filter(row => !!row.trim());

			const rowsA = rowsS.map(row => row.split(','));

			saveData(rowsA);

			res.status(200).json({
				msgs: 'Accepted. Data will be processed.'
			});
		} else {
			res.status(404).json({
				msgs: 'No file send'
			});
		}
	}
}

export const config = {
	api: {
		bodyParser: {
			sizeLimit: '5mb'
		}
	}
};

export default FileUpload;
