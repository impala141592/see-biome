import styled from "styled-components";

export const AppContainer = styled.div`
	font-family: sans-serif;
	min-height: 100vh;
	background: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
	padding: ${({ theme }) => theme.layout.padding};

	display: flex;
	justify-content: center;

	> * {
		width: 100%;
		max-width: ${({ theme }) => theme.layout.contentMaxWidth};
	}

	@media (max-width: 768px) {
		padding: 1rem;
	}
`;

export const Container = styled.div`
	margin-top: var(--top-bar-height);
`;
