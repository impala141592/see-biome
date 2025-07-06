import styled from "styled-components";
import { Link } from "react-router-dom";

export const MosaicGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 0.5rem;
	margin-top: 4rem;
	width: 100%;

	@media (min-width: ${({ theme }) => theme.layout.breakpoints.md}) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: ${({ theme }) => theme.layout.breakpoints.lg}) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (min-width: ${({ theme }) => theme.layout.breakpoints.xl}) {
		grid-template-columns: repeat(4, 1fr);
	}
`;

export const MosaicTile = styled(Link)`
	background-color: ${({ theme }) => theme.colors.neutral.base}16;
	color: ${({ theme }) => theme.colors.text}48;
	padding: 2rem;
	border-radius: 0.5rem;
	border: 1px solid ${({ theme }) => theme.colors.neutral.base}10;
	height: 14rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-weight: 500;
	transition: background-color 0.2s ease;

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary.base}cc;
	}
`;

export const SeeMoreTile = styled(MosaicTile)`
	background-color: ${({ theme }) => theme.colors.primary.dark};

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary.base};
	}
`;
