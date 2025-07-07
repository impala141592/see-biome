import styled from "styled-components";

export const PageLayout = styled.div`
	display: flex;
`;

export const PageContent = styled.main`
	flex: 1;
	padding: 2rem;
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export const PageHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	flex-wrap: wrap;
	gap: 1rem;
`;

export const Caption = styled.span`
	text-transform: uppercase;
	font-size: 0.875rem;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.neutral.light};
`;

export const Title = styled.h1`
	font-size: 2rem;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.text};
	margin-top: 0.25rem;
`;

export const Search = styled.input`
	padding: 0.5rem 1rem;
	font-size: 1rem;
	border: 1px solid ${({ theme }) => theme.colors.neutral.base}44;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
	width: 250px;

	&:focus {
		outline: none;
		border-color: ${({ theme }) => theme.colors.primary.base};
		box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.base}33;
	}
`;

export const ComponentGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 1rem;
`;
