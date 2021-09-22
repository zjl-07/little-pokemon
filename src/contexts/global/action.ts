export enum actionTypesConstant {
	SET_USE_DARK_THEME = 'SET_USE_DARK_THEME',
}

export const setUseBlackTheme = (
	payload: boolean,
): ActionType<actionTypesConstant.SET_USE_DARK_THEME> => ({
	type: actionTypesConstant.SET_USE_DARK_THEME,
	payload,
});
