import { useEffect, useState } from 'react';
import { InstallPromptView } from './install-prompt-view/index.jsx';

const InstallBanner = () => {
	const [prompt, setPrompt] = useState(null);

	useEffect(() => {
		const isDismissed = localStorage.getItem('pwa-install-prompt');

		if (isDismissed === 'false') return;

		const handler = (e) => {
			e.preventDefault();
			setPrompt(e);
		};
		window.addEventListener('beforeinstallprompt', handler);
		return () => window.removeEventListener('beforeinstallprompt', handler);
	}, []);

	if (!prompt) return null;

	const onInstall = async () => {
		prompt.prompt();
		const { outcome } = await prompt.userChoice;
		if (outcome === 'accepted') setPrompt(null);
	};

	const handleSetPrompt = () => {
		setPrompt(null);
		localStorage.setItem('pwa-install-prompt', 'false');
	};

	return <InstallPromptView onInstall={onInstall} onSetPrompt={handleSetPrompt} />;
};

export { InstallBanner };
