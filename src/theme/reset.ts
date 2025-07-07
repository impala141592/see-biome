import { css } from "styled-components";

export const reset = css`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		scroll-behavior: smooth;
	}

	html,
	body {
		font-family: var(--font-sans, sans-serif);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	img,
	picture,
	video,
	canvas,
	svg {
		display: block;
		max-width: 100%;
	}

	ul,
	ol {
		list-style: none;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	button,
	input,
	select,
	textarea {
		font: inherit;
		color: inherit;
		background: none;
		border: none;
		outline: none;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	/* Show focus outlines only when keyboard navigating */
	:focus:not(:focus-visible) {
		outline: none;
	}
`;
