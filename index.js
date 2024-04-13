

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header.js';
import { name as appName } from './app.json';
import LaptopList from './src/components/LaptopList.js';

const App = () => {
    return (
        <View>
            <Header title="Laptops" />
            <LaptopList></LaptopList>
        </View>
    );
};

AppRegistry.registerComponent(appName, () => App);