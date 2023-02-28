import { NextPage } from "next";
import LandingPage from "../components/LandingPage";
import AccountPage from "./home/account_page";

type HomeProps = {
	session: any;
};

const Home: NextPage<HomeProps> = (props) => {
	return (
		<>
			{!props.session ? (
				<LandingPage session={props.session} />
			) : (
				<AccountPage session={props.session} />
			)}
		</>
	);
};
export default Home;
