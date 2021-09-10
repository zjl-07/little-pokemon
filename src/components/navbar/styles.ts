import { typeScale } from '@styles/typography';
import styled from 'styled-components';
import { FaRegMoon } from 'react-icons/fa';

export const NavbarContainer = styled.div`
	padding: 0 3rem;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	height: 4rem;
	background-color: ${({ theme }) => theme.secondaryColor};
`;

export const Title = styled.div`
	font-size: ${typeScale.header1};
	font-weight: bold;
`;

export const RightNavbarText = styled.div`
	font-size: ${typeScale.header3};
	vertical-align: middle;
`;

export const MoonIcon = styled(FaRegMoon)`
	font-size: ${typeScale.paragraph};
	vertical-align: middle;
	margin-right: 0.5rem;
`;
