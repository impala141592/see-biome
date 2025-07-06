import styled from "styled-components";

export const AppContainer = styled.div`
	padding: 2rem;
	font-family: sans-serif;
	min-height: 100vh;
	background: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
`;

export const Container = styled.div`
	margin-top: var(--top-bar-height);
`;
