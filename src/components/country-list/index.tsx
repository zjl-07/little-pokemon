import React, { FC, memo, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';

import { UACustomEvent } from '@utils/GTMHelper';
import { countryData } from '@contexts/global';

import {
	CountryContainer,
	CountryCard,
	Content,
	Description,
	Title,
} from './styles';

type countryListProps = {
	data: countryData[];
};

const CountryList: FC<countryListProps> = ({ data }) => {
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
			{data.map(
				({
					capital,
					name,
					population,
					region,
					subregion,
					flag,
					numericCode,
				}: countryData) => (
					<CountryCard key={numericCode}>
						<img src={flag} width='100%' />
						<Content onClick={() => handleCardClick(capital)}>
							<Title>{name}</Title>
							<Description>
								<FormattedMessage id='country_capital' values={{ capital }} />
							</Description>
							<Description>
								<FormattedMessage id='country_population' values={{ population }} />
							</Description>
							<Description>
								<FormattedMessage id='country_region' values={{ region }} />
							</Description>
							<Description>
								<FormattedMessage id='country_subregion' values={{ subregion }} />
							</Description>
						</Content>
					</CountryCard>
				),
			)}
		</CountryContainer>
	);
};

export default memo(CountryList);
