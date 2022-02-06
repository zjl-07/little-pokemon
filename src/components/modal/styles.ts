import styled from 'styled-components';
import { black, white } from '@styles/colors';
import { rgba } from 'polished';

export const ModalContainer = styled.div`
	position: absolute;
	top: 0;
	z-index: 999;

	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100%;

	background-color: ${rgba(black[100], 0.15)};
`;

export const ModalContent = styled.div`
	position: relative;
	background: ${white[100]};
	padding: 1rem;
	border-radius: 1rem;
	box-shadow: 0.1rem 0.1rem 0.5rem ${({ theme }) => theme.shadowColor};
`;
