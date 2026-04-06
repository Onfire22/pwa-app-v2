import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			devOptions: {
				enabled: true,
				type: 'module',
			},
			strategies: 'injectManifest',
			srcDir: 'src',
			filename: 'sw.js',
			registerType: 'autoUpdate',
			injectManifest: {
				globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
			},
			manifest: {
				name: 'Test PWA App',
				short_name: 'PWA app for test',
				start_url: '/',
				display: 'standalone',
				background_color: '#16171d',
				theme_color: '#ffffff',
				icons: [
					{
						src: 'pwa-192.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'any maskable',
					},
					{
						src: 'pwa-512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable',
					},
				],
			},
		}),
	],
});
