import adapter from '@sveltejs/adapter-netlify'
import sveltePreprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte"],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors

	preprocess: sveltePreprocess(
		{
			postcss: true,
			defaults: {
				style: 'postcss',
			},
		}),

	kit: {
		adapter: adapter(), // currently the adapter does not take any options
		target: '#svelte',
		prerender: {
			crawl: true,
			enabled: true,
			force: true,
			pages: ['*'],
		},
	}
};

export default config;
