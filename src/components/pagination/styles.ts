import styled from 'styled-components';
import { typeScale } from '@styles/typography';
import { yellow } from '@styles/colors';

export const PaginationContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	font-size: ${typeScale.header1};

	position: absolute;
	bottom: 3rem;
	right: 3rem;

	& > div {
		padding: 0.5rem;
	}

	@media (max-width: 1110px) {
		position: sticky;
		bottom: 0;
		background-color: ${({ theme }) => theme.secondaryColor};
		box-shadow: 0.1rem 0.1rem 0.5rem ${({ theme }) => theme.shadowColor};
		justify-content: center;
		padding: 0.5rem 0;
	}
`;

export const PaginationButton = styled.div`
	cursor: pointer;
`;

export const NextButton = styled(PaginationButton)``;
export const PrevButton = styled(PaginationButton)``;
export const PaginationNumber = styled(PaginationButton)`
	color: ${(props) => (props['data-selected'] ? yellow[300] : 'default')};
	font-weight: ${(props) => (props['data-selected'] ? 'bold' : 'initial')}; ;
`;
