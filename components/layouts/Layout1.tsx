import styles from './Layout1.module.scss';
import { Container } from '../common/grid';
import Link from 'next/link';

interface Props {
	children: React.ReactNode;
}

const Layout1: React.FC<Props> = props => {
	return (
		<>
			<Container id="nav-bar" className={styles.navBar} fluid>
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

			{props.children}
		</>
	);
};

export default Layout1;
