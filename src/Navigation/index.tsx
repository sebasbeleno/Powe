import { NavigationContainer } from "@react-navigation/native";
import DraweNavigator from "./Navigators/DrawerNavigator";

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <DraweNavigator />
    </NavigationContainer>
  );
}
