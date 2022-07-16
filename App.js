import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';


export default function App() {
  //la logica del codigo
  //definicion de REAC hookS de estado
  const[numero1,setNumero1]=useState("");
  const[numero2,setNumero2]=useState("");

  //funcion tipo flecha
  //--------------RESTAR-------------------------------
  const sumar=()=>{
  let resultado=parseFloat(numero1)+parseFloat(numero2);
  if(numero1>0 && numero2>0){
    Alert.alert("La suma de Numero1: "+numero1+" "+" y numero2: "+" "+numero2+"  "+"es igual a: "+resultado)  
  }else{
    Alert.alert("Ingresa los valores positivos");
  };
  }
  //--------------RESTAR-------------------------------
  const restar=()=>{
    let resta=parseFloat(numero1)-parseFloat(numero2);
    if(numero1>0 && numero2>0){
      Alert.alert("La resta de Numero1: "+numero1+" "+" y numero2: "+" "+numero2+"  "+"es igual a: "+resta)
    }else{
      Alert.alert("Ingresa los valores positivos");
    };
    }
    //--------------MULTIPLICAR-------------------------------
    const multiplicar=()=>{
      let mult=parseFloat(numero1)*parseFloat(numero2);
      if(numero1>0 && numero2>0){
        Alert.alert("La multiplicaciòn de Numero1: "+numero1+" "+" y numero2: "+" "+numero2+"  "+"es igual a: "+mult)
      }else{
        Alert.alert("Ingresa los valores positivos");
      };
      } 
      //--------------DIVIDIR-------------------------------
    const dividir=()=>{
      let div=parseFloat(numero1)/parseFloat(numero2);
      if(numero1>0 && numero2>0){
        Alert.alert("La diviciòn de Numero1: "+numero1+" "+" y numero2: "+" "+numero2+"  "+"es igual a: "+div)
      }else{
        Alert.alert("Ingresa los valores positivos");
      };
      } 
  
  //Return es la vista
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Operaciones Matematicas</Text>
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
      <Button
      color="red"
        title="Resta"
        onPress={restar}
      />
      <Button
      color="green"
        title="Multiplicar"
        onPress={multiplicar}
      />
      <Button
      color="black"
        title="Dividir"
        onPress={dividir}
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
