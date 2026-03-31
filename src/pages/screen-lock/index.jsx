import { useWakeLock } from '../../shared/hooks.js';
import './styles.css';

const ScreenLock = () => {
	const { isActive, request, release } = useWakeLock();

	return (
		<div className="wrapper">
			<button className="button" onClick={isActive ? release : request}>
				{isActive ? 'Экран не блокируется' : 'Не блокировать экран'}
			</button>
		</div>
	);
};

export { ScreenLock };
