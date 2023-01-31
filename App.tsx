import React from "react";
import RootNavigator from "./src/Navigation";
import { Provider } from "react-redux";
import { store, persistor } from "./src/Redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
}

export default App;
