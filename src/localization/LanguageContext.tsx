import { useContext, useState } from "react";
import { translations } from "./translations";
import { Locale } from "./types";
import React from "react";

// TODO: Refactor this later.
// This is the PikeLang module loosely (and badly) translated to TypeScript by ChatGPT

type Language = keyof typeof translations;

type LanguageContextType = {
	currentLanguage: Language;
	t: Locale;
	changeLanguage: (language: Language) => void;
};

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined);

type LanguageProviderProps = {
	children: React.ReactNode;
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
	const [currentLanguage, setCurrentLanguage] = useState<Language>("en"); // Default. If we use url queries later we can use them here (I think).

	const changeLanguage = (language: Language) => {
		setCurrentLanguage(language);
	};

	const contextValue: LanguageContextType = {
		currentLanguage,
		t: translations[currentLanguage],
		changeLanguage,
	};

	return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
	const context = useContext(LanguageContext);

	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}

	return context;
};
