import React, { FC, memo, useContext, useCallback } from 'react';
import { NavbarContainer, Title, RightNavbarText, MoonIcon } from './styles';
import { GlobalContext, setUseBlackTheme } from '@contexts/global';

const Navbar: FC = () => {
	console.count('Navbar');

	const {
		state: { useDarkTheme },
		dispatch,
	} = useContext(GlobalContext);

	const handleSetUseDarkTheme = useCallback(() => {
		dispatch(setUseBlackTheme(!useDarkTheme));
	}, [useDarkTheme]);

	return (
		<NavbarContainer>
			<Title>Where in the world ?</Title>
			<RightNavbarText onClick={handleSetUseDarkTheme}>
				<MoonIcon />
				Dark Mode
			</RightNavbarText>
		</NavbarContainer>
	);
};

export default memo(Navbar);
