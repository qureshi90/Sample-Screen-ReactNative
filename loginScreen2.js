import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  ImageBackground
} from 'react-native';

const image = { uri: "https://i.pinimg.com/736x/4c/7a/b1/4c7ab1da89e96e9051005526164af8ed.jpg" };

const SampleScreen2 = ({navigation}) => {
  console.log('SampleScreen')
  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.body}>
        <Image style={styles.logo} source={require('./assets/logo.png')} />
        <TextInput
          placeholderTextColor="#FFF"
          style={styles.input}
          placeholder="Username"
          selectionColor={'white'}
        />
        <TextInput
          placeholderTextColor="#FFF"
          style={styles.input}
          placeholder="Email"
          selectionColor={'white'}
        />
        <TextInput
          placeholderTextColor="#FFF"
          style={styles.input}
          placeholder="Password"
          selectionColor={'white'}
        />
        <Text style={styles.button}>REGISTER</Text>
        <View style={styles.icons}>
          <Text style={styles.icon}>G+</Text>
          <Text style={styles.icon}>T</Text>
          <Text style={styles.icon}>F</Text>
        </View>
        <Text style={styles.text}>Already have an account? <Text onPress={() => navigation.goBack()}>Login</Text></Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    margin: 10,
    fontSize: 20,
    width: '80%',
    backgroundColor: 'transparent',
    borderBottomWidth: 2,
    color: 'white',
    borderColor: 'white',
  },
  logo: {
    width: 180,
    height: 180,
  },
  button: {
    fontSize: 20,
    margin: 10,
    marginTop: 50,
    backgroundColor: '#FD4A59',
    width: '80%',
    textAlign: 'center',
    padding: 15,
    borderRadius: 50,
    color: 'white',
  },
  image: {
    flex: 1,
    // width: '100%',
    // resizeMode: "cover",
    // position: "absolute",
    // justifyContent: "center"
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: '80%',
    margin: 20,
  },
  icon: {
    width: 90,
    height: 40,
    padding: 10,
    borderColor: "white",
    borderWidth: 2,
    textAlign: "center",
    color: "white",
    borderRadius: 20,
    fontWeight: "bold",
  },
  text: {
    color: "white",
  }
});

export default SampleScreen2;
