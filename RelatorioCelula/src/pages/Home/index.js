import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../styles/Colors';
//import Container from '../../components/Core/Container';

//const [celula /*setCelula*/] = 'Nome da Celula';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imagem}>
        <ImageBackground
          source={require('../../../src/assets/img/bitmap.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text style={styles.text}>Seja bem vindo!!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Main')}>
        <Text style={styles.buttonText}>Começar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.white,
    marginTop: 40,
    marginBottom: 20,
  },
  image: {
    marginTop: 90,
    height: 200,
    width: 300,
  },
  input: {
    backgroundColor: Colors.champagne,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Colors.asphalt,
    borderRadius: 15,
    width: 370,
    height: 60,

    alignSelf: 'center',
  },
  button: {
    backgroundColor: Colors.blue,
    width: 280,
    height: 70,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.green,
    elevation: 55,
    borderRadius: 20,
    marginTop: 70,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 30,
  },
  imagem: {
    alignSelf: 'center',
  },
  entryIcon: {
    color: Colors.white,
  },
});

export default Home;
