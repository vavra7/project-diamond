import { NextPage } from 'next';

const withConditionalRedirect = (Page: NextPage<any>, location: string): NextPage => {
	console.log('withConditionalRedirect', location);

	const PageWithConditionalRedirect: NextPage<any> = () => {
		return <Page />;
	};

	return PageWithConditionalRedirect;
};

export default withConditionalRedirect;
