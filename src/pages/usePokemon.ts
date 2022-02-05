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
	limit: 30,
};

export default function usePokemon() {
	const { query } = useRouter();
	const [{ isLoading, isError, pokemonList, limit }, setState] =
		useState(initialState);

	useEffect(() => {
		setState((prev) => ({ ...prev, isLoading: true }));
		async function fetchPokemonList() {
			const { data, error } = await pokemonAPI.getPokemonList({
				page: Number(query.page) || 1,
				limit,
			});

			setState((prev) => ({
				...prev,
				isLoading: false,
				isError: error ?? prev.isError,
				pokemonList: data?.data ?? prev.pokemonList,
			}));
		}

		fetchPokemonList();
	}, [query.page]);

	return {
		isLoading,
		isError,
		pokemonList,
	};
}
