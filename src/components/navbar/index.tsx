import React, { FC, memo, useContext, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';

import { GlobalContext, setUseBlackTheme } from '@contexts/global';

import { NavbarContainer, Title, RightNavbarText, MoonIcon } from './styles';

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
			<Title>
				<FormattedMessage id='where_in_the_world' />
			</Title>
			<RightNavbarText onClick={handleSetUseDarkTheme}>
				<MoonIcon />
				<FormattedMessage id='dark_mode' />
			</RightNavbarText>
		</NavbarContainer>
	);
};

export default memo(Navbar);
