import React, { useCallback } from "react";
import RootNavigator from "./src/Navigation";
import { Provider } from "react-redux";
import { store, persistor } from "./src/Redux";
import { PersistGate } from "redux-persist/integration/react";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
SplashScreen.preventAutoHideAsync();

function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  const hideSplashScreen = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  hideSplashScreen();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
       <SafeAreaProvider>
        <RootNavigator />
       </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
