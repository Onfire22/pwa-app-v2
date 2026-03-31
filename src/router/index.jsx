import { Routes, Route } from 'react-router-dom';
import { Main } from '../pages/main/index.jsx';
import { DataList } from '../pages/data-list/index.jsx';
import { Qr } from '../pages/qr/index.jsx';
import { NotificationsPage } from '../pages/notifications/index.jsx';
import { Geolocation } from '../pages/geolocation/index.jsx';
import { ScreenLock } from '../pages/screen-lock/index.jsx';
import { BackgroundSync } from '../pages/background-sync/index.jsx';

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Main />}>
				<Route path="/data" element={<DataList />} />
				<Route path="/qr" element={<Qr />} />
				<Route path="/notifications" element={<NotificationsPage />} />
				<Route path="/geolocation" element={<Geolocation />} />
				<Route path="/screen-lock" element={<ScreenLock />} />
				<Route path="/background-sync" element={<BackgroundSync />} />
			</Route>
		</Routes>
	);
};

export { Router };
