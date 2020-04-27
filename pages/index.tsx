import Link from 'next/link';
import Layout1 from '../components/layouts/Layout1';

function LandingPage() {
	return (
		<>
			<Layout1>
				<h1>Index</h1>

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
