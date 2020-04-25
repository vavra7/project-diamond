import Head from 'next/head';
import { Navbar, Container, Row, Col, Form } from 'react-bootstrap';
import axiois from 'axios';

function FileUpload() {
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
			alert('The File APIs are not fully supported by your browser. Fallback required.');
		}

		const fileList = e.target.files;

		if (fileList?.length) {
			const reader = new FileReader();
			reader.onload = e => {
				console.log('loaded -> sending...');

				const url = 'http://localhost:3000/api/file-upload';
				const formData = { file: e.target?.result };

				return axiois.post(url, formData).then(res => {
					console.log(res)
				})
			};

			reader.readAsDataURL(fileList[0]);
		}
	};

	return (
		<>
			<Head>
				<title>File Upload</title>
			</Head>

			<Navbar bg="dark" variant="dark">
				<Navbar.Brand>PROJECT DIAMOND</Navbar.Brand>
			</Navbar>

			<Container className="mt-3">
				<Row>
					<Col>
						<Form>
							<Form.File id="custom-file" label="Custom file input" onChange={onChange} custom />
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default FileUpload;
