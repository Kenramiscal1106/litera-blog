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
				}
			}
		}
	},
	plugins: []
} satisfies Config;
