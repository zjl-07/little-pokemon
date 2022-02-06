import { useCallback, useEffect, useState } from 'react';
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

const initialModalState = {
	content: null,
	modalVisible: false,
};
export default function usePokemon() {
	const { query } = useRouter();
	const [{ isLoading, isError, pokemonList, limit }, setState] =
		useState(initialState);
	const [modalState, setModalState] = useState(initialModalState);
	const [favPokemon, setFavPokemon] = useState({});

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

	const handlePokemonListItemClicked = useCallback(async (url) => {
		const { data } = await pokemonAPI.getPokemonDetails({
			url,
		});

		setModalState((prev) => ({
			...prev,
			modalVisible: true,
			content: data.data,
		}));
	}, []);

	const handleCloseModal = useCallback(() => {
		setModalState(initialModalState);
	}, []);

	useEffect(() => {
		const favs = localStorage.getItem('favs');
		if (favs) {
			const favsPokemon = JSON.parse(favs);
			setFavPokemon(favsPokemon);
		}
	}, []);

	const addToFavourite = useCallback(
		(name) => {
			let tempFav = Object.assign({}, favPokemon);
			if (tempFav[name]) {
				delete tempFav[name];
			} else {
				tempFav = {
					...tempFav,
					[name]: true,
				};
			}

			setFavPokemon(tempFav);
			localStorage.setItem('favs', JSON.stringify(tempFav));
		},
		[favPokemon],
	);

	return {
		isLoading,
		isError,
		pokemonList,
		modalState,
		favPokemon,
		addToFavourite,
		handleCloseModal,
		handlePokemonListItemClicked,
	};
}
