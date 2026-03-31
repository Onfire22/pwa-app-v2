export const MENU = [
	{
		text: 'Данные',
		value: 'data',
		link: '/data',
		customHandler: () => {
			Notification.requestPermission();
		},
	},
	{
		text: 'Уведомления',
		value: 'notifications',
		link: '/notifications',
		customHandler: () => {
			Notification.requestPermission();
		},
	},
	{ text: 'QR коды', value: 'qr', link: '/qr' },
	{ text: 'Геолокация', value: 'geolocation', link: '/geolocation' },
	{ text: 'ScreenLock', value: 'screen-lock', link: '/screen-lock' },
	{ text: 'Background-sync', value: 'background-sync', link: '/background-sync' },
];
