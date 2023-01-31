import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$lib: path.resolve('./src/lib'),
			$components: path.resolve('./src/lib/components'),
			$data: path.resolve('./src/lib/data'),
			$icons: path.resolve('./src/lib/icons'),
			$images: path.resolve('./src/lib/images'),
			$utils: path.resolve('./src/utils'),
			$schema: path.resolve('./src/schema')
		}
	}
};

export default config;
