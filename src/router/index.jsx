import { Routes, Route } from 'react-router-dom';
import { Main } from '../pages/main/index.jsx';
import { DataList } from '../pages/data-list/index.jsx';
import { Qr } from '../pages/qr/index.jsx';
import { NotificationsPage } from '../pages/notifications/index.jsx';

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Main />}>
				<Route path="/data" element={<DataList />} />
				<Route path="/qr" element={<Qr />} />
				<Route path="/notifications" element={<NotificationsPage />} />
			</Route>
		</Routes>
	);
};

export { Router };
