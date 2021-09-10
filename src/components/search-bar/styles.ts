import { typeScale } from '@styles/typography';
import styled from 'styled-components';
import { FaRegMoon } from 'react-icons/fa';

export const SearchBarContainer = styled.input`
	padding: 0 3rem;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	height: 4rem;
	background-color: ${({ theme }) => theme.secondaryColor};
`;
