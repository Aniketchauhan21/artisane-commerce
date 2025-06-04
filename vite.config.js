import path from 'node:path';
import react from '@vitejs/plugin-react';
import { createLogger, defineConfig } from 'vite';

// ✅ Add this line below to set base path for GitHub Pages:
const basePath = '/artisane-commerce/'; // <-- replace with your repo name

const isDev = process.env.NODE_ENV !== 'production';
let inlineEditPlugin, editModeDevPlugin;

if (isDev) {
	inlineEditPlugin = (await import('./plugins/visual-editor/vite-plugin-react-inline-editor.js')).default;
	editModeDevPlugin = (await import('./plugins/visual-editor/vite-plugin-edit-mode.js')).default;
}

const configHorizonsViteErrorHandler = `...`; // same as your original
const configHorizonsRuntimeErrorHandler = `...`; // same as your original
const configHorizonsConsoleErrroHandler = `...`; // same as your original
const configWindowFetchMonkeyPatch = `...`; // same as your original

const addTransformIndexHtml = {
	name: 'add-transform-index-html',
	transformIndexHtml(html) {
		return {
			html,
			tags: [
				{
					tag: 'script',
					attrs: { type: 'module' },
					children: configHorizonsRuntimeErrorHandler,
					injectTo: 'head',
				},
				{
					tag: 'script',
					attrs: { type: 'module' },
					children: configHorizonsViteErrorHandler,
					injectTo: 'head',
				},
				{
					tag: 'script',
					attrs: { type: 'module' },
					children: configHorizonsConsoleErrroHandler,
					injectTo: 'head',
				},
				{
					tag: 'script',
					attrs: { type: 'module' },
					children: configWindowFetchMonkeyPatch,
					injectTo: 'head',
				},
			],
		};
	},
};

console.warn = () => {};

const logger = createLogger();
const loggerError = logger.error;

logger.error = (msg, options) => {
	if (options?.error?.toString().includes('CssSyntaxError: [postcss]')) {
		return;
	}
	loggerError(msg, options);
};

export default defineConfig({
	base: basePath, // ✅ This is what enables GitHub Pages support!
	customLogger: logger,
	plugins: [
		...(isDev ? [inlineEditPlugin(), editModeDevPlugin()] : []),
		react(),
		addTransformIndexHtml,
	],
	server: {
		cors: true,
		headers: {
			'Cross-Origin-Embedder-Policy': 'credentialless',
		},
		allowedHosts: true,
	},
	resolve: {
		extensions: ['.jsx', '.js', '.tsx', '.ts', '.json'],
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	build: {
		rollupOptions: {
			external: [
				'@babel/parser',
				'@babel/traverse',
				'@babel/generator',
				'@babel/types',
			],
		},
	},
});
