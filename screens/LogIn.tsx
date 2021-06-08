import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../navigators/LoggedOutNav";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";

type Props = StackScreenProps<RootStackParamList, "CreateAccount">;
export default function Login({ navigation }: Props) {
  return (
    <AuthLayout>
      <TextInput
        placeholder="Username"
        returnKeyType="next"
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        returnKeyType="done"
        lastOne={true}
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
      />
    </AuthLayout>
  );
}
