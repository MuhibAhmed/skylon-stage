import { NextPage } from "next";
import React from "react";
import MainLayout from "../../layout";
import Tutors from "../../src/Views/Tutors";

type Props = {
	session: any;
};

const TutorsPage: NextPage<Props> = (props) => {
	return (
		<>
			<MainLayout session={props.session}>
				<Tutors />
			</MainLayout>
		</>
	);
};

export default TutorsPage;
