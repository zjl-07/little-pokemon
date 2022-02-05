import React, { FC, memo, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import {
	NextButton,
	PaginationContainer,
	PaginationNumber,
	PrevButton,
} from './styles';

type PaginationProps = {
	page: number;
	size: number;
};

const maxPageNumberShown = 5;

const Pagination: FC<PaginationProps> = ({ page = 1, size = 1 }) => {
	const { query, push, pathname } = useRouter();
	const [{ currentPage, totalPage }, setState] = useState({
		currentPage: page,
		totalPage: size,
	});

	useEffect(() => {
		setState((prev) => ({
			...prev,
			currentPage: Number(query.page) || 1,
		}));
	}, [query.page, query.size]);

	const handlePaginationButtonClicked = (type, pageNumber = 1) => {
		const newPage = {
			prev: currentPage - 1,
			next: currentPage + 1,
			number: pageNumber,
		};

		push({
			pathname,
			query: {
				...query,
				page: newPage[type],
			},
		});
	};

	return (
		<PaginationContainer>
			{currentPage !== 1 && (
				<PrevButton
					onClick={() => handlePaginationButtonClicked('prev')}
				>{`<`}</PrevButton>
			)}
			{Array.from({
				length: currentPage > maxPageNumberShown ? maxPageNumberShown : currentPage,
			}).map((_, idx) => {
				let displayNumber = idx + 1;

				if (currentPage > maxPageNumberShown) {
					let remainder = Math.floor(currentPage % maxPageNumberShown);
					const times = Math.floor(currentPage / maxPageNumberShown);
					if (times > 1) {
						remainder += maxPageNumberShown * times;
						displayNumber = remainder - maxPageNumberShown + displayNumber;
					} else {
						displayNumber += remainder;
					}
				}
				if (displayNumber === totalPage) return;

				return (
					<PaginationNumber
						key={displayNumber}
						onClick={() => handlePaginationButtonClicked('number', displayNumber)}
						data-selected={currentPage === displayNumber}
					>
						{displayNumber}
					</PaginationNumber>
				);
			})}
			{currentPage + 1 < totalPage && <div>...</div>}
			<PaginationNumber
				onClick={() => handlePaginationButtonClicked('number', totalPage)}
				data-selected={currentPage === totalPage}
			>
				{totalPage}
			</PaginationNumber>
			{currentPage < totalPage && (
				<NextButton
					onClick={() => handlePaginationButtonClicked('next')}
				>{`>`}</NextButton>
			)}
		</PaginationContainer>
	);
};

export default memo(Pagination);
