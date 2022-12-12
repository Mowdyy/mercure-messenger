import { AsyncStorage } from "react-native";

export default function getToken() {
  const retrieveUserToken = async () => {
    try {
      const token = await AsyncStorage.getItem("@MyApp:userToken");
      return token;
    } catch (error) {
      console.log(error);
    }
  };
}
