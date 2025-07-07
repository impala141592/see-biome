import { Sidebar } from "../../components/common/Sidebar/Sidebar";
import {
	PageLayout,
	PageContent,
	PageHeader,
	Caption,
	Title,
	Search,
} from "./Components.styles";

import { FullWidthMain } from "../../components/layout/MainContainer/MainContainer";
import { ComponentMosaic } from "../../components/common/ComponentMosaic/ComponentMosaic";

const allComponents = [
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
	"Dropdown",
	"ProgressBar",
	"Spinner",
	"Tabs",
	"Toast",
];

const Components = () => {
	return (
		<FullWidthMain>
			<PageLayout>
				<Sidebar />
				<PageContent>
					<PageHeader>
						<div>
							<Caption>Components</Caption>
							<Title>Explore the building blocks of biome</Title>
						</div>
						<Search type='text' placeholder='Search components…' />
					</PageHeader>
					<ComponentMosaic components={allComponents} />
				</PageContent>
			</PageLayout>
		</FullWidthMain>
	);
};

export default Components;
