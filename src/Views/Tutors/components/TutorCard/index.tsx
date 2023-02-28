import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import AccessAlarmRoundedIcon from "@mui/icons-material/AccessAlarmRounded";
import { useRouter } from "next/router";

type Props = {
	id: string;
	image: string;
	fullname: string;
	description: string;
	link: string;
	price: string;
	lessonLength: string;
	subject: string;
	courseCompleted: string;
	rating: string;
};

const cardStyles = {
	cardContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		width: "100%",
		boxShadow: "0px 0px 10px 0px rgb(106, 13, 173,10%)",
		borderRadius: "20px",
		overflow: "hidden",
		padding: "15px",
		gap: "20px",
		position: "relative",
		maxHeight: "250px",

		"@media screen and (max-width: 585px)": {
			flexDirection: "column",
			maxHeight: "fit-content",
		},
	},
	imageContainer: {
		flex: "1",
		position: "relative",
		width: "100%",
		height: "200px",
		overFlow: "hidden",

		"@media screen and (max-width: 585px)": {
			flex: "auto",
			minHeight: "fit-content",
			height: "300px",
		},
	},
	contentContainer: {
		display: "flex",
		alignItems: "flex-end",
		width: "center",
		justifyContent: "space-between",
		marginTop: "10px",
	},
};

const TutorCard = (props: Props) => {
	const { cardContainer, imageContainer, contentContainer } = cardStyles;

	const router = useRouter();
	return (
		<>
			<Box sx={cardContainer}>
				<Box sx={imageContainer}>
					<Image
						src={props.image}
						alt="tutor"
						fill
						style={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
							backgroundPosition: "top center",
							borderRadius: "10px",
						}}
					/>
				</Box>
				<Box flex={1.5} display="flex" flexDirection="column" gap="5px">
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							gap: "5px",

							"@media screen and (max-width: 755px)": {
								flexWrap: "wrap",
								justifyContent: "flex-start",
								gap: "10px",
							},
						}}>
						<Typography
							variant="body2"
							display="flex"
							alignItems="center"
							gap="5px">
							<GridViewRoundedIcon
								sx={{
									color: "#D9D9D9",
									fontSize: "18px",
								}}
							/>
							{props.subject}
						</Typography>
						<Typography
							variant="body2"
							display="flex"
							alignItems="center"
							gap="5px">
							<AccessAlarmRoundedIcon
								sx={{
									color: "#D9D9D9",
									fontSize: "20px",
								}}
							/>
							{props.courseCompleted}
						</Typography>
						<Typography variant="body1">
							{props.rating && (
								<>
									{[...Array(parseInt(props.rating))].map((e, i) => (
										<GradeRoundedIcon key={i} sx={{ color: "#FFD700" }} />
									))}
								</>
							)}
						</Typography>
					</Box>
					<Typography variant="h6" fontWeight="600">
						{props.fullname}
					</Typography>
					<Typography variant="body2" color="#696984">
						{props.description}
					</Typography>
					<Link
						href="/tutors/[id]"
						as="/tutors/1"
						style={{
							fontFamily: "Inter",
							fontSize: "12px",
							fontWeight: "500",
							color: "#7F56D9",
							marginTop: "5px",
						}}>
						Read More
					</Link>
					<Box sx={contentContainer}>
						<Box>
							<Typography variant="h5" fontWeight="600" color="#6A0DAD">
								{props.price}
							</Typography>
							<Typography variant="body2" color="#C4C4C4" fontSize="14px">
								{props.lessonLength}
							</Typography>
						</Box>
						<Button
							onClick={() => {
								router.push(`/tutors/${props.id}`);
							}}
							sx={{
								backgroundColor: "#6A0DAD",
								color: "#fff",
								borderRadius: "5px",

								"&:hover": {
									backgroundColor: "#7F56D9",
									color: "#fff",
								},
							}}>
							Book Now
						</Button>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default TutorCard;
