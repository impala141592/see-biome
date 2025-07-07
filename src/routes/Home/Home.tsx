import React from "react";
import { Caption, Heading, Description, ComponentsButton } from "./Home.styles";

import { ComponentMosaic } from "../../components/common/ComponentMosaic/ComponentMosaic";
import { ConstrainedMain } from "../../components/layout/MainContainer/MainContainer";

const homepageComponents = [
	"Button",
	"Input",
	"Switch",
	"Checkbox",
	"Tooltip",
	"Card",
	"Modal",
	"Tag",
	"Alert",
	"Badge",
	"Avatar",
];

const Home: React.FC = () => {
	return (
		<ConstrainedMain>
			<section>
				<Caption>WELCOME TO BIOME</Caption>
				<Heading>A Minimalist React UI Components Library</Heading>
				<Description>
					Biome is designed to be customizable, accessible, and
					neurodivergent-friendly — your perfect toolkit for building clear and
					comfortable interfaces.
				</Description>
				<ComponentsButton to='/components'>Components</ComponentsButton>
			</section>
			<ComponentMosaic components={homepageComponents} showSeeMoreTile />
		</ConstrainedMain>
	);
};

export default Home;
