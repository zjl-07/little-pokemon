import { useEffect, useState } from 'react';
import pokemonAPI from '@APIs/pokemon';
import { useRouter } from 'next/router';

const initialState = {
	isLoading: false,
	isError: null,
	pokemonList: {
		next: null,
		prev: null,
		results: [],
	},
	page: 1,
	limit: 20,
};

export default function usePokemon() {
	const { query, push } = useRouter();
	const [{ isLoading, isError, pokemonList, page, limit }, setState] =
		useState(initialState);

	useEffect(() => {
		setState((prev) => ({ ...prev, isLoading: true }));
		async function fetchPokemonList() {
			const { data, error } = await pokemonAPI.getPokemonList({ page, limit });

			setState((prev) => ({
				...prev,
				isLoading: false,
				isError: error ?? prev.isError,
				pokemonList: data?.data ?? prev.pokemonList,
			}));
		}
		fetchPokemonList();
	}, []);

	return {
		isLoading,
		isError,
		pokemonList,
	};
}
