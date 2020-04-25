import { NextApiRequest, NextApiResponse } from 'next';

async function FileUpload(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'POST') {
		res.status(500).json({ message: 'Only POST requests accepted' });
	} else {
		if (req.body.file) {
			const base64str = req.body.file.split(',').pop();
			const buf = Buffer.from(base64str, 'base64');
			const utf8encoded = buf.toString('utf8');

			utf8encoded.split('\n').forEach(row => {
				console.log('row:', row);
			});

			res.status(200).json({
				msgs: 'Accepted'
			});
		} else {
			res.status(404).json({
				msgs: 'No file send'
			})
		}
	}
}

export default FileUpload;
