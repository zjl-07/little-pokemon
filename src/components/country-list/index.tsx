import React, { FC, memo, useCallback } from 'react';
import {
	CountryContainer,
	CountryCard,
	Content,
	Description,
	Title,
} from './styles';
import { UACustomEvent } from '@utils/GTMHelper';
import { countryData } from '@contexts/global';

interface ICountryList {
	data: countryData[];
}

const CountryList: FC<ICountryList> = ({ data }) => {
	const handleCardClick = useCallback((capital) => {
		console.log('CARD CLICK');

		UACustomEvent({
			eventCategory: 'Country Card',
			eventAction: 'click_country_card',
			eventLabel: `${capital}`,
		});
	}, []);
	return (
		<CountryContainer>
			{data.map((country: countryData) => (
				<CountryCard key={country.numericCode}>
					<img src={country.flag} width='100%'></img>
					<Content onClick={() => handleCardClick(country.capital)}>
						<Title>{country.name}</Title>
						<Description>Capital: {country.capital}</Description>
						<Description>Population: {country.population}</Description>
						<Description>Region: {country.region}</Description>
						<Description>Subregion: {country.subregion}</Description>
					</Content>
				</CountryCard>
			))}
		</CountryContainer>
	);
};

export default memo(CountryList);
// XMLHttpRequest
// protocol
