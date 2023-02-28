import { useEffect, useState } from "react";
import { extractSession } from "../constants";
import { supabase } from "../utils/supabase";
import Head from "next/head";
import { Box } from "@mui/material";

type LayoutProps = {
	children: any;
};
const Layout = (props: LayoutProps) => {
	const [session, setSession] = useState<any>(null);

	useEffect(() => {
		extractSession().then((session) => setSession(session));
		const authStateChange = supabase.auth.onAuthStateChange(
			(_event, session) => {
				setSession(session);
			}
		);

		return () => {
			authStateChange.data.subscription?.unsubscribe();
		};
	}, []);

	return (
		<Box display={"flex"}>
			<Head>
				<title>Skylon</title>
				<meta
					name="description"
					content="Meta description for the Skylone app"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<main>{props.children}</main>
		</Box>
	);
};

export default Layout;
