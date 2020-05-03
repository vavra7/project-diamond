export enum Locale {
	Czech = 'cs',
	English = 'en'
}

export const isLocale = (locale: any): locale is Locale => {
	return Object.values(Locale).includes(locale);
};
