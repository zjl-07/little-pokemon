import { countryData } from './reducer';

export enum actionTypesConstant {
	SET_USE_DARK_THEME = 'SET_USE_DARK_THEME',
	SET_DATA = 'SET_DATA',
}

export const setUseBlackTheme = (
	payload: boolean,
): ActionType<actionTypesConstant.SET_USE_DARK_THEME> => ({
	type: actionTypesConstant.SET_USE_DARK_THEME,
	payload,
});

export const setData = (
	payload: countryData[],
): ActionType<actionTypesConstant.SET_DATA> => ({
	type: actionTypesConstant.SET_DATA,
	payload,
});
