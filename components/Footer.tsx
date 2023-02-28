import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import FooterList from "./FooterList";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import logo from "../public/static/images/skylone_logo_beta.svg";

const Footer = () => {
	return (
		<Box
			sx={{ display: "flex", backgroundColor: "#310979", padding: 3 }}
			id="footer"
			flexDirection={"column"}>
			<Box sx={{ display: "flex" }} flexWrap={"wrap"} justifyContent={"center"}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						maxWidth: "320px",
						padding: 1,
					}}>
					<Box sx={{ display: "flex", marginBottom: 2 }}>
						<Image
							src={logo}
							width={30}
							height={30}
							style={{ marginLeft: "6px", marginRight: "6px" }}
							alt={"Kossai"}
						/>
						<Typography
							variant="h6"
							noWrap
							component="a"
							href="/"
							sx={{
								mr: 2,
								fontWeight: "bold",
								textDecoration: "none",
								color: "white",
							}}>
							Skylon
						</Typography>
					</Box>
					<Typography paragraph={true} sx={{ color: "white" }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et
					</Typography>
				</Box>

				<Box sx={{ display: "flex" }} flexWrap={"wrap"}>
					<FooterList
						title="Product"
						linksNames={[
							"Overview",
							"Features",
							"Solutions",
							"Tutorials",
							"Pricing",
						]}
					/>
					<FooterList
						title="Company"
						linksNames={["About us", "Careers", "Press", "News"]}
					/>
					<FooterList
						title="Social"
						linksNames={["Twitter", "Linkedin", "Github", "Dribble"]}
					/>
					<FooterList
						title="Legal"
						linksNames={["Terms", "Privacy", "Cookies", "Contract"]}
					/>
				</Box>
			</Box>

			<Box display={"flex"} justifyContent={"space-around"}>
				<Typography variant="body1" color="#98A2B3" align="center">
					{"© "}
					{new Date().getFullYear()}
					{" Skylon. All rights reserved."}
				</Typography>

				<Box display={"flex"} marginLeft={"20%"}>
					<TwitterIcon sx={{ mx: 1, fill: "#98A2B3" }} />
					<LinkedInIcon sx={{ mx: 1, fill: "#98A2B3" }} />
					<GitHubIcon sx={{ mx: 1, fill: "#98A2B3" }} />
					<FacebookIcon sx={{ mx: 1, fill: "#98A2B3" }} />
				</Box>
			</Box>
		</Box>
	);
};

export default Footer;
