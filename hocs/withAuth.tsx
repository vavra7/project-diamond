import { NextPage } from 'next';
import withConditionalRedirect from './withConditionalRedirect';

const withAuth = (Page: NextPage<any>, location = '/login'): NextPage => {
	console.log('withAuth');

	// const PageWithAuth: NextPage<any> = () => {
	// 	return <Page />;
	// };

	return withConditionalRedirect(Page, location);
};

export default withAuth;
