import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserProvider, { userContext } from "./src/Context/UserContext";
import HomeScreen from "./src/components/screen/UserListScreen";
import LoginScreen from "./src/components/screen/LoginScreen";
import RegisterScreen from "./src/components/screen/RegisterScreen";
import UserListScreen from "./src/components/screen/UserListScreen";
import getToken from "./src/Hook/useUserToken";

const Stack = createNativeStackNavigator();

export default function App() {
  const token = getToken();

  return (
    <UserProvider>
      <NavigationContainer>
        {token ? (
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={UserListScreen} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={RegisterScreen} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </UserProvider>
  );
}
