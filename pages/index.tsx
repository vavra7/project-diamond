import Link from 'next/link';
import Layout1 from '../components/layouts/Layout1';
import { Container, Row } from '../components/common/grid';

function LandingPage() {
	return (
		<>
			<Layout1>
				<h1>Index</h1>

				<Container>
					<Row>
						<div>klasdjflkůsafj</div>
						<br></br>
						<div>klasdjflkůsafj</div>
					</Row>
				</Container>

				<div>asdf</div>

				<Link href="/file-upload">
					<a>file upload</a>
				</Link>

				<br />
				<br />

				<Link href="/ticker/[ticker]" as="/ticker/aapl">
					<a>[ticker]</a>
				</Link>
			</Layout1>
		</>
	);
}

export default LandingPage;
