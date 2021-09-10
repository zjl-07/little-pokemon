import React, { FC, memo } from 'react';
import { NavbarContainer, Title, RightNavbarText, MoonIcon } from './styles';

const Navbar: FC = () => {
	return (
		<NavbarContainer>
			<Title>Where in the world ?</Title>
			<RightNavbarText>
				<MoonIcon />
				Dark Mode
			</RightNavbarText>
		</NavbarContainer>
	);
};

export default memo(Navbar);
