import styles from './Layout1.module.scss';
import { Container } from '../common/grid';
import Link from 'next/link';
import { useTranslation } from '@localization/translationHook';
import LocaleSwitcher from '@components/localization/LocaleSwitcher';

interface Props {
	children: React.ReactNode;
}

const Layout1: React.FC<Props> = props => {
	const { locale, t } = useTranslation();

	return (
		<>
			<Container id="nav-bar" className={`${styles.navBar} ai-center`} fluid>
				<div id="brand" className="mr-3">
					<Link href="/[locale]" as={`/${locale}`}>
						<a className={styles.link}>PROJECT DIAMOND</a>
					</Link>
				</div>

				<ul id="nav" className={styles.nav}>
					<li>
						<Link href="/[locale]/charts" as={`/${locale}/charts`}>
							<a className={styles.link}>Charts</a>
						</Link>
					</li>

					<li>
						<Link href="/[locale]/file-upload" as={`/${locale}/file-upload`}>
							<a className={styles.link}>{t('trading.fileUpload.name')}</a>
						</Link>
					</li>
				</ul>

				<div className="fg-1 ta-right">
					<LocaleSwitcher />
				</div>
			</Container>

			{props.children}
		</>
	);
};

export default Layout1;
