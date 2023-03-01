import Link from "next/link";
import { supabase } from "../utils/supabase";
import { useRouter } from "next/router";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";

import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ResponsiveMenu from "./ResponsiveMenu";

import logo from "../public/static/images/skylone_logo.svg";

type NavbarProps = {
  session: any;
};
const Navbar = (props: NavbarProps) => {
  const session = props.session;
  const router = useRouter();

  const tabs = ["Connect", "Forum", "Become a teacher", "Services", "About"];

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", boxShadow: "none", width: 1 }}
    >
      <Toolbar>
        <Image
          src={logo}
          width={30}
          height={30}
          style={{ marginRight: "6px" }}
          alt={"Kossai"}
        />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontWeight: "bold",
            textDecoration: "none",
            color: "#101828",
          }}
        >
          Skylon
        </Typography>

        <ResponsiveMenu tabs={tabs} />
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {tabs.map((tab) => (
            <Button
              key={tab}
              sx={{
                my: 2,
                display: "block",
                color: "#101828",
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              {tab}
            </Button>
          ))}
        </Box>
        <Box
          sx={{ flexGrow: 1, display: { xs: "flex" } }}
          justifyContent={"flex-end"}
        >
          <Button
            variant="text"
            sx={{ color: "black", mr: 1 }}
            href={session?.user ? "/account_page" : "/login"}
          >
            {session?.user ? "Profile" : "Sign in"}
          </Button>
          {session?.user ? (
            <Button
              variant={"contained"}
              onClick={() => {
                supabase.auth.signOut();
                router.push("/");
              }}
              sx={{
                backgroundColor: "#6A0DAD",
                boxShadow: "0px 0px 2px 4px #F4EBFF",
                borderRadius: "8px",
                marginRight: 1,
                height: "36px",
              }}
            >
              {" "}
              Sign out{" "}
            </Button>
          ) : (
            <Button
              variant="contained"
              href="/sign_up"
              sx={{
                backgroundColor: "#6A0DAD",
                boxShadow: "0px 0px 2px 4px #F4EBFF",
                borderRadius: "8px",
                marginRight: 1,
                height: "36px",
              }}
            >
              Register
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
