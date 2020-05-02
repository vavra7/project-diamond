import styles from './Layout1.module.scss';
import { Container } from '../common/grid';
import Link from 'next/link';

interface Layout1Props {
	children: React.ReactNode;
}

function Layout1({ children }: Layout1Props) {
	console.log(styles);

	return (
		<>
			<Container className={styles.navBar} fluid>
				<div id="brand" className="mr-3">
					<Link href="/">
						<a className={styles.link}>PROJECT DIAMOND</a>
					</Link>
				</div>

				<ul id="nav" className={styles.nav}>
					<li>
						<Link href="/charts">
							<a className={styles.link}>Charts</a>
						</Link>
					</li>

					<li>
						<Link href="/file-upload">
							<a className={styles.link}>File Upload</a>
						</Link>
					</li>
				</ul>
			</Container>

			{children}
		</>
	);
}

export default Layout1;
