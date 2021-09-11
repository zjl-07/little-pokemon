import React, { FC, useState, useEffect, useContext } from 'react';
import { GetServerSideProps } from 'next';

import Navbar from '@components/navbar';
import SearchBar from '@components/search-bar';
import FilterDropdown from '@components/filter-dropdown';
import CountryList from '@components/country-list';

import { GlobalContext, setData } from '@contexts/global';

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

	const [countryList, setCountryList] = useState(data);
	const { dispatch } = useContext(GlobalContext);

	useEffect(() => {
		dispatch(setData(data));
	}, []);

	return (
		<Section>
			<Navbar />
			<Content>
				<Header>
					<SearchBar setData={setCountryList} data={countryList} />
					<FilterDropdown />
				</Header>
				<CountryList data={countryList} />
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

	return {
		props: {
			data,
		},
	};
};

export default Home;
