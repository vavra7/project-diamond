import Link from 'next/link';

function LandingPage() {
	return (
		<>
			<h1>asdfsadf</h1>
			<div>něco</div>

			<Link href="/[ticker]" as="/aapl">
				<a>[ticker]</a>
			</Link>
		</>
	);
}

export default LandingPage;
