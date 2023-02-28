import * as React from "react";
import { Typography } from "@mui/material";
import { SxProps } from "@mui/system";

interface HeadingProps {
	children?: React.ReactNode;
	sx?: SxProps;
	color?: string;
	variant?: any;
}

export const Heading = (props: HeadingProps) => {
	const styles: any = props.sx;
	return (
		<Typography
			color={props.color ? props.color : "#252641"}
			variant={props.variant ? props.variant : "h4"}
			sx={styles}>
			{props.children}
		</Typography>
	);
};

export const SubHeading = (props: HeadingProps) => {
	const styles: any = props.sx;
	return (
		<Typography
			color={props.color ? props.color : "#696984"}
			sx={styles}
			fontWeight="400"
			variant={props.variant ? props.variant : "body2"}>
			{props.children}
		</Typography>
	);
};
