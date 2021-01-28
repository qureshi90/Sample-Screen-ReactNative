import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { ScrollView } from 'react-native';
import { Dimensions, StyleSheet } from 'react-native';
import SampleScreen1 from './loginScreen1';
import SampleScreen2 from './loginScreen2';

enableScreens();
const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer style={styles.screen}>
      <Stack.Navigator
      screenOptions={{headerShown: false}}
      >
        <Stack.Screen
          name="screen1"
          component={SampleScreen1}
          options={{title: "login"}}
        />
        <Stack.Screen
          name="screen2"
          component={SampleScreen2}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  }
});

export default App;
