import { handleSendNotification } from '../../utils.js';
import './styles.css';

const NotificationsPage = () => {
	return (
		<div className="notifications">
			<button
				className="notifications__button notifications__button_success"
				onClick={() => handleSendNotification('Готово!', 'Действие успешно выполнено', '/check.png')}
			>
				Успешное уведомление
			</button>
			<button
				className="notifications__button notifications__button_error"
				onClick={() => handleSendNotification('Ошбика!', 'Что-то пошло не так', '/cross.png')}
			>
				Уведомление об ошибке
			</button>
		</div>
	);
};

export { NotificationsPage };
