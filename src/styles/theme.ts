import * as colors from '@styles/colors';
import { primaryFont } from '@styles/typography';

export const defaultTheme = {
	primaryColor: colors.white[200],
	secondaryColor: colors.white[100],

	primaryFont: primaryFont,
	primaryTextColor: colors.black[200],
	secondaryTextColor: colors.black[100],

	shadowColor: `${colors.black[300]}1f`,

	buttonPrimaryColor: `${colors.blue[100]}`,
	buttonWarningColor: `${colors.yellow[100]}`,
};

export const darkTheme = {
	primaryColor: colors.black[200],
	secondaryColor: colors.black[100],

	primaryFont: primaryFont,
	primaryTextColor: colors.white[100],
	secondaryTextColor: colors.white[200],

	shadowColor: colors.black[300],

	buttonPrimaryColor: `${colors.blue[100]}`,
	buttonWarningColor: `${colors.yellow[100]}`,
};
