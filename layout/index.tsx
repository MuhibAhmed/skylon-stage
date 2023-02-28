import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

type Props = {
	session: any;
	children: React.ReactNode;
};

const MainLayout = (props: Props) => {
	return (
		<>
			<Navbar session={props.session} />
			{props.children}
			<Footer />
		</>
	);
};

export default MainLayout;
