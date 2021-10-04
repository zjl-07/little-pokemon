import React, { FC, useState, memo } from 'react';
import { GetServerSideProps } from 'next';

import Navbar from '@components/navbar';
import SearchBar from '@components/search-bar';
import FilterDropdown from '@components/filter-dropdown';
import CountryList from '@components/country-list';

import countryAPI from '@APIs/country';

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

type homeProps = {
	data: countryData[];
	error: Error;
};

const Home: FC<homeProps> = ({ data, error }) => {
	console.log('home');

	const [countryList] = useState(data);
	const [filteredData, setFilteredData] = useState(data);

	if (error) return <div>Error...</div>;

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
	const { data, error } = await countryAPI.getCountryList();

	return {
		props: {
			data,
			error,
		},
	};
};

export default memo(Home);
