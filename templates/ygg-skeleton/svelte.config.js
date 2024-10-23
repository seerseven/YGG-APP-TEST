import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	preprocess: [
		vitePreprocess(), // Vite preprocess for Svelte
		preprocess({
			postcss: true, // Enables PostCSS processing
			scss: {
				prependData: `@import 'src/app.scss';` // Global SASS file
			},
			typescript: true // Enables TypeScript support
		})
	],
	kit: {
		adapter: adapter(),
		alias: {
			'@/*': './path/to/lib/*'
		}
	}
};
export default config;
