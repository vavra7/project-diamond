import { useState } from 'react';
import Head from 'next/head';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Layout1 from '../components/layouts/Layout1';
import axiois from 'axios';

function FileUpload() {
	const [file, setFile] = useState<File | null>(null);

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const fileList = e.target.files;

		if (fileList && fileList.length && fileList[0]) {
			setFile(fileList[0]);
		}
	};

	const onSend = () => {
		if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
			alert('The File APIs are not fully supported by your browser. Fallback required.');
			return;
		} else if (file) {
			const reader = new FileReader();
			reader.onload = e => {
				const url = 'http://localhost:3000/api/file-upload';
				const body = { file: e.target?.result };

				return axiois.post(url, body);
			};

			reader.readAsDataURL(file);
		}
	};

	return (
		<Layout1>
			<Head>
				<title>File Upload</title>
			</Head>

			<Container className="mt-3">
				<Row>
					<Col>
						<Form>
							<Form.File
								id="custom-file"
								label={file ? file.name : 'Custom file input'}
								onChange={onInputChange}
								custom
							/>
						</Form>
					</Col>

					<Col>
						<Button onClick={onSend}>Send</Button>
					</Col>
				</Row>

				<Row>
					<Col className="mt-3">Download data on: https://stooq.com/db/h/</Col>
				</Row>
			</Container>
		</Layout1>
	);
}

export default FileUpload;
