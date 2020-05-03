import { ReactElement, useEffect } from 'react';
import { useRouter, NextRouter } from 'next/dist/client/router';
import { getDefaultLocale } from '@localization';
import { Locale } from '@enums';

function LocaleRouter(): ReactElement {
	const router: NextRouter = useRouter();
	const locale: Locale = getDefaultLocale();

	useEffect(() => {
		router.replace('/[locale]', `/${locale}`);
	}, []);

	return <div>locale router</div>;
}

export default LocaleRouter;
