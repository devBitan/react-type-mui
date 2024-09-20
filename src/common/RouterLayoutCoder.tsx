import React from "react"
import { Outlet } from "react-router-dom"
import { NavBar } from "../components/organisms/navbar/NavBar"
import { Box } from '@mui/material';

export const RouterLayoutCoder: React.FC<{}> = () => {
    return (
        <>
            <NavBar />
            <Box
                sx={{
                    // display: 'flex',
                    // flexWrap: 'wrap',
                    // maxWidth: 1150,
                    // borderRadius: 3,
                    // marginX: 'auto',
                    // marginY: 3,
                    // border: 2.5,
                    // paddingY: 3,
                    // paddingX: 1,
                    // borderColor: 'rgb(88, 85, 85)',
                    // boxShadow: '1px 5px 5px #858585'
                }}
            >
                <Outlet />
            </Box>

        </>
    )
}