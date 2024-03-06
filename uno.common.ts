import { theme as defaultTheme } from 'unocss/preset-mini'

export const unoConfigCommon = {
	shortcuts: {
		heading: 'text-4rem font-serif text-primary',
		content: 'max-w-1280px mx-auto',
		box: 'border-primary border-1 rounded-md',
	},
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
