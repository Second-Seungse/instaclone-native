import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const isLoggedInVar = makeVar(false);
export const tokenVar = makeVar("");

export const logUserIn = async (token) => {
  await AsyncStorage.multiSet([
    ["token", JSON.stringify(token)],
    ["loggedIn", JSON.stringify("yes")],
  ]);
  isLoggedInVar(true);
  tokenVar(token);
};

const client = new ApolloClient({
  uri: "https://swift-bullfrog-33.loca.lt/graphql",
  cache: new InMemoryCache(),
});
export default client;
