import { useEffect, useRef, useState } from 'react';
import { useBarcodeScanner } from '../../shared/hooks.js';
import './styles.css';

const Qr = () => {
	const camRef = useRef(null);
	const [isVideoShown, setIsVideoShown] = useState(false);

	const { codes, startBarcodeScanner } = useBarcodeScanner();

	const handleStartVideo = () => {
		setIsVideoShown(true);
	};

	const handleCloseVideo = () => {
		setIsVideoShown(false);
		if (camRef.current) {
			camRef.current.pause();
			camRef.current.srcObject?.getTracks().forEach((track) => track.stop());
			camRef.current.srcObject = null;
		}
	};

	useEffect(() => {
		if (isVideoShown && camRef.current) {
			startBarcodeScanner(camRef.current, setIsVideoShown);
		}
	}, [isVideoShown]);

	return (
		<div className="qr">
			{isVideoShown && (
				<div className="camera">
					<video className="video" ref={camRef} playsInline muted />
				</div>
			)}
			<button className="qr__button" onClick={isVideoShown ? handleCloseVideo : handleStartVideo}>
				{isVideoShown ? 'Остановить' : 'Сканировать'}
			</button>
		</div>
	);
};

export { Qr };
