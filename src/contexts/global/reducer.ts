import { actionTypesConstant } from './action';

export type countryData = {
	numericCode: number;
	name: string;
	capital: string;
	population: number;
	region: string;
	subregion: string;
	flag: string;
};

export interface IGlobalState {
	useDarkTheme: boolean;
	data: countryData[];
}

export const GlobalReducer = (
	state: IGlobalState,
	action: ActionType<actionTypesConstant>,
): IGlobalState => {
	switch (action.type) {
		case actionTypesConstant.SET_USE_DARK_THEME:
			return {
				...state,
				useDarkTheme: action.payload,
			};
		case actionTypesConstant.SET_DATA:
			return {
				...state,
				data: action.payload,
			};
		default:
			return state;
	}
};
