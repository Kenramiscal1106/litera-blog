import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: {
					900: '#7A5401',
					800: '#9B6E0D',
					700: '#A87F24',
					600: '#BD9642',
					500: '#C89E43',
					400: '#E3BE6D',
					300: '#F4CF80',
					200: '#FCE6B6',
					100: '#FFF6E1'
				},
				warm: {
					900: '#2F1B00',
					800: '#473E29',
					700: '#605743',
					600: '#786D54',
					500: '#9B8E70',
					400: '#C2B79F',
					300: '#DAD1BE',
					200: '#F3EFE7',
					100: '#FFFCF5'
				}
			}
		}
	},

	plugins: []
} satisfies Config;
