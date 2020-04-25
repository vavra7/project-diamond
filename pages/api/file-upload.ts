import { NextApiRequest, NextApiResponse } from 'next';

async function FileUpload(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'POST') {
		res.status(500).json({ message: 'Only POST requests accepted' });
	} else {
		console.log('HERE I RECEIVED THE FILE -------------------------');
		res.json({
			query: req.query,
			method: req.method,
			headers: req.headers,
			cookies: req.cookies,
			body: req.body,
			env: req.env
		});
	}
}

export default FileUpload;
