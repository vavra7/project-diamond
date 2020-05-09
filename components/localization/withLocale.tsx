import { NextPage } from 'next';
import { Locale, isLocale } from '@enums';
import Error from 'next/error';
import { LocaleProvider } from '@context/LocaleContext';

interface PageWithLocaleProps {
	locale?: Locale;
}

const withLocale = (Page: NextPage<any>): React.FC => {
	const PageWithLocale: NextPage<any, PageWithLocaleProps> = ({ locale, ...pageProps }) => {
		if (!locale) {
			return <Error statusCode={404} />;
		} else {
			return (
				<LocaleProvider value={locale}>
					<Page {...pageProps} />
				</LocaleProvider>
			);
		}
	};

	PageWithLocale.getInitialProps = async (ctx): Promise<PageWithLocaleProps> => {
		let pageWithLocaleProps = {
			locale: undefined as undefined | string
		};

		if (Page.getInitialProps) {
			pageWithLocaleProps = { ...(await Page.getInitialProps(ctx)) };
		}
		if (typeof ctx.query.locale === 'string' && isLocale(ctx.query.locale)) {
			pageWithLocaleProps.locale = ctx.query.locale;
		}

		return pageWithLocaleProps as PageWithLocaleProps;
	};

	return PageWithLocale;
};

export default withLocale;
