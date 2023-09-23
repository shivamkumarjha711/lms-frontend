import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function RequireAuth({allowedRoles}) {
    const { isLoggedIn, role } = useSelector((state) => state.auth);

    return isLoggedIn && allowedRoles.find((myRole) => myRole == role) ? (
        <Outlet />      // outlet se pahle wo ye condition check karega phir wo Route ke ander wale pe redirect hoga
    ) : isLoggedIn ? ( <Navigate to="/denied" />) : ( <Navigate to="/login" />)
}

export default RequireAuth;