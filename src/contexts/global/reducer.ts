import { actionTypesConstant } from './action';

export interface IGlobalState {
	useDarkTheme: boolean;
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
		default:
			return state;
	}
};
