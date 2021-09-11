import React, { FC, useEffect } from 'react';
import { GetServerSideProps } from 'next';

import Navbar from '@components/navbar';
import SearchBar from '@components/search-bar';
import FilterDropdown from '@components/filter-dropdown';
import CountryList from '@components/country-list';

import { Section, Content, Header } from './styles';
interface IHome {
	data: [];
}

const Home: FC<IHome> = ({ data }) => {
	console.count('Home');

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(
				'https://restcountries.eu/rest/v2/region/europe',
				{
					method: 'GET',
				},
			);

			const data = await response.json();
			console.log(data);
		}

		fetchData();
	}, []);

	return (
		<Section>
			<Navbar />
			<Content>
				<Header>
					<SearchBar />
					<FilterDropdown />
				</Header>
				<CountryList />
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
