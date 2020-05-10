import { useContext } from 'react';
import { LocaleContext } from '@context/LocaleContext';
import { cs } from '@localization/cs';
import { en } from '@localization/en';
import { Locale, isLocale } from '@enums';

interface TranslationHook {
	locale: string;
	t(path: string, args?: string | string[] | undefined, toLocale?: Locale | undefined): string;
}

const translations = {
	cs,
	en
};

export const useTranslation = (): TranslationHook => {
	const { locale } = useContext(LocaleContext);

	const t: TranslationHook['t'] = function (path, args, toLocale) {
		let localeTranslations: object;

		if (args) {
			console.warn('TODO: args are not implemented');
		}

		if (isLocale(toLocale)) {
			localeTranslations = translations[toLocale];
		} else {
			localeTranslations = translations[locale];
		}

		const translation = path
			.split('.')
			.reduce((prevVal: any, currentVal: any) => (prevVal && prevVal[currentVal]) || null, localeTranslations);

		if (translation) {
			return translation;
		} else {
			console.warn(`Can not find translation path "${path}".`);

			return path;
		}
	};

	return { locale, t };
};
