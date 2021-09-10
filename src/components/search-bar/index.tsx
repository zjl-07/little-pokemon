import React, { FC, memo } from 'react';
import { SearchBarContainer } from './styles';

const SearchBar: FC = () => {
	return <SearchBarContainer>Search Bar</SearchBarContainer>;
};

export default memo(SearchBar);
