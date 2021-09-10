import React, { FC, memo } from 'react';
import { InputContainer, Input, SearchIcon } from './styles';

const SearchBar: FC = () => {
	return (
		<InputContainer>
			<SearchIcon />
			<Input
				name='search'
				placeholder='Search for a country...'
				onChange={(e) => console.log(e.target.value)}
			/>
		</InputContainer>
	);
};

export default memo(SearchBar);
