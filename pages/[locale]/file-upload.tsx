import { useState } from 'react';
import Head from 'next/head';
import { Container, Row, Col } from '@components/common/grid';
import Layout1 from '@components/layouts/Layout1';
import axiois, { AxiosResponse } from 'axios';
import withLocale from '@components/localization/withLocale';
import { useTranslation } from '@localization/translationHook';

const FileUpload: React.FC = () => {
	const [file, setFile] = useState<File | null>(null);
	const { t } = useTranslation();

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
				<title>{t('metadata.fileUpload.title')}</title>
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
					<Col>
						<span>{t('trading.fileUpload.downloadOn')}</span>
						<span>: https://stooq.com/db/h/</span>
					</Col>
				</Row>
			</Container>
		</Layout1>
	);
};

export default withLocale(FileUpload);
