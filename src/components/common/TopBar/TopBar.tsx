import React from "react";
import { Link } from "react-router-dom";
import { BsNoiseReduction } from "react-icons/bs";

import {
	TopBarContainer,
	Logo,
	TopBarActions,
	ToggleButton,
} from "./TopBar.styles";

type TopBarProps = {
	isDark: boolean;
	toggleDarkMode: () => void;
};

const TopBar: React.FC<TopBarProps> = ({ isDark, toggleDarkMode }) => {
	return (
		<TopBarContainer>
			<Logo>biome</Logo>
			<TopBarActions>
				<nav>
					<Link to='/'>Intro</Link>
					<Link to='/'>Installation</Link>
					<Link to='/'>Components</Link>
				</nav>
				<ToggleButton
					onClick={toggleDarkMode}
					aria-label='Toggle dark mode'
					$isDark={isDark}
				>
					<BsNoiseReduction />
				</ToggleButton>
			</TopBarActions>
		</TopBarContainer>
	);
};

export default TopBar;
