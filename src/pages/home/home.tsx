import React, { memo } from 'react';

const Home = ({ posts }) => {
	console.log('Home', posts);
	return <h1>HOME</h1>;
};

export default memo(Home);
