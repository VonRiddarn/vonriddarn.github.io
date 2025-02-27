import { Translations } from "./types";

export const translations: Translations = {
	en: {
		hero: {
			quote: "Performance doesn't have to sacrifice beauty, nor does beauty have to sacrifice speed.",
			resume: "Resumé",
		},
	},

	se: {
		hero: {
			quote: "Prestanda behöver inte offra skönhet, och skönhet behöver inte offra hastighet.",
			resume: "CV",
		},
	},
} as const;
