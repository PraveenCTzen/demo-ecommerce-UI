import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'
import clevertap from 'clevertap-web-sdk';
// console.log('test CT',clevertap)


clevertap.init('W9R-486-4W5Z')
clevertap.privacy.push({ optOut: false });
clevertap.privacy.push({useIP: false})
clevertap.setLogLevel(3)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
