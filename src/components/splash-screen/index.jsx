import { SplashScreenView } from './splash-screen-view/index.jsx';
import { useEffect, useState } from 'react';

const SplashScreen = () => {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setVisible(false), 2000);
		return () => clearTimeout(timer);
	}, []);

	const isInstalled = window.matchMedia('(display-mode: standalone)').matches;

	if (!visible || !isInstalled) return null;

	return <SplashScreenView />;
};

export { SplashScreen };
