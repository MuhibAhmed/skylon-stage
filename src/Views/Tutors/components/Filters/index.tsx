import React from "react";
import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";

const Filters = ({ filters, setFilters }: any) => {
	const handleChange = (event: any) => {
		setFilters((prev: any) => {
			return prev.map((item: any) => {
				if (item.title === event.target.name) {
					return {
						...item,
						value: event.target.value,
					};
				}
				return item;
			});
		});
	};

	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-around",
				width: "100%",
				background: "#6A0DAD",
				margin: "0px 0 20px 0",
				padding: "50px 0",
				color: "#fff",

				"@media screen and (max-width: 425px)": {
					flexDirection: "column",
					padding: "30px 0",
					gap: "20px",
				},
			}}>
			{filters.map((item: any, index: number) => {
				return (
					<>
						<Box
							key={index}
							sx={{
								width: "30%",

								"@media screen and (max-width: 425px)": {
									width: "90%",
								},
							}}>
							<Typography
								variant="h6"
								sx={{
									background: "transparent",
									fontWeight: "normal",
									fontSize: "14px",
									marginBottom: "10px",
								}}>
								{item.title}
							</Typography>
							<FormControl
								fullWidth
								sx={{
									background: "#fff",
									borderRadius: "8px",
								}}>
								<Select
									variant="outlined"
									name={item.title}
									value={item.value || ""}
									label=""
									size="small"
									sx={{
										padding: "5px 0",
										borderRadius: "8px !important",
										boxShadow: "none",
										"&:hover": {
											border: "0px solid transparent !important",

											"& .MuiOutlinedInput-notchedOutline": {
												border: "0px solid transparent !important",

												"&:hover": {
													border: "0px solid transparent !important",
												},
											},
										},
									}}
									placeholder={item.title}
									onChange={handleChange}>
									{item.options.map((option: any, index: number) => {
										return (
											<MenuItem
												key={index}
												value={option.value}
												placeholder={item.title}>
												{option.label}
											</MenuItem>
										);
									})}
								</Select>
							</FormControl>
						</Box>
					</>
				);
			})}
		</Box>
	);
};

export default Filters;
