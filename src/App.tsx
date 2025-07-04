import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

const Container = styled.div`
	padding: 2rem;
	font-family: sans-serif;
	min-height: 100vh;
	background: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};

	nav {
		margin-bottom: 2rem;

		a {
			color: ${({ theme }) => theme.colors.primary};
			margin-right: 1rem;
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}
	}

	button {
		margin-top: 1rem;
		background: none;
		border: 1px solid ${({ theme }) => theme.colors.primary};
		color: ${({ theme }) => theme.colors.primary};
		padding: 0.5rem 1rem;
		cursor: pointer;
		border-radius: 6px;

		&:hover {
			background: ${({ theme }) => theme.colors.primary};
			color: ${({ theme }) => theme.colors.background};
		}
	}
`;

const Home = () => <h2>Welcome to Biome</h2>;
const ButtonDemo = () => <h2>Button Preview</h2>;
const InputDemo = () => <h2>Input Preview</h2>;

function App() {
	const [isDark, setIsDark] = useState(false);

	return (
		<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
			<Container>
				<nav>
					<Link to='/'>Home</Link>
					<Link to='/button'>Button</Link>
					<Link to='/input'>Input</Link>
				</nav>

				<button onClick={() => setIsDark((prev) => !prev)}>
					Toggle {isDark ? "Light" : "Dark"} Mode
				</button>

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
