import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { RouterLayoutAdmin } from "./common/RouterLayoutAdmin";
import { AdminCoder, AdminDashboard, CoderDashboard, LoginPage, TraderDashboard } from "./components/pages";
import { RouterLayoutCoder } from "./common/RouterLayoutCoder";
import { RouterLayoutLogin } from "./common/RouterLayoutLogin";

export const AppRouter: React.FC<{}> = () => {
    return (
        <Routes>
             <Route path="/" element={<Navigate to="/login" replace />} />
             <Route path="/login" element={<RouterLayoutLogin/>}>
                <Route path="/login" element={<LoginPage/>} />
            </Route>
            <Route path="/" element={<RouterLayoutAdmin/>}>
                <Route path="/dashboard" element={<AdminDashboard/>} />
                <Route path="/users" element={<AdminCoder/>} />
            </Route>
            <Route path="/" element={<RouterLayoutCoder/>}>
                <Route path="/coder" element={<CoderDashboard/>} />
                <Route path="/trainer" element={<TraderDashboard/>} />
            </Route>
            <Route path="*" element={<Navigate to="/login" replace/>} />
        </Routes>
    )
}
