import React from 'react';
import { GetStaticProps } from 'next';

const Blog = (props) => {
	console.log('Blog', props);
	return <div>BLOG</div>;
};

export const getServerSideProps: GetStaticProps = async (context) => {
	console.log('context', context);
	return {
		props: {
			posts: ['Blog'],
		},
	};
};

export default Blog;
