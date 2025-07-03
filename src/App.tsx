import styled, { ThemeProvider } from "styled-components";

const Container = styled.div`
	padding: 2rem;
	font-family: sans-serif;
`;

const theme = {
	colors: {
		primary: "#228B22",
	},
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Container>
				<h1>Biome Preview</h1>
				{/* Imported components will go here */}
			</Container>
		</ThemeProvider>
	);
}

export default App;
