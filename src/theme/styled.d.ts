import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			background: string;
			text: string;
			primary: string;
		};
	}
}
