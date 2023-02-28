import { Box, Pagination, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Filters from "./components/Filters";
import HeroSection from "./components/Hero";
import TutorCard from "./components/TutorCard";
import fakeData from "./FakeData/index.json";

type Props = {};

const Tutors = (props: Props) => {
	const [data, setData] = useState(fakeData);
	const [filters, setFilters] = useState([
		{
			title: "Subject",
			value: "All",
			options: [
				{ value: "All", label: "All Subjects" },
				{ value: "Mathematics", label: "Mathematics" },
				{ value: "English", label: "English" },
				{ value: "Science", label: "Science" },
			],
		},
		{
			title: "Levels",
			value: "All",
			options: [
				{ value: "All", label: "All Levels" },
				{ value: "Beginner", label: "Beginner" },
				{ value: "Intermediate", label: "Intermediate" },
				{ value: "Advanced", label: "Advanced" },
			],
		},
		{
			title: "Pricing Range",
			value: "All",
			options: [
				{ value: "All", label: "All Pricing" },
				{ value: "$0-$50", label: "$0-$50" },
				{ value: "$50-$100", label: "$50-$100" },
				{ value: "$100-$150", label: "$100-$150" },
			],
		},
	]);
	const [currentPage, setCurrentPage] = useState(1);

	const startIndex = (currentPage - 1) * 4;
	const endIndex = startIndex + 4;

	const currentData = data.slice(startIndex, endIndex);

	const handlePageChange = (
		event: React.ChangeEvent<unknown>,
		value: number
	) => {
		setCurrentPage(value);
	};

	const handleFilters = () => {
		const filteredData = fakeData.filter((item) => {
			let isSubjectMatched = false;
			let isLevelMatched = false;
			let isPricingMatched = false;

			// filters should be sync with pagination
			// so we need to reset the current page to 1

			setCurrentPage(1);

			filters.forEach((filter) => {
				if (filter.title === "Subject") {
					if (filter.value === "All") {
						isSubjectMatched = true;
					} else if (item.subject === filter.value) {
						isSubjectMatched = true;
					}
				}

				if (filter.title === "Levels") {
					if (filter.value === "All") {
						isLevelMatched = true;
					} else if (item.level === filter.value) {
						isLevelMatched = true;
					}
				}

				if (filter.title === "Pricing Range") {
					if (filter.value === "All") {
						isPricingMatched = true;
					} else {
						const [minPrice, maxPrice] = filter.value
							.split("-")
							.map((price) => parseInt(price.substring(1)));

						const itemPrice = parseInt(item.price);

						if (itemPrice >= minPrice && itemPrice <= maxPrice) {
							isPricingMatched = true;
						}
					}
				}
			});

			return isSubjectMatched && isLevelMatched && isPricingMatched;
		});

		setData(filteredData);
	};

	useEffect(() => {
		handleFilters();
	}, [filters]);

	return (
		<>
			<HeroSection />
			<Filters filters={filters} setFilters={setFilters} />
			<Box
				sx={{
					margin: "20px",
					padding: "20px 50px",

					"@media screen and (max-width: 850px)": {
						padding: "20px 0",
					},
				}}>
				<Box
					sx={{
						display: "flex",
						alignItems: "flex-start",
						justifyContent: "flex-start",
						flexDirection: "column",
						gap: "20px",
						width: "700px",

						"@media screen and (max-width: 850px)": {
							width: "95%",
						},

						"@media screen and (max-width: 375px)": {
							width: "98%",
							alignItems: "center",
						},
					}}>
					{currentData.map((item, index) => {
						return <TutorCard key={index} {...item} />;
					})}

					{data.length >= 4 ? (
						<Box
							sx={{
								width: "100%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}>
							<Pagination
								count={
									fakeData.length % 4 === 0
										? fakeData.length / 4
										: Math.floor(fakeData.length / 4) + 1
								}
								page={currentPage}
								onChange={handlePageChange}
								variant="outlined"
								shape="rounded"
								sx={{
									marginTop: "10px",
								}}
							/>
						</Box>
					) : data.length === 0 ? (
						<Typography variant="h6" color="text.secondary">
							No tutors found
						</Typography>
					) : (
						""
					)}
				</Box>
			</Box>
		</>
	);
};

export default Tutors;
