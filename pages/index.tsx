import { ReactElement } from 'react';
import Link from 'next/link';
import Layout1 from '@components/layouts/Layout1';
import { Container, Row, Col } from '@components/common/grid';

function LandingPage(): ReactElement {
	return (
		<>
			<Layout1>
				<h1>Index</h1>

				<Container>
					<Row style={{ background: 'blue' }}>
						<Col style={{ background: 'yellow' }}>
							<div>col-12</div>
						</Col>
					</Row>

					<Row justifyContent="flex-end" alignItems="normal" style={{ height: '400px', background: 'red' }}>
						<div style={{ minHeight: '100px', background: 'yellow', margin: '5px' }}>klasdjflkůsafj</div>
						<div style={{ height: '100px', background: 'yellow', margin: '5px' }}>klasdjflkůsafj</div>
						<div style={{ height: '100px', background: 'yellow', margin: '5px' }}>klasdjflkůsafj</div>
						<Col xs={8} sm={12} style={{ minHeight: '100px', background: 'yellow' }}>
							Col
						</Col>
						<Col cols={5} style={{ minHeight: '100px', background: 'brown' }}>
							Col
						</Col>
					</Row>
				</Container>

				<div>asdf</div>

				<Link href="/file-upload">
					<a>file upload</a>
				</Link>

				<br />
				<br />

				<i className="icon-youtube-square" style={{ fontSize: '100px' }}></i>

				<Link href="/ticker/[ticker]" as="/ticker/aapl">
					<a>[ticker]</a>
				</Link>
			</Layout1>
		</>
	);
}

export default LandingPage;
