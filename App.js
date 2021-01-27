import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer'
// import { ScrollView } from 'react-native';
import SampleScreen1 from './loginScreen1';
import SampleScreen2 from './loginScreen2';

enableScreens();
// const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()
// const Drawer = createDrawerNavigator()

const App = () => {
  console.log('SampleScreen')
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="screen1" component={SampleScreen1} />
        <Tabs.Screen name="screen2" component={SampleScreen2} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
