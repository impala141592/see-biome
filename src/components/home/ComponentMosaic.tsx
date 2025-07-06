import { MosaicGrid, MosaicTile, SeeMoreTile } from "./ComponentMosaic.styles";

const componentNames = [
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

export const ComponentMosaic = () => {
	return (
		<section>
			<MosaicGrid>
				{componentNames.slice(0, 11).map((name) => (
					<MosaicTile key={name} to={`/components/${name.toLowerCase()}`}>
						{name}
					</MosaicTile>
				))}

				<SeeMoreTile to='/components'>See More</SeeMoreTile>
			</MosaicGrid>
		</section>
	);
};
