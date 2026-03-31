import './App.css';
import { Router } from './router/index.jsx';
import { InstallBanner } from './components/install-prompt/index.jsx';
import { SplashScreen } from './components/splash-screen/index.jsx';

function App() {
	return (
		<>
			<SplashScreen />
			<InstallBanner />
			<Router />
		</>
	);
}

export default App;
