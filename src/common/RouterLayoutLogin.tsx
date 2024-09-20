import React from "react"
import { Outlet } from "react-router-dom"
import { LoginPage } from "../components/pages"

export const RouterLayoutLogin: React.FC<{}> = () => {
    return (
        <>
        <LoginPage/>
        <Outlet/>
        </>
    )
}