import React, { use } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";

function PrivateRoute({ children }) {
    const location=useLocation()
    const { currentUser } = use(AuthContext);

    if (currentUser) {
        return children;
    }
    return <Navigate state={location?.pathname} to="/sign-in"></Navigate>;
    }

export default PrivateRoute;
