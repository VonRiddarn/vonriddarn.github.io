import "./App.scss";
import Hero from "./components/layout/Hero/Hero";
import { LanguageProvider } from "./localization/LanguageContext";

function App() {
	return (
		<LanguageProvider>
			<h1>Timmy Öhman</h1>
			<Hero />
		</LanguageProvider>
	);
}

export default App;
