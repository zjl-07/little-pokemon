import { typeScale } from '@styles/typography';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export const Container = styled.div`
	height: 3rem;
	background-color: ${({ theme }) => theme.secondaryColor};

	user-select: none;
	-ms-user-select: none;
	-moz-user-select: none;
	-webkit-user-select: none;

	cursor: pointer;
`;

export const DropdownContainer = styled.div`
	position: relative;
	height: inherit;
	padding: 0 1rem;

	display: flex;
	justify-content: center;
	align-items: center;

	font-size: ${typeScale.header3};
	line-height: 3rem;

	border-radius: 0.25rem;
	box-shadow: 0.1rem 0.1rem 0.5rem ${({ theme }) => theme.shadowColor};
`;

export const ArrowIconDown = styled(FaChevronDown)`
	margin-left: 1rem;
`;

export const ArrowIconUp = styled(FaChevronUp)`
	margin-left: 1rem;
`;

export const DropdownList = styled.div`
	font-size: ${typeScale.header3};
	margin-top: 0.4rem;

	border-radius: 0.25rem;
	box-shadow: 0.1rem 0.1rem 0.5rem ${({ theme }) => theme.shadowColor};
	background-color: ${({ theme }) => theme.secondaryColor};
`;

export const DropdownListItem = styled.div`
	padding: 0.75rem 1rem;

	&:hover {
		background-color: ${({ theme }) => theme.primaryColor};
	}
`;
