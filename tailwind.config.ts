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
					900: '#002535',
					800: '#074E6E',
					700: '#0D719D',
					600: '#1485B8',
					500: '#2B99CA',
					400: '#56B6E1',
					300: '#97D9F6',
					200: '#BEEAFE',
					100: '#DBF4FF'
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
