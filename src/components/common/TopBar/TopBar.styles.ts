import styled from "styled-components";

export const TopBarContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;
	background-color: ${({ theme }) => theme.colors.background};
	border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const Logo = styled.span`
	font-weight: bold;
	font-size: 1.5rem;
	color: ${({ theme }) => theme.colors.primary};
	user-select: none;
`;

export const ToggleButton = styled.button<{ $isDark: boolean }>`
	background: none;
	border: 1px solid ${({ theme }) => theme.colors.primary};
	border-radius: 9999px;
	width: 3rem;
	height: 1.5rem;
	cursor: pointer;
	position: relative;
	padding: 0;
	outline: none;

	&:before {
		content: "";
		position: absolute;
		top: 2px;
		left: ${({ $isDark }) => ($isDark ? "calc(100% - 1.5rem)" : "2px")};
		width: 1.1rem;
		height: 1.1rem;
		background: ${({ theme }) => theme.colors.primary};
		border-radius: 50%;
		transition: left 0.3s ease;
	}
`;
