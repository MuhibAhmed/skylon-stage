import type { AppProps } from "next/app";
import "../styles/globals.css";
import React, { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { extractSession } from "../constants";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
	const [session, setSession] = useState<any>(null);

	const [hasMounted, setHasMounted] = React.useState(false);

	useEffect(() => {
		setHasMounted(true);
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

	const theme = createTheme({
		typography: {
			fontFamily: ["Inter", "sans-serif"].join(","),
		},
	});

	if (!hasMounted) {
		return null;
	}

	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<Component {...pageProps} session={session} />
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
