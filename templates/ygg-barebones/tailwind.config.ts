import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontSize: {
				'fluid-lg': 'clamp(2rem, 5vw, 3rem)',
				'fluid-xl': 'clamp(2.5rem, 6vw, 4rem)'
			}
		}
	},

	plugins: [typography, forms, containerQueries, aspectRatio]
} as Config;
