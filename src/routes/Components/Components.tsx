import { Sidebar } from "../../components/common/Sidebar/Sidebar";
import {
	PageLayout,
	PageContent,
	PageHeader,
	Caption,
	Title,
	Search,
	ComponentGrid,
} from "./Components.styles";

import { FullWidthMain } from "../../components/layout/MainContainer/MainContainer";

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
					<ComponentGrid>{/* placeholder tiles for now */}</ComponentGrid>
				</PageContent>
			</PageLayout>
		</FullWidthMain>
	);
};

export default Components;
