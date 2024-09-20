import React from "react"
import { Outlet } from "react-router-dom"
import { NavBar } from "../components/organisms/navbar/NavBar"
// import { NavBar } from "./NavBar" llanar ka navbar de admin


export const RouterLayoutAdmin: React.FC<{}> = () => {
    return (
        <>
        <NavBar/>
        <Outlet/>
        </>
    )
}