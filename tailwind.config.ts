import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			screens: {
				'tablet': '640px',
			},
			maxWidth: {
				"med": "640px",
			},
			colors: {
				primary: {
					900: '#563B01',
					800: '#70500A',
					700: '#886311',
					600: '#AC842F',
					500: '#CAA149',
					400: '#E0B861',
					300: '#F7D791',
					200: '#FCE6B6',
					100: '#FFEDC7'
				},
				warm: {
					900: '#1A1814',
					800: '#413B30',
					700: '#59544A',
					600: '#6F695D',
					500: '#8E897D',
					400: '#C5C0B4',
					300: '#E7E4DF',
					200: '#F3F1EC',
					100: '#FFFCF5'
				}
			}
		}
	},

	plugins: []
} satisfies Config;
