import withAuth from '../../hocs/withAuth';
import { useContext } from 'react';
import { AuthContext } from '@context/AuthContext';

const Profile: React.FC = () => {
	const { authenticated } = useContext(AuthContext);

	console.log('profile');

	return (
		<div>
			Profile
			<pre>{JSON.stringify(authenticated, null, 2)}</pre>
		</div>
	);
};

export default withAuth(Profile, '/my/custom/location');
