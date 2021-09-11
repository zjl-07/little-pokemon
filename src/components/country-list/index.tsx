import React, { FC, memo } from 'react';
import {
	CountryContainer,
	CountryCard,
	Content,
	Description,
	Title,
} from './styles';
import { data as DummyData } from './data';

interface ICountryList {
	data: [];
}
const CountryList: FC = ({ data = DummyData }) => {
	return (
		<CountryContainer>
			{data.map((country) => {
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
