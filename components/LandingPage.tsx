import {
	Avatar,
	Box,
	Button,
	Grid,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import React, { useState } from "react";
import Image from "next/image";
import { BarChart, Celebration, Computer } from "@mui/icons-material";
import DoneIcon from "@mui/icons-material/Done";
import { deepPurple } from "@mui/material/colors";
import CarouselBox from "../components/CarouselBox";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type LandingPageProps = {
	session: any;
};

export const LandingPage = (props: LandingPageProps) => {
	const [firstRender, setFirstRender] = useState<boolean>(true);

	function carouselColorChange(active: any, previous: any) {
		if (previous == active && !firstRender) return;
		console.log("Running!");

		document
			.getElementById(`carousel-box-${active}`)
			?.classList.add("selected-carousel-box");
		document.getElementById(`carousel-box-${active}-text`)!!.style.color =
			"white";
		document.getElementById(`carousel-box-${active}-title`)!!.style.color =
			"white";
		document.getElementById(
			`carousel-box-${active}-card-actions`
		)!!.style.color = "white";

		if (active != previous) {
			document
				.getElementById(`carousel-box-${previous}`)
				?.classList.remove("selected-carousel-box");
			document.getElementById(`carousel-box-${previous}-text`)!!.style.color =
				"black";
			document.getElementById(`carousel-box-${previous}-title`)!!.style.color =
				"black";
			document.getElementById(
				`carousel-box-${previous}-card-actions`
			)!!.style.color = "#7F56D9";
		}
		if (firstRender) setFirstRender(false);
	}

	const session = props.session;
	const arr = [
		"Eu, massa lacinia senectus massa vitae vulputate neque.Eu, massa lacinia senectus massa vitae vulputate neque.",
		"Eu, massa lacinia senectus massa vitae vulputate neque.Eu, massa lacinia senectus massa vitae vulputate neque.",
		"Eu, massa lacinia senectus massa vitae vulputate neque.Eu, massa lacinia senectus massa vitae vulputate neque.",
	];

	var items = [
		{
			title: "Pizza Begin",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
			icon: <Computer />,
			backgroundColor: "#F4EBFF",
			iconColor: "#7F56D9",
		},
		{
			title: "Mia Luz",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
			icon: <BarChart />,
			backgroundColor: "#E0EAFF",
			iconColor: "#4883FF",
		},
		{
			title: "Nuda Swim",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
			icon: <Celebration />,
			backgroundColor: "#FCE7F6",
			iconColor: "#C11574",
		},
	];

	return (
		<>
			<Navbar session={session} />

			<Box
				display={"flex"}
				flexDirection={{ xs: "column", lg: "row" }}
				padding={2}
				sx={{
					backgroundColor: "#D9C4FF26",
					alignItems: { xs: "flex-start", sm: "center" },
				}}
				justifyContent={"space-around"}
				position={"relative"}
				overflow={"hidden"}>
				<Box
					display={"flex"}
					flexDirection={"column"}
					position={"relative"}
					sx={{
						mb: { xs: 5, lg: 0 },
						mr: { xs: 0, lg: 5 },
						maxWidth: { xs: "450px", sm: "inherit" },
					}}
					p={2}>
					<Typography
						sx={{
							color: "#6A0DAD",
							fontWeight: 700,
							mb: 3,
							typography: { xs: "h4", sm: "h3" },
						}}>
						{" "}
						Lorem Ipsum Dolor
						<Typography
							variant="h3"
							sx={{ color: "black", typography: { xs: "h4", sm: "h3" } }}>
							Sit
						</Typography>
						{""}
						<Typography
							variant={"h3"}
							sx={{ fontWeight: 700, typography: { xs: "h4", sm: "h3" } }}>
							AMET
						</Typography>
						{""}
						<Typography
							variant={"h3"}
							sx={{
								color: "black",
								fontWeight: 700,
								typography: { xs: "h4", sm: "h3" },
							}}>
							CONSECTETUR
						</Typography>
						{""}
						<Typography sx={{ typography: { xs: "h4", sm: "h3" } }}>
							ELIT
						</Typography>
					</Typography>
					<Typography
						sx={{
							color: "#646464",
							mb: 3,
							typography: { xs: "body2", sm: "body1" },
						}}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et
					</Typography>
					<Button
						variant="contained"
						href="/sign_up"
						sx={{
							backgroundColor: "#6A0DAD",
							boxShadow: "0px 0px 2px 4px #F4EBFF",
							borderRadius: "8px",
							marginRight: 1,
							height: "60px",
							width: "188px",
						}}>
						Ask a Question
					</Button>
				</Box>
				<Image
					src="/static/images/study/blurred-ellipse.svg"
					id="blurred-ellipse"
					alt={""}
					style={{ position: "absolute" }}
					width={22}
					height={22}></Image>

				<Box
					sx={{
						width: { xs: 200, sm: 700 },
						height: { xs: 300, sm: 800 },
					}}
					position={"relative"}
					display={"flex"}
					paddingTop={3}
					ml={2}>
					<Box
						overflow={"hidden"}
						position={"relative"}
						sx={{
							height: { xs: 250, sm: 495 },
							width: { xs: 250, sm: 495 },
							position: "absolute",
							top: "5%",
							backgroundColor: "#7F56D9",
							borderRadius: "50%",
						}}>
						<Image
							src="/static/images/study/study.svg"
							alt={""}
							fill={true}
							style={{
								top: "20%",
								left: "8%",
							}}
							id={"study-img"}
							className={"custom-img"}></Image>
					</Box>

					<Image
						src="/static/images/study/circles.svg"
						alt={""}
						fill={true}
						style={{
							left: "calc(28% + 10px)",
							top: "calc(30% + 10px)",
							zIndex: -1,
							maxWidth: 380,
							maxHeight: 492,
						}}
						id="ellipse-group"
						className={"custom-img"}></Image>

					<Image
						src="/static/images/study/single-circle.svg"
						alt={""}
						priority={true}
						fill={true}
						style={{
							top: "2%",
							left: "-3%",
							zIndex: -1,
							maxWidth: 496,
							maxHeight: 496,
						}}
						id={"single-circle"}
						className={"custom-img"}></Image>
					<Image
						src="/static/images/study/little-purple-circle.svg"
						alt={""}
						fill={true}
						style={{
							top: "65%",
							left: "5%",
							zIndex: -1,
							maxWidth: 42,
							maxHeight: 42,
						}}
						id={"lpc-medium"}
						className={"custom-img"}></Image>
					<Image
						src="/static/images/study/little-purple-circle.svg"
						alt={""}
						fill={true}
						style={{
							top: "82%",
							left: "40%",
							zIndex: -1,
							maxWidth: 14,
							maxHeight: 14,
						}}
						id={"lpc-small"}
						className={"custom-img"}></Image>
					<Image
						src="/static/images/study/little-yellow-circle.svg"
						alt={""}
						fill={true}
						style={{
							top: "30%",
							left: "calc(68% + 5px)",
							zIndex: -2,
							maxWidth: 22,
							maxHeight: 22,
						}}
						id={"yellow-circle"}
						className={"custom-img"}></Image>
				</Box>
			</Box>

			<Box
				display={"flex"}
				justifyContent={"space-around"}
				flexDirection={{ xs: "column-reverse", lg: "row" }}
				sx={{
					p: 2,
					alignItems: { xs: "flex-start", sm: "center" },
					maxWidth: { xs: "450px", sm: "inherit" },
				}}
				position={"relative"}>
				<Image
					src={"/static/images/one_one_tutoring.png"}
					fill={true}
					className="custom-img"
					id="one-one-tutoring-image"
					alt={""}></Image>
				<Box
					display={"flex"}
					sx={{ maxWidth: 600, marginLeft: { xs: 0, sm: 10 }, marginTop: 2 }}
					flexDirection={"column"}>
					<Typography
						sx={{
							color: "#6A0DAD",
							fontWeight: "600 !important",
							typography: { xs: "body2", sm: "body1" },
						}}>
						{" "}
						One on One tutoring{" "}
					</Typography>
					<Typography
						sx={{
							fontWeight: "600 !important",
							typography: { xs: "h5", sm: "h4" },
						}}>
						Lorem ipsum dolor sit amet, consectetur adipiscin
					</Typography>
					<Grid item xs={12} md={6}>
						<List>
							{arr.map((text, index) => (
								<ListItem
									key={index}
									sx={{ alignItems: "baseline", paddingLeft: 0 }}>
									<ListItemAvatar sx={{ minWidth: 30 }}>
										<Avatar
											sx={{ bgcolor: deepPurple[500], width: 16, height: 16 }}>
											<DoneIcon sx={{ height: 14, width: 14 }} />
										</Avatar>
									</ListItemAvatar>
									<ListItemText primary={text} />
								</ListItem>
							))}
						</List>
					</Grid>
				</Box>
			</Box>

			<Box
				display={"flex"}
				justifyContent={"space-around"}
				position={"relative"}
				flexDirection={{ xs: "column", lg: "row" }}
				sx={{
					p: 2,
					backgroundColor: "#D9C4FF26",
					alignItems: { xs: "flex-start", sm: "center" },
				}}>
				<Box
					display={"flex"}
					flexDirection={"column"}
					justifyContent="center"
					sx={{
						maxWidth: { xs: "350px", sm: "inherit" },
						my: { xs: 0, lg: 2 },
					}}>
					<Typography
						sx={{
							fontWeight: "600 !important",
							color: "#6A0DAD",
							marginBottom: 2,
							typography: { xs: "h4", sm: "h3" },
						}}>
						Become a Tutor
					</Typography>
					<Typography
						sx={{ color: "#646464", typography: { xs: "body2", sm: "body1" } }}>
						{" "}
						Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
						purus sit amet luctus venenatis, lectus magna fringilla urna,
						porttitor rhoncus dolor purus non enim praesent elementum facilisis
						leo,
					</Typography>
					<Typography
						sx={{ color: "#646464", typography: { xs: "body2", sm: "body1" } }}>
						dignissim diam quis enim lobortis scelerisque fermentum dui faucibus
						in ornare quam viverra orci
					</Typography>
					<Button
						variant="contained"
						href="/sign_up"
						sx={{
							backgroundColor: "#6A0DAD",
							boxShadow: "0px 0px 2px 4px #F4EBFF",
							borderRadius: "8px",
							marginRight: 1,
							height: "60px",
							fontSize: "18px",
							width: "137px",
							marginTop: 3,
							fontFamily: "Inter Semi-Bold",
							textTransform: "none",
						}}>
						Join Now
					</Button>
				</Box>

				<Box
					sx={{ width: { xs: 350, sm: 700 }, height: { xs: 300, sm: 515 } }}
					position={"relative"}
					display={"flex"}
					paddingTop={3}
					ml={2}
					overflow={"hidden"}>
					<Image
						src="/static/images/tutor/become-a-tutor.svg"
						alt={""}
						fill={true}
						style={{
							top: "0%",
							left: "8%",
							maxWidth: 408,
							maxHeight: 612,
							clipPath: "inset(9% 0 0 0)",
						}}
						id={"become-a-tutor-img"}
						className={"custom-img"}></Image>
					<Image
						src="/static/images/tutor/full-circle.svg"
						alt={""}
						fill={true}
						style={{
							position: "absolute",
							left: "calc(9% + 10px)",
							top: "calc(40% + 10px)",
							zIndex: -1,
							maxWidth: 356,
							maxHeight: 356,
						}}
						id="full-circle"
						className={"custom-img"}></Image>

					<Image
						src="/static/images/tutor/outlined-circle.svg"
						alt={""}
						fill={true}
						style={{
							top: "34%",
							left: "10%",
							zIndex: -2,
							maxWidth: 146,
							maxHeight: 146,
						}}
						id="outlined-circle"
						className={"custom-img"}></Image>
				</Box>
			</Box>

			<Box
				display={"flex"}
				justifyContent={"space-around"}
				flexDirection={{ xs: "column-reverse", lg: "row" }}
				sx={{
					alignItems: { xs: "flex-start", sm: "center" },
					p: 5,
					mt: 2,
					mb: 5,
					maxWidth: { xs: "350px", sm: "inherit" },
				}}>
				<Image
					src={"/static/images/dashboard.png"}
					alt={""}
					fill={true}
					className="custom-img"
					id="dashboard-img"></Image>
				<Box
					display={"flex"}
					flexDirection={"column"}
					justifyContent="center"
					sx={{
						my: { sm: 2 },
						mr: { sm: 0, md: 10 },
						ml: { sm: 0, md: 10 },
					}}>
					<Typography
						variant={"body1"}
						sx={{
							fontFamily: "Inter Semi-Bold",
							color: "#6A0DAD",
							marginBottom: 2,
						}}>
						Forum
					</Typography>
					<Typography
						sx={{
							fontWeight: "600 !important",
							typography: { xs: "h5", sm: "h4" },
						}}>
						Ask your question
					</Typography>
					<Typography
						sx={{
							color: "#6A0DAD",
							fontWeight: "600 !important",
							typography: { xs: "h5", sm: "h4" },
						}}>
						Get your answers
					</Typography>
					<Typography
						sx={{ color: "#646464", typography: { xs: "body2", sm: "body1" } }}>
						{" "}
						Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
						purus sit amet luctus venenatis, lectus magna fringilla urna,
						porttitor rhoncus dolor purus non enim praesent elementum facilisis
						leo,
					</Typography>
					<Button
						variant="contained"
						href="/sign_up"
						sx={{
							backgroundColor: "#6A0DAD",
							boxShadow: "0px 0px 2px 4px #F4EBFF",
							borderRadius: "8px",
							marginRight: 1,
							height: "40px",
							width: "140px",
							marginTop: 3,
							fontSize: "18px",
							textTransform: "none",
						}}>
						Ask Question
					</Button>
				</Box>
			</Box>

			<Box
				display={"flex"}
				alignItems={"center"}
				flexDirection={"column"}
				sx={{ p: 2, maxWidth: { xs: "375px", sm: "initial" } }}>
				<Typography
					variant={"body1"}
					sx={{
						color: "#6A0DAD",
						marginBottom: 2,
						fontFamily: "Inter Semi-Bold",
					}}>
					Why Us
				</Typography>
				<Typography
					sx={{
						fontFamily: "Inter Semi-Bold",
						width: "70%",
						fontSize: { xs: "24px", lg: "34px" },
					}}
					mb={4}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit,
				</Typography>
				<Carousel
					navButtonsAlwaysInvisible={true}
					autoPlay={false}
					indicatorIconButtonProps={{
						style: {
							width: "14px",
							height: "14px",
							backgroundColor: "#D9D9D9",
							color: "#D9D9D9",
							marginRight: "4px",
							marginLeft: "4px",
						},
					}}
					activeIndicatorIconButtonProps={{
						style: {
							backgroundColor: "#6A0DAD",
							color: "transparent",
							width: "48px",
							borderRadius: "6px",
						},
					}}
					changeOnFirstRender={true}
					animation={"slide"}
					onChange={(active, previous) => {
						carouselColorChange(active, previous);
					}}
					sx={{ width: { xs: "300px", sm: "373px" } }}>
					{items.map((item, i) => (
						<CarouselBox
							key={i}
							index={i}
							title={item.title}
							text={item.text}
							icon={item.icon}
							backgroundColor={item.backgroundColor}
							iconColor={item.iconColor}
						/>
					))}
				</Carousel>
			</Box>

			<Footer />
		</>
	);
};

export default LandingPage;
