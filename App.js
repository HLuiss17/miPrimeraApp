import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hola Luis</Text>
      <StatusBar style="auto" />
      <TextInput
        placeolder="Ingrese un numero"
        style={styles.imput}
      />
      <TextInput
        placeolder="Ingrese un numero"
        style={styles.imput}
      />
      <Button
        color="red"
        title="Resolver"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 50,
  },
  textInput:{
    borderWidth:1,
    borderColor:'gray',
    width:'80%',
    padding:10,
    marginTop:10,

  }
  

  // crear dos cajas de texto imputs donde se pueda pponer numero 1 y 2 
  // boton 
  //suma,resta,m,d
  // ir al navegador react native
  //https://reactnative.dev/docs/textinput
});
