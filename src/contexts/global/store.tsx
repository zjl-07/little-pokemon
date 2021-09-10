import React, {
	createContext,
	useReducer,
	ReactNode,
	ReactElement,
} from 'react';
import { GlobalReducer } from './reducer';
import { actionTypesConstant } from './action';
import { IGlobalState } from './reducer';

const initialState: IGlobalState = {
	useDarkTheme: false,
};

export const GlobalContext = createContext(
	{} as ContextType<IGlobalState, actionTypesConstant>,
);

export const Store = ({ children }: { children: ReactNode }): ReactElement => {
	const [state, dispatch] = useReducer(GlobalReducer, initialState);

	return (
		<GlobalContext.Provider
			value={{
				state,
				dispatch,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
