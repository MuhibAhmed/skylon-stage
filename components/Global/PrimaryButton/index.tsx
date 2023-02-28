import * as React from "react";
import { Button } from "@mui/material";
import { SxProps } from "@mui/system";
import Link from "next/link";

const root = {
	borderRadius: "8px",
	textAlign: "center",
	background: "#6A0DAD",
	color: "#fff",
	border: (theme: any) => `1px solid ${theme.palette.primary.main}`,
	letterSpacing: 0.28,
	fontWeight: "500",
	fontSize: "14px",
	padding: "10px 30px",
	"&:hover": {
		background: "#7F56D9",
		color: "white",
	},
	"&:disabled": {
		color: (theme: any) => theme.palette.primary.light,
		backgroundColor: "#C8C8C8",
	},
	textTransform: "capitalize",
};

interface ButtonProps {
	type?: "button" | "submit" | "reset" | undefined;
	onClick?: any;
	onSubmit?: any;
	children?: React.ReactNode;
	sx?: SxProps;
	fullWidth?: boolean;
	variant?: any;
	disabled?: any;
	hasLink?: boolean;
	link?: any;
}

export const PrimaryButton = (props: ButtonProps) => {
	const styles: any = props.sx;
	return (
		<>
			{props.link ? (
				<Link href={props.link}>
					<Button
						disableElevation
						{...props}
						sx={[root, styles]}
						onSubmit={props.onSubmit}
						onClick={props.onClick}>
						{props.children}
					</Button>
				</Link>
			) : (
				<Button
					disableElevation
					{...props}
					sx={[root, styles]}
					onSubmit={props.onSubmit}
					onClick={props.onClick}>
					{props.children}
				</Button>
			)}
		</>
	);
};
