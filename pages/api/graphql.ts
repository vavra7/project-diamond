import { NextApiRequest, NextApiResponse } from 'next';
import { graphql, buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);
const root = { hello: () => 'Hello world!' };

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	const query = req.body.query;

	const response = await graphql(schema, query, root);

	res.end(JSON.stringify(response));
};
