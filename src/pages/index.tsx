import React from 'react';
import Navbar from '@components/navbar';
import usePokemon from './usePokemon';

import {
	PokemonContainer,
	PokemonCard,
	SeeDetailsButton,
	Section,
} from './styles';

const Pokemon = () => {
	const { isLoading, isError, pokemonList } = usePokemon();

	if (isLoading) return <div>isLoading...</div>;
	if (isError) return <div>Error happen</div>;

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
		</Section>
	);
};

export default Pokemon;
