import React, { FC } from 'react';
import { GetServerSideProps } from 'next';
import { Section, Content } from './styles';
import Navbar from '@components/navbar';

interface IHome {
	data: [];
}

const Home: FC<IHome> = ({ data }) => {
	return (
		<Section>
			<Navbar />
			<Content>Emilda Zhang</Content>
		</Section>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	return {
		props: {
			data: ['home'],
		},
	};
};

export default Home;
