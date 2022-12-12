import { Navigate, useLocation } from "react-router-dom";

export default function NeedAuth(props) {
  let location = useLocation();

  function getToken() {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  }

  if (getToken()) {
    return props.children;
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
}
