import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: {
					900: '#7A5401',
					800: '#9D7110',
					700: '#AD811F',
					600: '#AC842F',
					500: '#C5993A',
					400: '#DDB050',
					300: '#F4CF80',
					200: '#FCE6B6',
					100: '#FFEDC7'
				},
				warm: {
					900: '#1A1814',
					800: '#423C2E',
					700: '#605743',
					600: '#786D54',
					500: '#9B8E70',
					400: '#C5C0B4',
					300: '#E0DDD7',
					200: '#EBE9E5',
					100: '#FFFCF5'
				}
			}
		}
	},

	plugins: []
} satisfies Config;
