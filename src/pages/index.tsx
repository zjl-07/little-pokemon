import React from 'react';
import Navbar from '@components/navbar';
import usePokemon from './usePokemon';

import {
	PokemonContainer,
	PokemonCard,
	SeeDetailsButton,
	Section,
} from './styles';

import Pagination from '@components/pagination';

const Pokemon = () => {
	const { isLoading, isError, pokemonList } = usePokemon();

	if (isLoading)
		return (
			<Section>
				<Navbar title={'Pokemon'} />
				<div>isLoading...</div>
			</Section>
		);
	if (isError)
		return (
			<Section>
				<Navbar title={'Pokemon'} />
				<div>Error...</div>
			</Section>
		);

	return (
		<Section>
			<Navbar title={'Pokemon'} />
			<PokemonContainer>
				{pokemonList.results.map(({ name }: { name: string }) => (
					<PokemonCard key={name}>
						<div>{name}</div>
						<SeeDetailsButton>See Details</SeeDetailsButton>
					</PokemonCard>
				))}
			</PokemonContainer>
			<Pagination page={1} size={10} />
		</Section>
	);
};

export default Pokemon;
