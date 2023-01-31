import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./Navigators/HomeNavigator";

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
}
