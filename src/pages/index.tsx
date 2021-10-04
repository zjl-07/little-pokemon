import React, { FC, useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';

import Navbar from '@components/navbar';
import SearchBar from '@components/search-bar';
import FilterDropdown from '@components/filter-dropdown';
import CountryList from '@components/country-list';

import { data as DUMMY_DATA } from '@components/country-list/data';
import { fireGoogleAnalyticEvent } from '@utils/googleAnalytics';

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

	useEffect(() => {
		fireGoogleAnalyticEvent({
			eventCategory: 'Home Page',
			eventAction: 'open_homepage',
			eventLabel: 'open_homepage_event_label',
			eventValue: 100,
		});
	}, []);

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
		// const options = { method: 'GET' };
		// const response = await fetch(
		// 	'https://restcountries.eu/rest/v2/region/europe',
		// 	options,
		// );

		// data = await response.json();

		data = await new Promise((resolve) => {
			setTimeout(() => {
				resolve(DUMMY_DATA);
			}, 1000);
		});
	} catch (error) {
		console.log(error);
	}

	return {
		props: {
			data,
		},
	};
};

export default React.memo(Home);
