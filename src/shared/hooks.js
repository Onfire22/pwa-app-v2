import { useEffect, useRef, useState } from 'react';

export const useNetworkStatus = () => {
	const [isOnline, setIsOnline] = useState(navigator.onLine);

	useEffect(() => {
		const goOnline = () => setIsOnline(true);
		const goOffline = () => setIsOnline(false);

		window.addEventListener('online', goOnline);
		window.addEventListener('offline', goOffline);

		return () => {
			window.removeEventListener('online', goOnline);
			window.removeEventListener('offline', goOffline);
		};
	}, []);

	return { isOnline };
};

export const useWakeLock = () => {
	const [isActive, setIsActive] = useState(false);
	const wakeLockRef = useRef(null);

	const request = async () => {
		try {
			wakeLockRef.current = await navigator.wakeLock.request('screen');
			setIsActive(true);

			wakeLockRef.current.addEventListener('release', () => {
				setIsActive(false);
			});
		} catch (e) {
			console.log('Wake Lock не поддерживается или недоступен', e);
		}
	};

	const release = async () => {
		await wakeLockRef.current?.release();
		wakeLockRef.current = null;
		setIsActive(false);
	};

	useEffect(() => {
		const handleVisibilityChange = async () => {
			if (document.visibilityState === 'visible' && isActive) {
				await request();
			}
		};

		document.addEventListener('visibilitychange', handleVisibilityChange);
		return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
	}, [isActive]);

	useEffect(() => {
		return () => {
			wakeLockRef.current?.release();
		};
	}, []);

	return { isActive, request, release };
};

export const useSWMessages = (onMessage) => {
	useEffect(() => {
		const handler = (event) => onMessage(event.data);
		navigator.serviceWorker.addEventListener('message', handler);
		return () => navigator.serviceWorker.removeEventListener('message', handler);
	}, [onMessage]);
};

export const useBarcodeScanner = () => {
	const [codes, setCodes] = useState([]);

	const startBarcodeScanner = async (video, setIsVideoShown) => {
		console.log(video);
		if (window.BarcodeDetector) {
			setIsVideoShown(true);
			try {
				const stream = await navigator.mediaDevices.getUserMedia({
					video: { facingMode: 'environment' },
				});
				video.srcObject = stream;
				await video.play();
				const barcodeDetector = new BarcodeDetector({ formats: ['qr_code', 'code_128'] });
				const interval = setInterval(async () => {
					try {
						const barcodes = await barcodeDetector.detect(video);
						if (barcodes.length > 0) {
							setCodes(barcodes);
							stream.getTracks().forEach((track) => track.stop());
							setIsVideoShown(false);
							video.remove();
							clearInterval(interval);
						}
					} catch (error) {
						console.error('Ошибка сканирования:', error);
					}
				}, 500);
			} catch (error) {
				console.error('Ошибка доступа к камере:', error);
			}
		}
	};

	return {
		codes,
		startBarcodeScanner,
	};
};
