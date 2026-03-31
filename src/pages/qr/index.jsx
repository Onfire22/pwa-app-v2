import { useEffect, useRef, useState } from 'react';
import jsQR from 'jsqr';
import './styles.css';

const Qr = () => {
	const videoRef = useRef(null);
	const canvasRef = useRef(null);
	const streamRef = useRef(null);
	const animationRef = useRef(null);
	const [result, setResult] = useState(null);
	const [active, setActive] = useState(false);

	const start = () => {
		navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } }).then((stream) => {
			streamRef.current = stream;
			if (videoRef.current) {
				videoRef.current.srcObject = stream;
				videoRef.current.play();
				setActive(true);
				animationRef.current = requestAnimationFrame(scan);
			}
		});
	};

	const stop = () => {
		streamRef.current?.getTracks().forEach((track) => track.stop());
		streamRef.current = null;

		if (animationRef.current) {
			cancelAnimationFrame(animationRef.current);
			animationRef.current = null;
		}

		if (videoRef.current) {
			videoRef.current.srcObject = null;
		}

		setActive(false);
	};

	useEffect(() => {
		return () => stop();
	}, []);

	const scan = () => {
		const video = videoRef.current;
		const canvas = canvasRef.current;
		if (!video || !canvas) return;

		const ctx = canvas.getContext('2d');
		canvas.width = video.videoWidth;
		canvas.height = video.videoHeight;
		ctx.drawImage(video, 0, 0);

		const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
		const code = jsQR(imageData.data, imageData.width, imageData.height);

		if (code) {
			setResult(code.data);
			stop();
		} else {
			animationRef.current = requestAnimationFrame(scan);
		}
	};

	return (
		<div className="qr">
			<video className={active ? '' : 'qr__scanner'} ref={videoRef} style={{ width: '100%' }} />
			<canvas ref={canvasRef} style={{ display: 'none' }} />
			{result && <p>Результат: {result}</p>}
			<button className="qr__button" onClick={active ? stop : start}>
				{active ? 'Остановить' : 'Сканировать'}
			</button>
		</div>
	);
};

export { Qr };
