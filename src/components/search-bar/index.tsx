import React, { FC, memo, SetStateAction, useState, useCallback } from 'react';
import { InputContainer, Input, SearchIcon } from './styles';
import { countryData } from '@contexts/global';

interface ISearchBar {
	data: countryData[];
	setFilteredData: SetStateAction<any>;
}

const INITIAL_SEARCH_VALUE = '';
const ENTER_KEYBOARD_CODE = 13;

const SearchBar: FC<ISearchBar> = ({ data, setFilteredData }) => {
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
				placeholder='Search for a country...'
				onChange={(e) => setValue(e.target.value)}
				onKeyDown={(e) => handleSearchByName(e, value)}
			/>
		</InputContainer>
	);
};

export default memo(SearchBar);
