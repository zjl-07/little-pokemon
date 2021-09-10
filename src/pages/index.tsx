import React, { FC } from 'react';
import { GetServerSideProps } from 'next';

interface IHome {
	posts: [];
}

const Home: FC<IHome> = ({ posts }) => {
	console.log('home', posts);
	return <div>EMILDA</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	console.log('context', context);
	return {
		props: {
			posts: ['home'],
		},
	};
};

export default Home;
