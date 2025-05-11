import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./utilis/auth";

const PublicRouter = ({children}) => {
    return isAuthenticated() ? <>{children}</> :  <Navigate to="/SignUp" replace />
      
} 
export default PublicRouter;