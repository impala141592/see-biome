import type { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
	colors: {
		background: "#000000",
		text: "#ffffff",
		overlay: "rgba(0, 0, 0, 0.1)",
		primary: {
			light: "#FF9999",
			base: "#ff7575",
			dark: "#FF5C5C",
		},
		neutral: {
			light: "#707070",
			base: "#606060",
			dark: "#505050",
		},
	},
	layout: {
		contentMaxWidth: "1440px",
		padding: "2rem",
		breakpoints: {
			sm: "480px",
			md: "768px",
			lg: "1024px",
			xl: "1440px",
		},
	},
};
