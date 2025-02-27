import { useLanguage } from "../../../localization/LanguageContext";

const Hero = () => {
	const { t, changeLanguage } = useLanguage();
	return (
		<div>
			<p>{t.hero.quote}</p>
			<p>{t.hero.resume}</p>
			<button onClick={() => changeLanguage("en")}>English</button>
			<button onClick={() => changeLanguage("se")}>Swedish</button>
		</div>
	);
};

export default Hero;
