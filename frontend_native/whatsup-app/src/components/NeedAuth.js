import getToken from "../Hook/useUserToken";

export default function NeedAuth(props) {
  const token = getToken();
  handleNavigate = () => {
    this.props.navigator.navigate("HomeScreen");
  };

  if (getToken()) {
    return props.children;
  } else {
    handleNavigate();
  }
}
