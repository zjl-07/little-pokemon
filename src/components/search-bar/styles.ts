import { typeScale } from '@styles/typography';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const InputContainer = styled.div`
	height: 3rem;
	display: inline-block;
	position: relative;

	font-size: ${typeScale.header3};

	border-radius: 0.25rem;
	box-shadow: 0.1rem 0.1rem 0.5rem ${({ theme }) => theme.shadowColor};
`;

export const Input = styled.input`
	height: inherit;
	padding: 0 1rem 0 3rem;

	border: none;
	border-radius: 0.25rem;

	&:focus-visible {
		outline: none;
	}
`;

export const SearchIcon = styled(FaSearch)`
	position: absolute;
	z-index: 1;

	margin-left: 1rem;
	margin-top: auto;
	margin-bottom: auto;
	top: 0;
	bottom: 0;
`;
