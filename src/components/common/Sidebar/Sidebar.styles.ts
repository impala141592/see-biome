import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarContainer = styled.aside`
	position: sticky;
	top: var(--top-bar-height);
	height: calc(100vh - var(--top-bar-height));
	width: 200px;
	padding: 2rem;
	overflow-y: auto;
	font-size: 0.875rem;

	@media (max-width: 768px) {
		display: none; // or later: collapse into hamburger
	}
`;

export const SidebarList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const SidebarLink = styled(NavLink)`
	text-decoration: none;
	color: ${({ theme }) => theme.colors.text};
	font-weight: 500;
`;
