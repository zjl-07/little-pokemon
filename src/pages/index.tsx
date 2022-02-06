import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Home = () => {
	const { push } = useRouter();
	useEffect(() => {
		push({
			pathname: '/pokemon',
		});
	}, []);
	return <div />;
};

export default Home;
