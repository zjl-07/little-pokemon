import { actionTypesConstant } from './action';

export type globalStateType = {
	useDarkTheme: boolean;
};

export const GlobalReducer = (
	state: globalStateType,
	action: ActionType<actionTypesConstant>,
): globalStateType => {
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
