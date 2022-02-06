import styled from 'styled-components';
import { black, white } from '@styles/colors';
import { rgba } from 'polished';

export const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	z-index: 999;

	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100%;

	background-color: ${rgba(black[100], 0.7)};
`;

export const ModalContent = styled.div`
	position: relative;
	background: ${white[100]};
	padding: 1rem;
	border-radius: 1rem;
	box-shadow: 0.1rem 0.1rem 0.5rem ${({ theme }) => theme.shadowColor};
`;

export const CloseButton = styled.div`
	cursor: pointer;
	padding: 0.5rem;
	border-radius: 0.5rem;

	position: absolute;
	right: 1rem;
	top: -1rem;

	box-shadow: 0.1rem 0.1rem 0.5rem ${({ theme }) => theme.shadowColor};
	background-color: ${({ theme }) => theme.buttonPrimaryColor};

	font-weight: bold;
`;
