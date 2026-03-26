export const MENU = [
	{ text: 'Данные', value: 'data', link: '/data' },
	{ text: 'QR коды', value: 'qr', link: '/qr' },
	{
		text: 'Уведомления',
		value: 'notifications',
		link: '/notifications',
		customHandler: () => {
			Notification.requestPermission();
		},
	},
];
