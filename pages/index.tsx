import { useEffect } from 'react';
import { useRouter, NextRouter } from 'next/dist/client/router';
import { getAppLocale } from '@localization';
import Head from 'next/head';

const LocaleRouter: React.FC = () => {
	const router: NextRouter = useRouter();

	useEffect(() => {
		router.replace('/[locale]', `/${getAppLocale()}`);
	}, []);

	return (
		<Head>
			<meta name="robots" content="noindex, nofollow" />
		</Head>
	);
};

export default LocaleRouter;
