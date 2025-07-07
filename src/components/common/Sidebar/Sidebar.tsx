import { SidebarContainer, SidebarList, SidebarLink } from "./Sidebar.styles";

const components = [
	"Button",
	"Input",
	"Checkbox",
	"Select",
	"Modal",
	// add more as needed
];

export const Sidebar = () => {
	return (
		<SidebarContainer>
			<SidebarList>
				{components.map((component) => (
					<li key={component}>
						<SidebarLink to={`/components/${component.toLowerCase()}`}>
							{component}
						</SidebarLink>
					</li>
				))}
			</SidebarList>
		</SidebarContainer>
	);
};
