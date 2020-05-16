import App, { AppInitialProps } from 'next/app';
import Head from 'next/head';
import { AuthProvider } from '@context/AuthContext';
import cookie from 'cookie';
import '@fonts/fonts.scss';
import '@styles/styles.scss';

interface AppProps {
	authenticated: boolean;
}

class ProjectDiamondApp extends App<AppProps> {
	public render(): React.ReactElement {
		const { Component, pageProps, authenticated } = this.props;

		return (
			<>
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				</Head>

				<AuthProvider value={authenticated}>
					<Component {...pageProps} />
				</AuthProvider>
			</>
		);
	}
}

ProjectDiamondApp.getInitialProps = async (context): Promise<AppInitialProps & AppProps> => {
	const request = context.ctx.req;
	const appProps = await App.getInitialProps(context);

	if (request) {
		const cookies = cookie.parse(request.headers.cookie ?? '');

		console.log(cookies);
	}

	return { ...appProps, authenticated: false };
};

export default ProjectDiamondApp;
