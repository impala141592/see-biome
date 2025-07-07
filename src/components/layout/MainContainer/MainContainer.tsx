import type { PropsWithChildren } from "react";
import { Constrained, FullWidth } from "./MainContainer.styles";

export const ConstrainedMain = ({ children }: PropsWithChildren) => (
	<Constrained>{children}</Constrained>
);

export const FullWidthMain = ({ children }: PropsWithChildren) => (
	<FullWidth>{children}</FullWidth>
);
