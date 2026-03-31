import './styles.css';

const InstallPromptView = ({ onInstall, onSetPrompt }) => {
	return (
		<div className="install-banner">
			<div className="install-banner__controls">
				<button className="install-banner__control" onClick={onInstall}>
					Установить
				</button>
				<button className="install-banner__control" onClick={onSetPrompt}>
					✕
				</button>
			</div>
			<span>Установите приложение</span>
		</div>
	);
};

export { InstallPromptView };
