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

const FilterDropdown: FC = () => {
	const ref = useRef<HTMLDivElement>(null);
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
