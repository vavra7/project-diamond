import { useCallback } from 'react';
import { Locale } from '@enums';
import { useTranslation } from '@localization/translationHook';
import { useRouter } from 'next/dist/client/router';

const LocaleSwitcher: React.FC = () => {
	const { locale, t } = useTranslation();
	const router = useRouter();

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLSelectElement>) => {
			const regex = new RegExp(`^/(${Object.values(Locale).join('|')})`);

			router.push(router.pathname, router.asPath.replace(regex, `/${e.target.value}`));
		},
		[router]
	);

	return (
		<select value={locale} onChange={handleChange}>
			{Object.values(Locale).map((item, index) => (
				<option key={index} value={item}>
					{t(`enums.locale.${item}`, undefined, item as Locale)}
				</option>
			))}
		</select>
	);
};

export default LocaleSwitcher;
