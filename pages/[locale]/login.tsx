import Layout1 from '@components/layouts/Layout1';
import { Container, Row, Col } from '@components/common/grid';
import { useState } from 'react';
import axios from 'axios';

const login: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState({});
	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setEmail(e.target.value);
	};
	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setPassword(e.target.value);
	};
	const handleSubmit = async (): Promise<void> => {
		try {
			const res = await axios({
				method: 'POST',
				url: 'http://localhost:3000/api/login',
				headers: {
					'Content-Type': 'application/json'
				},
				data: {
					email,
					password
				}
			});

			if (res) setMessage(res);
		} catch (err) {
			if (err) setMessage(err);
		}
	};

	return (
		<Layout1>
			<Container>
				<Row justifyContent="center">
					<Col style={{ marginTop: '8%', width: '350px', background: '#ececec' }}>
						<h3 className="mt-2">Log In</h3>
						<div>
							<span>email</span>
							<input style={{ width: '100%' }} value={email} type="text" onChange={handleEmailChange} />
						</div>
						<div className="mt-3">
							<span>password</span>
							<input style={{ width: '100%' }} value={password} type="password" onChange={handlePasswordChange} />
						</div>
						<div className="mt-3 ta-right">
							<button type="submit" onClick={handleSubmit}>
								Submit
							</button>
						</div>
						<div className="mt-3">
							<pre>{JSON.stringify(message, null, 2)}</pre>
						</div>
					</Col>
				</Row>
			</Container>
		</Layout1>
	);
};

export default login;
