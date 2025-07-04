import { render, screen, fireEvent } from "@testing-library/react";
import TopBar from "./TopBar";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../../theme/light"; // adjust this import to match your actual path

describe("TopBar", () => {
	const renderWithTheme = (ui: React.ReactElement) =>
		render(<ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>);

	it("renders the logo", () => {
		renderWithTheme(<TopBar isDark={false} toggleDarkMode={() => {}} />);
		expect(screen.getByText(/biome/i)).toBeInTheDocument();
	});

	it("calls toggleDarkMode when button clicked", () => {
		const toggleMock = vi.fn();
		renderWithTheme(<TopBar isDark={false} toggleDarkMode={toggleMock} />);

		const toggleButton = screen.getByRole("button", {
			name: /toggle dark mode/i,
		});
		fireEvent.click(toggleButton);

		expect(toggleMock).toHaveBeenCalledTimes(1);
	});
});
