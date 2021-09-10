import * as colors from '@/styles/colors';
import { primaryFont } from '@/styles/typography';

export const defaultTheme = {
	primaryColor: colors.white[200],
	secondayColor: colors.white[100],

	primaryFont: primaryFont,
	primaryTextColor: colors.black[200],
	secondayTExtColor: colors.white[100],

	shadowColor: `rgba(${colors.black[300]},0.5)`,
};

export const darkTheme = {
	primaryColor: colors.black[200],
	secondayColor: colors.white[100],

	primaryFont: primaryFont,
	primaryTextColor: colors.white[100],
	secondayTextColor: colors.white[200],

	shadowColor: `rgba(${colors.black[300]},0.5)`,
};
