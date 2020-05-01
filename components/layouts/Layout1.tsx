import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

interface Layout1Props {
	children: React.ReactNode;
}

function Layout1({ children }: Layout1Props) {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand>
					<Link href="/">
						<span>PROJECT DIAMOND</span>
					</Link>
				</Navbar.Brand>

				<Nav>
					<Nav.Link>
						<Link href="/charts">
							<span>Charts</span>
						</Link>
					</Nav.Link>

					<Nav.Link>
						<Link href="/file-upload">
							<span>File Upload</span>
						</Link>
					</Nav.Link>
				</Nav>
			</Navbar>

			{children}
		</>
	);
}

export default Layout1;
