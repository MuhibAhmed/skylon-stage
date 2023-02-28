import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Heading, SubHeading } from "../../../../../components/Global/Heading";
import Circles from "../../../../../public/static/images/tutor/circles.svg";
import HeroImage from "../../../../../public/static/images/tutor/homeSectionImage.png";
import { PrimaryButton } from "../../../../../components/Global/PrimaryButton";
import CircleIcon from "@mui/icons-material/Circle";

type Props = {};

const HeroSection = (props: Props) => {
	return (
		<>
			<Box
				sx={{
					minHeight: "70vh",
					background: "rgb(217, 196, 255,15%)",
					marginTop: "20px",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					gap: "30px",
					padding: "0 60px",
					position: "relative",

					"@media (max-width: 768px)": {
						flexDirection: "column-reverse",
						padding: "0px 0px 40px 0",
						justifyContent: "center",
					},
				}}>
				<Image
					src={Circles}
					alt={""}
					style={{
						position: "absolute",
						bottom: "140px",
						left: "0px",
						height: "300px",
						width: "300px",
						objectFit: "contain",
						zIndex: 1,
					}}
				/>

				<Box
					sx={{
						position: "relative",
						flex: 1.2,
					}}>
					<CircleIcon
						sx={{
							color: "#7F56D9",
							fontSize: "10px",
							position: "absolute",
							top: "0px",
							left: "-20px",
						}}
					/>
					<CircleIcon
						sx={{
							color: "#7F56D9",
							fontSize: "20px",
							position: "absolute",
							bottom: "0px",
							left: "50%",
							opacity: 0.5,
						}}
					/>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: "20px",
							paddingLeft: "10px",
						}}>
						<Heading
							sx={{
								fontWeight: "bold",
								fontSize: "40px",
								lineHeight: "60px",
								letterSpacing: "0.05em",

								"@media (max-width: 660px)": {
									fontSize: "30px",
									lineHeight: "40px",
								},

								"@media (max-width: 375px)": {
									fontSize: "25px",
								},
							}}>
							<span
								style={{
									color: "#7F56D9",
								}}>
								Lorem Ipsum Dolor{" "}
							</span>
							Sit
							<span
								style={{
									color: "#7F56D9",
								}}>
								{" "}
								AMET{" "}
							</span>
							CONSECTETUR
							<span
								style={{
									color: "#7F56D9",
								}}>
								{" "}
								Adipscing{" "}
							</span>
							Elit
						</Heading>
						<SubHeading
							sx={{
								width: "90%",
							}}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et
						</SubHeading>
						<PrimaryButton
							sx={{
								width: "fit-content",
								padding: "10px 20px",
							}}>
							Ask a Question
						</PrimaryButton>
					</Box>
				</Box>

				<Box
					sx={{
						flex: 1,
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-end",
						position: "relative",

						"@media (max-width: 768px)": {
							// remove cirlces images

							"& > img": {
								display: "none",
							},

							// remove cirlces icons

							"& > svg": {
								display: "none",
							},
						},
					}}>
					<CircleIcon
						sx={{
							color: "#7F56D9",
							fontSize: "30px",
							position: "absolute",
							bottom: "20px",
							left: "200px",
							zIndex: 3,
						}}
					/>
					<CircleIcon
						sx={{
							color: "#7F56D9",
							fontSize: "15px",
							position: "absolute",
							bottom: "-100px",
							left: "300px",
							zIndex: 3,
						}}
					/>
					<Image
						src={Circles}
						alt={""}
						style={{
							position: "absolute",
							bottom: "30px",
							right: "0px",
							height: "300px",
							width: "300px",
							objectFit: "contain",
							zIndex: 1,
						}}
					/>
					<Image
						src={Circles}
						alt={""}
						style={{
							position: "absolute",
							top: "30px",
							right: "150px",
							height: "400px",
							width: "300px",
							objectFit: "contain",
							zIndex: 1,
						}}
					/>
					<Box
						sx={{
							position: "relative",
							height: "300px",
							width: "500px",
							borderRadius: "10px",
							zIndex: 2,
							overflow: "hidden",

							"@media (max-width: 768px)": {
								width: "100vw",
							},
						}}>
						<Image
							src={HeroImage}
							alt="Single Tutor"
							fill
							style={{
								objectFit: "cover",
								backgroundPosition: "top",
							}}
						/>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default HeroSection;
