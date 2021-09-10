import * as colors from '@styles/colors';
import { primaryFont } from '@styles/typography';
export interface ITheme {
	primaryColor: string;
	secondaryColor: string;

	primaryFont: string;
	primaryTextColor: string;
	secondaryTextColor: string;

	shadowColor: string;
}

export const defaultTheme: ITheme = {
	primaryColor: colors.white[200],
	secondaryColor: colors.white[100],

	primaryFont: primaryFont,
	primaryTextColor: colors.black[200],
	secondaryTextColor: colors.white[100],

	shadowColor: `rgba(${colors.black[300]},0.5)`,
};

export const darkTheme: ITheme = {
	primaryColor: colors.black[200],
	secondaryColor: colors.white[100],

	primaryFont: primaryFont,
	primaryTextColor: colors.white[100],
	secondaryTextColor: colors.white[200],

	shadowColor: `rgba(${colors.black[300]},0.5)`,
};
