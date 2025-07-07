import styled from "styled-components";

export const AppContainer = styled.div`
	min-height: 100vh;
	padding-top: var(--top-bar-height);
	background: ${({ theme }) => theme.colors.background};
`;
