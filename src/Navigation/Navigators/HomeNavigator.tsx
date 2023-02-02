import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../Screens/Home";
import PokemonScreen from "../../Screens/Pokemon";
const HomeStack = createNativeStackNavigator();

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        navigationKey="home"
      />
      <HomeStack.Group screenOptions={{ presentation: "modal" }}>
        <HomeStack.Screen
          name="Pokemon"
          component={PokemonScreen}
          navigationKey="Pokemon"
        />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
}
