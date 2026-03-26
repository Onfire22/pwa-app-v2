import { handleSendNotification } from '../../utils.js';

const NotificationsPage = () => {
	return (
		<div className="notifications">
			<button onClick={() => handleSendNotification('Готово!', 'Действие успешно выполнено', '/check.png')}>
				Получить уведомление
			</button>
		</div>
	);
};

export { NotificationsPage };
