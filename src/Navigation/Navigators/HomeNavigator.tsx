import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../Screens/Home";
import PokemonScreen from "../../Screens/Pokemon";

const Stack = createNativeStackNavigator();

const HomeNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Pokemon"
          component={PokemonScreen}
          navigationKey="Pokemon"
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HomeNavigator;
