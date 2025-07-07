import { MosaicGrid, MosaicTile, SeeMoreTile } from "./ComponentMosaic.styles";

type ComponentMosaicProps = {
	components: string[];
	showSeeMoreTile?: boolean;
};

export const ComponentMosaic = ({
	components,
	showSeeMoreTile = false,
}: ComponentMosaicProps) => {
	return (
		<section>
			<MosaicGrid>
				{components.map((name) => (
					<MosaicTile key={name} to={`/components/${name.toLowerCase()}`}>
						{name}
					</MosaicTile>
				))}

				{showSeeMoreTile && (
					<SeeMoreTile to='/components'>See More</SeeMoreTile>
				)}
			</MosaicGrid>
		</section>
	);
};
