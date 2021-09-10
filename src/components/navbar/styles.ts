import { typeScale } from '@styles/typography';
import styled from 'styled-components';
import { FaRegMoon } from 'react-icons/fa';

export const NavbarContainer = styled.div`
	padding: 0 3rem;
	height: 4rem;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	background-color: ${({ theme }) => theme.secondaryColor};
	box-shadow: 0.1rem 0.1rem 0.5rem ${({ theme }) => theme.shadowColor};
`;

export const Title = styled.div`
	font-size: ${typeScale.header1};
	font-weight: bold;
`;

export const MoonIcon = styled(FaRegMoon)`
	font-size: ${typeScale.paragraph};
	vertical-align: middle;
	margin-right: 0.5rem;
`;

export const RightNavbarText = styled.div`
	font-size: ${typeScale.header3};
	vertical-align: middle;
	padding: 0.75rem;
	border-radius: 1rem;

	user-select: none;
	-ms-user-select: none;
	-moz-user-select: none;
	-webkit-user-select: none;

	cursor: pointer;

	transition: 0.25s ease-in;

	&:hover {
		background-color: ${({ theme }) => theme.primaryColor};
	}
`;
