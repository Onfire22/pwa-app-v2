export const handleSendNotification = async (text, body, icon) => {
	if (Notification.permission === 'default') return;
	const registration = await navigator.serviceWorker.ready;

	registration.showNotification(text, {
		body,
		icon,
	});
};
