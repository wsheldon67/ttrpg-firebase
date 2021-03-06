import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import svg from '@poppanator/sveltekit-svg';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '200.html',
      precompress: false
    }),
    vite: {
      plugins: [svg()],
      chokidarWatchOptions: {usePolling: true}
    },
    prerender: {
      enabled: false
    }
	}
};

export default config;