import React, {
	FC,
	memo,
	useState,
	useCallback,
	useEffect,
	useRef,
} from 'react';
import {
	DropdownContainer,
	DropdownList,
	Container,
	ArrowIconDown,
	ArrowIconUp,
	DropdownListItem,
} from './styles';

const INITIAL_DROPDOWN_VALUE = false;
const INITIAL_REF_VALUE = null;

const FilterDropdown: FC = () => {
	console.count('FilterDropdown');

	const ref = useRef<HTMLDivElement>(INITIAL_REF_VALUE);
	const [showDropdownList, setDropdownListVisibile] = useState<boolean>(
		INITIAL_DROPDOWN_VALUE,
	);

	const handleToggleDropdownList = useCallback(() => {
		setDropdownListVisibile((prev) => !prev);
	}, []);

	const handleClickOutside = useCallback((e) => {
		if (!ref.current?.contains(e.target)) {
			setDropdownListVisibile(false);
		}
	}, []);

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<Container ref={ref}>
			<DropdownContainer onClick={handleToggleDropdownList}>
				Filter by region
				{showDropdownList ? <ArrowIconUp /> : <ArrowIconDown />}
			</DropdownContainer>
			{showDropdownList && (
				<DropdownList>
					<DropdownListItem>Africa</DropdownListItem>
					<DropdownListItem>America</DropdownListItem>
					<DropdownListItem>Anime</DropdownListItem>
				</DropdownList>
			)}
		</Container>
	);
};

export default memo(FilterDropdown);
