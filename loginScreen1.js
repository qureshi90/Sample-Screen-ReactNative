/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 **/

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Pressable,
} from 'react-native';

const SampleScreen1 = () => {
  console.log('SampleScreen')
  return (
    <View style={styles.body}>
      <Text style={styles.header}>Instamobile</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" />
      <Pressable>
        <Text style={styles.button}>Login</Text>
      </Pressable>
      <Text style={styles.fblogin}>Login with Facebook</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  header: {
    padding: 20,
    fontSize: 40,
    fontWeight: 'bold',
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
    backgroundColor: '#FBFBFB',
    color: '#E2E1E2',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  button: {
    height: 40,
    marginTop: 10,
    margin: 15,
    padding: 10,
    backgroundColor: "#3896F3",
    color: "#FFFFFF",
    borderRadius: 5,
    textAlign: "center"
  },
  fblogin: {
    color: '#5FAAEF',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default SampleScreen1;
