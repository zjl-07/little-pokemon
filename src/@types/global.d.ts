import { Dispatch } from 'react';

declare global {
	/**
	 * @type {T} - Type of spesific action type for each action creator
	 */
	type ActionType<T> = {
		type: T;
		payload?: any;
	};

	/**
	 * @type {T} : Type of context's state
	 * @type {G}: Type of actions
	 */
	type ContextType<T, G> = {
		state: T;
		dispatch: Dispatch<ActionType<G>>;
	};
}
