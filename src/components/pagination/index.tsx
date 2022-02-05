import { useRouter } from 'next/router';
import { memo } from 'react';

const Pagination = ({ totalPage = 1, currentPage = 1 }) => {
	const router = useRouter();

	return <div></div>;
};

export default memo(Pagination);
