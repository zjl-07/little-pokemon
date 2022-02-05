import React, { FC, memo, useContext, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';

import { GlobalContext, setUseBlackTheme } from '@contexts/global';

import { NavbarContainer, Title, RightNavbarText, MoonIcon } from './styles';

type NavbarProps = {
	title: string;
};

const Navbar: FC<NavbarProps> = ({ title = 'country' }) => {
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
				<FormattedMessage id={title} />
			</Title>
			<RightNavbarText onClick={handleSetUseDarkTheme}>
				<MoonIcon />
				<FormattedMessage id='dark_mode' />
			</RightNavbarText>
		</NavbarContainer>
	);
};

export default memo(Navbar);
