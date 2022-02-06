import React from 'react';
import Navbar from '@components/navbar';
import usePokemon from '@utils/pokemon/usePokemon';

import {
	PokemonContainer,
	PokemonCard,
	SeeDetailsButton,
	Section,
	FavouriteButton,
	PokemonCardName,
} from '@utils/pokemon/styles';

import Pagination from '@components/pagination';
import PokemonDetailsModal from '@components/pokemon-details-modal';

const Pokemon = () => {
	const {
		isLoading,
		isError,
		pokemonList,
		modalState,
		favPokemon,
		handleCloseModal,
		addToFavourite,
		handlePokemonListItemClicked,
	} = usePokemon();

	if (isLoading || !pokemonList.results.length)
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
				{pokemonList.results.map(({ name, url }: { name: string; url: string }) => (
					<PokemonCard key={name}>
						<PokemonCardName>
							<FavouriteButton onClick={() => addToFavourite(name)}>
								<img
									src={`heart-_${favPokemon[name] ? 1 : 2}_.svg`}
									width={20}
									height={20}
								></img>
							</FavouriteButton>
							{name}
						</PokemonCardName>
						<SeeDetailsButton onClick={() => handlePokemonListItemClicked(url)}>
							See Details
						</SeeDetailsButton>
					</PokemonCard>
				))}
			</PokemonContainer>
			<Pagination page={1} size={10} />
			<PokemonDetailsModal
				visible={modalState.modalVisible}
				handleCloseModal={handleCloseModal}
				data={modalState?.content}
			/>
		</Section>
	);
};

export default Pokemon;
