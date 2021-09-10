import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
	font-size: 50px;
	color: ${({ theme }) => theme.colors.primary};
`;
// posts will be populated at build time by getStaticProps()
function Blog({ posts }) {
	console.log('blog', posts);
	return (
		<ul>
			{/* {posts.map((post) => (
				<li>{post.title}</li>
			))} */}
		</ul>
	);
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps(context: any) {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	// const res = await fetch('https://.../posts');
	// const posts = await res.json();

	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	console.log('context', context);
	return {
		props: {
			posts: ['emilda'],
		},
	};
}

export default Blog;
