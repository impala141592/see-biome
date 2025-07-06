import styled from "styled-components";

export const TopBarContainer = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	max-width: 100vw;
	padding: 0.5rem 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: var(--top-bar-height);
	z-index: 1000;
	color: ${({ theme }) => theme.colors.text};

	&:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		background: ${({ theme }) => theme.colors.overlay};
		backdrop-filter: blur(4px);
	}

	@media (max-width: 768px) {
		padding: 0.5rem 1rem;
	}
`;

export const Logo = styled.span`
	font-weight: bold;
	font-size: 1.5rem;
	color: ${({ theme }) => theme.colors.text};
	user-select: none;
`;

export const TopBarActions = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	nav {
		display: flex;
		gap: 1rem;

		a {
			color: ${({ theme }) => theme.colors.text};
			transition: color 0.3s ease;

			&:hover {
				color: ${({ theme }) => theme.colors.primary.base};
			}
		}
	}
`;

export const ToggleButton = styled.button<{ $isDark: boolean }>`
	background: none;
	cursor: pointer;
	padding: 0;
	outline: none;
`;
