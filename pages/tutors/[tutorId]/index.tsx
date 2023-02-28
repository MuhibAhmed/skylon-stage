import { NextPage } from "next";
import React from "react";
import MainLayout from "../../../layout";
import SingleTutor from "../../../src/Views/SingleTutor";

type Props = {
	session: any;
};

const SingleTutorPage: NextPage<Props> = (props) => {
	return (
		<>
			<MainLayout session={props.session}>
				<SingleTutor />
			</MainLayout>
		</>
	);
};

export default SingleTutorPage;
