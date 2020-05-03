import { useState } from 'react';
import Head from 'next/head';
import { Container, Row, Col } from '@components/common/grid';
import Layout1 from '@components/layouts/Layout1';
import axiois, { AxiosResponse } from 'axios';

const FileUpload: React.FC = () => {
	const [file, setFile] = useState<File | null>(null);

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const fileList = e.target.files;

		if (fileList && fileList.length && fileList[0]) {
			setFile(fileList[0]);
		}
	};

	const onSend = (): void => {
		if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
			alert('The File APIs are not fully supported by your browser. Fallback required.');
			return;
		} else if (file) {
			const reader = new FileReader();
			reader.onload = (e): Promise<AxiosResponse> => {
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

			<Container>
				<Row>
					<Col>
						<input type="file" onChange={onInputChange} />
						<button type="button" onClick={onSend}>
							Send
						</button>
					</Col>
				</Row>

				<Row>
					<Col>Download data on: https://stooq.com/db/h/</Col>
				</Row>
			</Container>
		</Layout1>
	);
};

export default FileUpload;
