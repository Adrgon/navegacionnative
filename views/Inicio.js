import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const Inicio = ({navigation}) => {

    const informacion = {
        nombre: 'Iphone',
        precio: 1000
      };

  const visutarNosotros = () => {
    navigation.navigate('Nosotros', informacion);
  };

  return (
    <View style={styles.contenedor}>
      <Text>Inicio</Text>
      <Button title="Ir a Nosotros" onPress={() => visutarNosotros()} />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Inicio;
