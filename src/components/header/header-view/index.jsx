import { MENU } from '../constants.js';
import { Link } from 'react-router-dom';
import './styles.css';

const HeaderView = ({ setActiveTab, path }) => {
	return (
		<header className="header">
			<nav className="header__menu">
				{MENU.map((item) => {
					return (
						<Link
							key={item.value}
							className={`header__link${item.link === path ? ' header__link_active' : ''}`}
							to={item.link}
							onClick={() => {
								if (item.customHandler) {
									item.customHandler();
								}
								setActiveTab(item.value);
							}}
						>
							{item.text}
						</Link>
					);
				})}
			</nav>
		</header>
	);
};

export { HeaderView };
