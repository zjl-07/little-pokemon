import React, { FC, memo, SetStateAction, useState, useCallback } from 'react';
import { injectIntl } from 'react-intl';

import { countryData } from '@contexts/global';

import { InputContainer, Input, SearchIcon } from './styles';

type searchBarProps = {
	data: countryData[];
	setFilteredData: SetStateAction<any>;
	intl: any;
};

const INITIAL_SEARCH_VALUE = '';
const ENTER_KEYBOARD_CODE = 13;

const SearchBar: FC<searchBarProps> = ({ data, setFilteredData, intl }) => {
	console.count('SearchBar');

	const [value, setValue] = useState<string>(INITIAL_SEARCH_VALUE);

	const handleSearchByName = useCallback(
		(e, value) => {
			if (e.keyCode === ENTER_KEYBOARD_CODE) {
				const newData = data.filter(
					(data) => data.name.toLowerCase().indexOf(value.toLowerCase()) == 0,
				);
				setFilteredData(newData);
			}
		},
		[data],
	);

	return (
		<InputContainer>
			<SearchIcon />
			<Input
				name='search'
				placeholder={intl.formatMessage({
					id: 'search_for_a_country',
				})}
				onChange={(e) => setValue(e.target.value)}
				onKeyDown={(e) => handleSearchByName(e, value)}
			/>
		</InputContainer>
	);
};

export default injectIntl(memo(SearchBar));
