import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import LogIn from "../screens/LogIn";
import CreateAccount from "../screens/CreateAccount";

export type RootStackParamList = {
  Welcome: {};
  LogIn: {};
  CreateAccount: {};
};

const NavigatorScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
  headerBackTitleVisible: false,
  headerTitle: "",
  headerTransparent: true,
  headerTintColor: "white",
};
const WelcomeScreenOptions = {
  headerShown: false,
};
const LogInScreenOptions = {
  headerTitle: "",
  headerTransparent: true,
  headerTintColor: "white",
};

const Stack = createStackNavigator<RootStackParamList>();
export default function LoggedOutNav() {
  return (
    <Stack.Navigator screenOptions={NavigatorScreenOptions}>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={WelcomeScreenOptions}
      />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
}
