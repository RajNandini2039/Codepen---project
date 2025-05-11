import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./utilis/auth";

const PrivateRoute = ({children}) => {
    return isAuthenticated() ? <>{children}</> :  <Navigate to="/" replace />
      
} 
export default PrivateRoute;
// components/ProtectedRoute.js
// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// const PrivateRoute = ({ children }) => {
//   const user = useSelector((state) => state.user.user);
//   return user ? children : <Navigate to="/home/auth" />;
// };

// export default PrivateRoute;
