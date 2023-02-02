import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../Screens/Home";
const HomeStack = createNativeStackNavigator();

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        navigationKey="home"
      />
    </HomeStack.Navigator>
  );
}
