import styled from "styled-components";
import { Link } from "react-router-dom";

export const Caption = styled.p`
	font-size: 0.875rem;
	letter-spacing: 0.15em;
	text-transform: uppercase;
	margin-bottom: 1rem;
	text-align: center;
`;

export const Heading = styled.h1`
	font-size: 2.5rem;
	font-weight: 700;
	margin-bottom: 1.5rem;
	color: ${({ theme }) => theme.colors.text};
	max-width: 600px;
	text-align: center;
`;

export const Description = styled.p`
	font-size: 1.125rem;
	line-height: 1.6;
	margin-bottom: 2rem;
	color: ${({ theme }) => theme.colors.text};
	max-width: 600px;
	text-align: center;
`;

export const ComponentsButton = styled(Link)`
	display: inline-block;
	padding: 0.75rem 1.5rem;
	background-color: ${({ theme }) => theme.colors.primary.base};
	color: white;
	border-radius: 4px;
	font-weight: 600;
	text-decoration: none;

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary.base}cc;
	}
`;
