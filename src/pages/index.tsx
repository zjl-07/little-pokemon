import React, { FC } from 'react';
import { GetServerSideProps } from 'next';

import Navbar from '@components/navbar';
import SearchBar from '@components/search-bar';
import FilterDropdown from '@components/filter-dropdown';

import { Section, Content, Header } from './styles';
interface IHome {
	data: [];
}

const Home: FC<IHome> = ({ data }) => {
	return (
		<Section>
			<Navbar />
			<Content>
				<Header>
					<SearchBar />
					<FilterDropdown />
				</Header>
			</Content>
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
