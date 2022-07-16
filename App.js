import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';


export default function App() {
  //la logica del codigo
  //definicion de REAC hookS de estado
  const{numero1,setNumero1}=useState("");
  const{numero2,setNumero2}=useState("");
  const{resultado,setResultado}=useState("");
  //funcion tipo flecha
  const sumar=()=>{
  resultado=numero1+numero2;
   Alert.alert('la suma de num1 y num2 es'+resultado);
  };
  //Return es la vista
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hola Luis</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        onChangeText={(value)=>setNumero1(value)}
        value={numero1}
        placeholder="Ingrese el primer valor"
        keyboardType="numeric"
      />
      <TextInput
         style={styles.input}
         onChangeText={(value)=>setNumero2(value)}
         value={numero2}
         placeholder="Ingrese el segundo valor"
         keyboardType="numeric"
      />
      <Button
      color="blue"
        title="Sumar"
        onPress={sumar}
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
  input:{
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
  //deber
  //SUMA RESTA MULTIPLICACION Y DIVICION
});
