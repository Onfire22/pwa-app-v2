import { Header } from "../../components/header/index.jsx";
import { Outlet } from 'react-router-dom';

const Main = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	)
};

export { Main };