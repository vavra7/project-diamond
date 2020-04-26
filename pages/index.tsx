import Link from 'next/link';

function LandingPage() {
	return (
		<>
			<h1>Index</h1>

			<Link href="/file-upload">
				<a>file upload</a>
			</Link>

			<br />
			<br />

			<Link href="/ticker/[ticker]" as="/ticker/aapl">
				<a>[ticker]</a>
			</Link>
		</>
	);
}

export default LandingPage;
