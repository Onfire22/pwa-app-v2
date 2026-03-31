export const handleSendNotification = async (text, body, icon) => {
	if (Notification.permission === 'default') return;
	const registration = await navigator.serviceWorker.ready;

	await registration.showNotification(text, {
		body,
		icon,
	});
};
