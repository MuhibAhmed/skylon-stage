import {NextPage} from "next";
import HomeLayout from "../../components/home/forum/HomeLayout";
import React from "react";
import Dashboard from "../../components/home/Dashboard";

type DashboardProps = {}

const DashboardPage: NextPage<DashboardProps> = (props) => {
    return (
        <HomeLayout mainPage={<Dashboard/>}/>
    )
}

export default DashboardPage