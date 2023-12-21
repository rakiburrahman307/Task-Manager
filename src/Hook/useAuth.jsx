import { useContext } from "react";
import { AuthContext } from "../AuthProvidors/AuthProvider";
const useAuth = () => {
    const Provider = useContext(AuthContext);
    return Provider;
};

export default useAuth;