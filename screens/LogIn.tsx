import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../navigators/LoggedOutNav";

type Props = StackScreenProps<RootStackParamList, "CreateAccount">;
export default function Login({ navigation }: Props) {
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
        <Text>Go to Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}
