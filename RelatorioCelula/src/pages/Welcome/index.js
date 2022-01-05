import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Colors from '../../styles/Colors';
import WelcomeMessage from './WelcomeMessage';
import {saveEntry} from '../../services/Entries';

import Logo from '../../assets/img/report.png';
import WelcomeNameInput from './WelcomeNameInput';
import ActionFooter, {
  ActionPrimaryButton,
} from '../../components/Core/ActionFooter';

const Welcome = ({navigation}) => {
  const [nameCelula, setNameCelula] = useState('');

  const onSavePress = () => {
    saveEntry({
      nameCelula: nameCelula,
      isInit: true,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={Logo} />
      </View>
      <WelcomeMessage />
      <WelcomeNameInput value={nameCelula} onChange={setNameCelula} />
      <ActionFooter>
        <ActionPrimaryButton title="Continuar" onPress={onSavePress} />
      </ActionFooter>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 10,
  },
  logo: {
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Welcome;
