import { Routes, Route, Link } from "react-router-dom";
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

const Home = () => <h2>Welcome to Biome</h2>;
const ButtonDemo = () => <h2>Button Preview</h2>;
const InputDemo = () => <h2>Input Preview</h2>;

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Container>
				<nav>
					<Link to='/'>Home</Link> | <Link to='/button'>Button</Link> |
					<Link to='/input'>Input</Link>
				</nav>

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/button' element={<ButtonDemo />} />
					<Route path='/input' element={<InputDemo />} />
				</Routes>
			</Container>
		</ThemeProvider>
	);
}

export default App;
