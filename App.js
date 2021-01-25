/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
**/

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

const SampleScreen = () => {
  return (
    <ScrollView>
      <View style={styles.body}>
        <Text style={styles.header}>Instamobile</Text>
        <TextInput style = {styles.input} placeholder="Username" />
        <TextInput style = {styles.input} placeholder="Password" />
        <View style = {styles.button}><Button title="Login" /></View>
        <Text style={styles.fblogin}>Login with Facebook</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  header: {
    padding: 20,
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 100,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    fontSize: 15,
    borderColor: '#eaeaea',
    backgroundColor: 'cyan',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  button: {
    marginTop: 10,
    margin: 15,
  },
  fblogin: {
    color: '#7FBBF1',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
  }
});

export default SampleScreen;
