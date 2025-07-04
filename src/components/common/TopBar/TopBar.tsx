import React from "react";
import { TopBarContainer, Logo, ToggleButton } from "./TopBar.styles";

type TopBarProps = {
	isDark: boolean;
	toggleDarkMode: () => void;
};

const TopBar: React.FC<TopBarProps> = ({ isDark, toggleDarkMode }) => {
	return (
		<TopBarContainer>
			<Logo>biome</Logo>
			<ToggleButton
				onClick={toggleDarkMode}
				aria-label='Toggle dark mode'
				$isDark={isDark}
			/>
		</TopBarContainer>
	);
};

export default TopBar;
