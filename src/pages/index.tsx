import React, { FC, useState } from 'react';
import { GetServerSideProps } from 'next';

import Navbar from '@components/navbar';
import SearchBar from '@components/search-bar';
import FilterDropdown from '@components/filter-dropdown';
import CountryList from '@components/country-list';

import { Section, Content, Header } from './styles';

type countryData = {
	numericCode: number;
	name: string;
	capital: string;
	population: number;
	region: string;
	subregion: string;
	flag: string;
};

interface IHome {
	data: countryData[];
}

const Home: FC<IHome> = ({ data }) => {
	console.log('home');

	const [countryList] = useState(data);
	const [filteredData, setFilteredData] = useState(data);

	return (
		<Section>
			<Navbar />
			<Content>
				<Header>
					<SearchBar setFilteredData={setFilteredData} data={countryList} />
					<FilterDropdown />
				</Header>
				<CountryList data={filteredData} />
			</Content>
		</Section>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	let data = [];

	try {
		const options = { method: 'GET' };
		const response = await fetch(
			'https://restcountries.eu/rest/v2/region/europe',
			options,
		);

		data = await response.json();
	} catch (error) {
		console.log(error);
	}

	//axios -> transform
	//rq?

	return {
		props: {
			data,
		},
	};
};

export default React.memo(Home);
