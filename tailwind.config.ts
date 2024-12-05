import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: {
					100: "#7A5401",
					200: "#9B6E0D",
					300: "#A87F24",
					400: "#BD9642",
					500: "#C89E43",
					600: "#E3BE6D",
					700: "#F4CF80",
					800: "#FCE6B6",
					900: "#FFF6E1",
				}
			}
		},
		colors: {
			neutral: {
				100: "#2F1B00",
				200: "#473E29",
				300: "#605743",
				400: "#786D54",
				500: "#9B8E70",
				600: "#C2B79F",
				700: "#DAD1BE",
				800: "#F3EFE7",
				900: "#FFFCF5"
			}
		}
	},

	plugins: []
} satisfies Config;
