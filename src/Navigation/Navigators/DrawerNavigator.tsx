import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "../../Screens/Favorites";
import HomeNavigator from "./HomeNavigator";

const HomeDrawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <HomeDrawer.Navigator
    >
      <HomeDrawer.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        navigationKey="homeNavigator"
      />
      <HomeDrawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        navigationKey="favorites"
      />
    </HomeDrawer.Navigator>
  );
}
