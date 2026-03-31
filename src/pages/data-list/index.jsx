import { DataListView } from './data-list-view/index.jsx';
import { useEffect, useRef, useState } from 'react';
import { getTodos } from '../../api/index.js';
import { handleSendNotification } from '../../utils.js';
import { useNetworkStatus } from '../../shared/hooks.js';

const DataList = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const { isOnline } = useNetworkStatus();
	const isMounted = useRef(false);

	const fetchData = async () => {
		try {
			setIsLoading(true);
			const data = await getTodos();
			setData(data);
			await handleSendNotification('Успешно!', 'Данные успешно загружены', '/check.png');
		} catch (e) {
			console.log(e);
			await handleSendNotification('Ошибка!', 'Что-то пошло не так', '/cross.png');
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (!isMounted.current) {
			isMounted.current = true;
			fetchData();
			return;
		}

		if (isOnline) {
			fetchData();
		}
	}, [isOnline]);

	return <DataListView data={data} isLoading={isLoading} />;
};

export { DataList };
