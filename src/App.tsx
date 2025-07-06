import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./theme/globalStyles";
import { AppContainer, Container } from "./App.styles";

import TopBar from "./components/common/TopBar/TopBar";

const Home = () => <h2>Welcome to Biome</h2>;
const ButtonDemo = () => <h2>Button Preview</h2>;
const InputDemo = () => <h2>Input Preview</h2>;

function App() {
	const [isDark, setIsDark] = useState(false);

	// On mount: check localStorage or system preference
	useEffect(() => {
		const savedTheme = localStorage.getItem("biome-theme");
		if (savedTheme === "dark") {
			setIsDark(true);
		} else if (savedTheme === "light") {
			setIsDark(false);
		} else {
			const prefersDark = window.matchMedia(
				"(prefers-color-scheme: dark)"
			).matches;
			setIsDark(prefersDark);
		}
	}, []);

	// Save to localStorage when user toggles
	const toggleTheme = () => {
		setIsDark((prev) => {
			const newVal = !prev;
			localStorage.setItem("biome-theme", newVal ? "dark" : "light");
			return newVal;
		});
	};

	return (
		<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
			<GlobalStyles />
			<AppContainer>
				<TopBar isDark={isDark} toggleDarkMode={toggleTheme} />
				<Container>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/button' element={<ButtonDemo />} />
						<Route path='/input' element={<InputDemo />} />
					</Routes>
				</Container>
			</AppContainer>
		</ThemeProvider>
	);
}

export default App;
