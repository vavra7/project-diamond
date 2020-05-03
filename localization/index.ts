import { Locale } from '@enums';

/**
 * Exports locale from browser
 */
export function getBrowserLocale(langOnly = false): string {
	let locale = '';

	if (!globalThis) return locale;

	if (globalThis.navigator?.languages?.[0]) {
		locale = globalThis.navigator.languages[0];
	} else if (globalThis.navigator?.language) {
		locale = globalThis.navigator.language;
	}

	if (langOnly) {
		locale = locale.trim().split(/-|_/)[0];
	}

	return locale;
}

/**
 * Maps any locale into app' supported locale
 */
export function mapToAppLocale(locale: string): Locale {
	switch (locale) {
		case Locale.Czech:
			return Locale.Czech;
		case Locale.English:
			return Locale.English;
		default:
			return Locale.English;
	}
}

/**
 * Returns default locale
 */
export function getDefaultLocale(): Locale {
	return mapToAppLocale(getBrowserLocale(true));
}
