import React, {
	FC,
	memo,
	SetStateAction,
	useState,
	useCallback,
	useContext,
} from 'react';
import { InputContainer, Input, SearchIcon } from './styles';
import { countryData, GlobalContext } from '@contexts/global';

interface ISearchBar {
	data: countryData[];
	setData: SetStateAction<any>;
}

const SearchBar: FC<ISearchBar> = ({ data, setData }) => {
	console.count('SearchBar');

	const {
		state: { data: initialData },
	} = useContext(GlobalContext);

	const [value, setValue] = useState<string>('');

	const handleSearchByName = useCallback(
		(e, value) => {
			if (e.keyCode === 13) {
				const newData = initialData.filter(
					(data) => data.name.toLowerCase().indexOf(value.toLowerCase()) == 0,
				);
				setData(newData);
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
