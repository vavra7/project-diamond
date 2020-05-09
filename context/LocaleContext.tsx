import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Locale, LocalStorage, isLocale } from '@enums';

interface LocaleContextProps {
	readonly locale: Locale;
	readonly setLocale: (locale: Locale) => void;
}

export const LocaleContext = createContext<LocaleContextProps>({
	locale: Locale.English,
	setLocale: () => null
});

export const LocaleProvider: React.FC<{ value: Locale }> = ({ value, children }) => {
	const [locale, setLocale] = useState(value);
	const { query } = useRouter();

	useEffect(() => {
		if (typeof query.locale === 'string' && isLocale(query.locale) && locale !== query.locale) {
			setLocale(query.locale);
		}
	}, [query.locale, locale]);

	useEffect(() => {
		if (globalThis && locale !== globalThis.localStorage.getItem(LocalStorage.Locale)) {
			globalThis.localStorage.setItem(LocalStorage.Locale, locale);
		}
	}, [locale]);

	return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
};
