import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarContainer = styled.aside`
	position: sticky;
	top: var(--top-bar-height);
	height: calc(100vh - var(--top-bar-height));
	width: 200px;
	padding: 2rem 1rem;
	background-color: ${({ theme }) => theme.colors.background};
	border-right: 1px solid ${({ theme }) => theme.colors.neutral.base}20;
	overflow-y: auto;

	@media (max-width: 768px) {
		display: none; // or later: collapse into hamburger
	}
`;

export const SidebarList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

export const SidebarLink = styled(NavLink)`
	text-decoration: none;
	color: ${({ theme }) => theme.colors.text};
	padding: 0.25rem 0.5rem;
	border-radius: 4px;
	font-weight: 500;
	transition: background-color 0.2s ease;

	&.active {
		background-color: ${({ theme }) => theme.colors.primary.base}33;
	}

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary.base}1A;
	}
`;
