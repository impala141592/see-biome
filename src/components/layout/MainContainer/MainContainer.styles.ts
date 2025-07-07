import styled from "styled-components";

export const Constrained = styled.main`
	width: 100%;
	max-width: ${({ theme }) => theme.layout.contentMaxWidth};
	margin: 0 auto;
	padding: ${({ theme }) => theme.layout.padding};
	background: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
`;

export const FullWidth = styled.main`
	width: 100%;
	background: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
`;
