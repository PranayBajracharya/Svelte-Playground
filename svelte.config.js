import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$lib: 'src/lib',
			$components: 'src/lib/components',
			$data: 'src/lib/data',
			$icons: 'src/lib/icons',
			$images: 'src/lib/images',
			$utils: 'src/utils',
			$schema: 'src/schema'
		}
	}
};

export default config;
