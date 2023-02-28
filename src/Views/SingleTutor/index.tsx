import { Box, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Heading, SubHeading } from "../../../components/Global/Heading";
import Circles from "../../../public/static/images/tutor/circles.svg";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import AccessAlarmRoundedIcon from "@mui/icons-material/AccessAlarmRounded";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import SingleTutorCard from "./Components/Card";

type Props = {};

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
			{value === index && (
				<Box
					sx={{
						padding: "10px 0 0 0",
					}}>
					<SubHeading>{children}</SubHeading>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

const SingleTutor = (props: Props) => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};
	return (
		<>
			<Box
				sx={{
					minHeight: "60vh",
					background: "rgb(217, 196, 255,15%)",
					marginTop: "20px",
					display: "flex",
					alignItems: "center",
					gap: "30px",
					padding: "0 50px",
					position: "relative",
				}}>
				<Image
					src={Circles}
					alt={""}
					style={{
						position: "absolute",
						bottom: "30px",
						left: "0px",
						height: "360px",
						width: "360px",
						objectFit: "contain",
						zIndex: 1,
					}}
				/>
				<Box
					sx={{
						position: "relative",
						height: "230px",
						width: "334px",
						borderRadius: "10px",
						zIndex: 2,
						overflow: "hidden",
					}}>
					<Image
						src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
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
						flexDirection: "column",
						gap: "10px",
					}}>
					<Heading>Jane Wade</Heading>
					<SubHeading
						sx={{
							marginBottom: "10px",
						}}>
						Profession English Teacher
					</SubHeading>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
						}}>
						<GridViewRoundedIcon
							sx={{
								color: "#D9D9D9",
								fontSize: "18px",
							}}
						/>
						<SubHeading>Teachers English Lesson</SubHeading>
					</Box>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
						}}>
						<AccessAlarmRoundedIcon
							sx={{
								color: "#D9D9D9",
								fontSize: "20px",
							}}
						/>
						<SubHeading>50 lesson completed</SubHeading>
					</Box>
					<Typography variant="body1">
						{[...Array(parseInt("4"))].map((e, i) => (
							<GradeRoundedIcon key={i} sx={{ color: "#FFD700" }} />
						))}
					</Typography>
				</Box>
			</Box>

			<Box
				sx={{
					padding: "50px",
					display: "flex",
					gap: "100px",
				}}>
				<Box
					sx={{
						flex: "1",
						display: "flex",
						flexDirection: "column",
						gap: "20px",
					}}>
					<Heading
						sx={{
							fontSize: "24px",
							fontWeight: "bold",
						}}>
						Jane Wade
					</Heading>
					<SubHeading>
						Helen, founder of Karma Yoga Studio, started practising yoga in 2005
						under the guidance of Joakim Olin, Dario Calvaruso, Patrick
						Creelman, Will Lau, Samrat Dasgupta, Rinat Perlman and Sudhakar
						Dheenan. Certified 500-hr RYT Dharma Yoga teacher with Sri Dharma
						Mittra in New York, certified 432-hr Navakarana Vinyasa teacher with
						Dario Calvaruso, certified 200-hr foundation teacher and 300-hr
						Advanced Teacher Training with Patrick Creelman, certified 18-hr
						Tibetan Singing Bowl Sound Healing with Chris Su. Participated in
						the 1st International Yoga Championship in 2011. She has been
						teaching yoga since 2011 when she became a certified RYS yoga
						teacher. Teaching from her heart and with love & humble since day
						one.
					</SubHeading>
					<SubHeading>
						In her teaching, Helen draws on her diverse experience and insights
						as inspirations to students: to live a full life with yoga and a
						balance between family and work. Besides, she also complements her
						classes with challenges and playfulness.
					</SubHeading>
					<SubHeading>
						"One of the many gifts of being a yoga teacher is seeing students
						improve through the practice of yoga - physically, mentally and
						emotionally, both on and off the mat." As she sees true yoga as
						students constantly coming back to the mat for the love for yoga and
						gathering for a great purpose, pleasure and personal growth.
					</SubHeading>
				</Box>
				<SingleTutorCard />
			</Box>
			<Box
				sx={{
					padding: "50px",
					width: "60%",
				}}>
				<Heading
					sx={{
						fontSize: "24px",
						fontWeight: "bold",
					}}>
					Resume
				</Heading>
				<Box sx={{ width: "100%" }}>
					<Box
						sx={{
							marginBottom: "10px",
						}}>
						<Tabs
							value={value}
							onChange={handleChange}
							sx={{
								// change the color of the active tab
								"& .Mui-selected": {
									color: "#7F56D9",
								},

								// change the indicator color
								"& .MuiTabs-indicator": {
									backgroundColor: "#7F56D9",
								},
							}}
							aria-label="basic tabs example">
							<Tab label="Education" {...a11yProps(0)} />
							<Tab label="Certification" {...a11yProps(1)} />
						</Tabs>
					</Box>
					<TabPanel value={value} index={0}>
						Helen, founder of Karma Yoga Studio, started practising yoga in 2005
						under the guidance of Joakim Olin, Dario Calvaruso, Patrick
						Creelman, Will Lau, Samrat Dasgupta, Rinat Perlman and Sudhakar
						Dheenan. mat for the love for yoga and gathering for a great
						purpose, pleasure and personal growth.
					</TabPanel>
					<TabPanel value={value} index={1}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. At
						laboriosam possimus accusantium facilis incidunt repellendus
						aspernatur nobis. Modi quas illo libero voluptates quis fugiat, est
						vitae, dolores consequuntur, commodi deleniti.
					</TabPanel>
				</Box>
			</Box>
		</>
	);
};

export default SingleTutor;
