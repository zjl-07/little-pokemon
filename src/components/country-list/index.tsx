import React, { FC, memo, useContext } from 'react';
import {
	CountryContainer,
	CountryCard,
	Content,
	Description,
	Title,
} from './styles';

import { countryData } from '@contexts/global';

interface ICountryList {
	data: countryData[];
}

const CountryList: FC<ICountryList> = ({ data }) => {
	return (
		<CountryContainer>
			{data.map((country: countryData) => {
				return (
					<CountryCard key={country.numericCode}>
						<img src={country.flag} width='100%'></img>
						<Content>
							<Title>{country.name}</Title>
							<Description>Capital: {country.capital}</Description>
							<Description>Population: {country.population}</Description>
							<Description>Region: {country.region}</Description>
							<Description>Subregion: {country.subregion}</Description>
						</Content>
					</CountryCard>
				);
			})}
		</CountryContainer>
	);
};

export default memo(CountryList);
