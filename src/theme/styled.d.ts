// src/styles/theme/styled.d.ts

import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			background: string;
			text: string;
			overlay: string;
			primary: {
				light: string;
				base: string;
				dark: string;
			};
			neutral: {
				light: string;
				base: string;
				dark: string;
			};
		};
	}
}
