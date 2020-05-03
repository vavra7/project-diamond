import App from 'next/app';
import Head from 'next/head';
import '@fonts/fonts.scss';
import '@styles/styles.scss';

class ProjectDiamondApp extends App {
	public render(): React.ReactElement {
		const { Component, pageProps } = this.props;

		return (
			<>
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				</Head>

				<Component {...pageProps} />
			</>
		);
	}
}

export default ProjectDiamondApp;
