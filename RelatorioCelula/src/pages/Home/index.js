import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../styles/Colors';
import Container from '../../components/Core/Container';

//const [celula /*setCelula*/] = 'Nome da Celula';

const Home = ({navigation}) => {
  return (
    <Container
      title="Week Cell APP"
      actionLabelText="Aplicativo em Fase de teste">
      <TouchableOpacity style={styles.imagem}>
        <ImageBackground
          source={require('../../../src/assets/img/celula.jpg')}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text style={styles.text}>Informe Abaixo o nome da sua Célula:</Text>
      <TextInput style={styles.input} placeholder="Nome da Célula" />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Main')}>
        <Text style={styles.buttonText}>Começar</Text>
      </TouchableOpacity>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.white,
    padding: 50,
  },
  image: {
    margin: 5,
    height: 200,
    width: 200,
  },
  input: {
    backgroundColor: Colors.white,
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
    width: 300,
    height: 70,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.white,
    elevation: 5,
    borderRadius: 10,
    marginTop: 50,
    marginBottom: 100,
  },
  buttonText: {
    color: Colors.white,
  },
  imagem: {
    alignSelf: 'center',
  },
  entryIcon: {
    color: Colors.white,
  },
});

export default Home;
