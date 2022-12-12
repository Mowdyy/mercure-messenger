import { StyleSheet } from "react-native";

const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#FF1491",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    height: 70,
    width: 70,
    resizeMode: "auto",
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#D3D3D3",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "35%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#000000",
  },
  loginText: {
    color: "white",
    height: 70,
    flex: 1,
    paddingTop: 11,
  },
  register: {
    color: "#696969",
  },
  registerBtn: {
    color: "#008080",
  },

  registerTitle: {
    fontSize: 20,
    padding: 10,
    marginBottom: 30,
  },
  HomeContainer: {
    flex: 1,
    // backgroundColor: "#FF1491",
    alignItems: "center",
    justifyContent: "center",
  },

  homeLogout: {
    color: "#696969",
    marginBottom: 50,
  },
  userList: {
    flex: 1,
    alignItems: "stretch",
  },
});

export default loginStyle;
