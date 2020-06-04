import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src';
import { Provider } from "react-redux";
import store from "./src/store";
import {name as appName} from './app.json';

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
)
AppRegistry.registerComponent(appName, () => Root);
