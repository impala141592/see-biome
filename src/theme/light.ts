import type { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
	colors: {
		background: "#ffffff",
		text: "#000000",
		overlay: "rgba(255, 255, 255, 0.1)",
		primary: {
			light: "#FF9999",
			base: "#ff7575",
			dark: "#FF5C5C",
		},
		neutral: {
			light: "#303030",
			base: "#252525",
			dark: "#000000",
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
