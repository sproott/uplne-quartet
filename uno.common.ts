import { theme as defaultTheme } from 'unocss/preset-mini'

export const unoConfigCommon = {
	theme: {
		colors: {
			primary: '#623e2a',
			secondary: '#f4f1ed',
		},
		fontFamily: {
			sans: ['Raleway', defaultTheme.fontFamily.sans],
			serif: ['Playfair Display', defaultTheme.fontFamily.serif],
		},
	},
}
