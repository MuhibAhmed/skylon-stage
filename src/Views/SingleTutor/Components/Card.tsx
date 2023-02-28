import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Heading, SubHeading } from "../../../../components/Global/Heading";
import { PrimaryButton } from "../../../../components/Global/PrimaryButton";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import InsightsIcon from "@mui/icons-material/Insights";

type Props = {};

const SingleTutorCard = (props: Props) => {
	return (
		<Box
			sx={{
				flex: ".5",
				display: "flex",
				flexDirection: "column",
				gap: "15px",
				width: "100%",
				padding: "20px 20px 40px 20px",
				boxShadow: "0px 0px 10px 0px rgb(106, 13, 173,10%)",
				background: "#fff",
				borderRadius: "20px",
				marginTop: "-420px",
				height: "fit-content",
				zIndex: 2,
			}}>
			<Box
				sx={{
					position: "relative",
					height: "250px",
					width: "100%",
					borderRadius: "10px",
					zIndex: 2,
					overflow: "hidden",
				}}>
				<Image
					src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1715&q=80"
					alt="Single Tutor"
					fill
					style={{
						objectFit: "cover",
					}}
				/>
			</Box>
			<Box
				sx={{
					display: "flex",
					alignItems: "flex-end",
					marginBottom: "10px",
				}}>
				<Heading
					sx={{
						fontWeight: "600",
						fontSize: "40px",
						color: "#6A0DAD",
						marginRight: "10px",
					}}>
					80$
				</Heading>
				<SubHeading
					sx={{
						color: "#C4C4C4",
						fontWeight: "500",
						fontSize: "15px",
					}}>
					60 min lesson
				</SubHeading>
			</Box>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					gap: "5px",
				}}>
				<TextSnippetIcon
					sx={{
						color: "#6A0DAD",
						fontSize: "18px",
					}}
				/>
				<SubHeading
					sx={{
						fontWeight: "500",
						color: "#98A2B3",
					}}>
					50 lesson completed
				</SubHeading>
			</Box>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					gap: "5px",
				}}>
				<InsightsIcon
					sx={{
						color: "#6A0DAD",
						fontSize: "18px",
					}}
				/>
				<SubHeading
					sx={{
						fontWeight: "500",
						color: "#98A2B3",
					}}>
					Super Popular
				</SubHeading>
			</Box>

			<PrimaryButton
				sx={{
					marginTop: "20px",
					width: "80%",
					margin: "20px auto 0 auto",
				}}>
				Book Now
			</PrimaryButton>
		</Box>
	);
};

export default SingleTutorCard;
