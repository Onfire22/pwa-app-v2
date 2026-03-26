import { HeaderView } from './header-view/index.jsx';
import { useState } from 'react';

const Header = () => {
	const [activeTab, setActiveTab] = useState('data');

	return <HeaderView activeTab={activeTab} path={window.location.pathname} setActiveTab={setActiveTab} />;
};

export { Header };
