import { DataListView } from './data-list-view/index.jsx';
import { useEffect, useState } from 'react';
import { getTodos } from '../../api/index.js';

const DataList = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);
				const data = await getTodos();
				setData(data);
			} catch (e) {
				console.log(e);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);

	console.log(data);

	return <DataListView data={data} isLoading={isLoading} />;
};

export { DataList };
