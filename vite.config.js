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
			registerType: 'autoUpdate',
			manifest: {
				name: 'Test PWA App',
				short_name: 'PWA app for test',
				start_url: '/',
				display: 'standalone',
				background_color: '#ffffff',
				theme_color: '#000000',
				icons: [
					{
						src: 'pwa-192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: 'pwa-512.png',
						sizes: '512x512',
						type: 'image/png',
					},
				],
			},
			workbox: {
				navigateFallback: 'index.html',
				runtimeCaching: [
					{
						urlPattern: ({ url }) => url.href === 'https://jsonplaceholder.typicode.com/users/1/posts',
						handler: 'NetworkFirst',
						options: {
							cacheName: 'users-posts-cache',
							networkTimeoutSeconds: 3,
							expiration: { maxEntries: 50, maxAgeSeconds: 5 * 60 },
						},
					},
				],
			},
		}),
	],
});
