import React from "react";
import { Alert, Button, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [weight, setWeight] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [message, setMessage] = React.useState(null);

  React.useEffect(() => {
    if (message) {
      alert(message)
    }
  }, [message])


  const imcCalculator = (height, weight) => {
    try{
      const imc = weight / (height * height)
  
      switch (true) {
        case imc < 18.5:
          setMessage("Abaixo do peso")
          break;
        case imc >= 18.5 && imc < 25:
          setMessage("Peso ideal")
          break;
        case imc >= 25 && imc < 30:
          setMessage("Sobrepeso")
          break;
        case imc >= 30 && imc < 35:
          setMessage("Obesidade")
          break;
        default:
          setMessage("Erro ao calcular IMC!")
          break;
      }
    } catch (error) {
      setMessage("Erro ao calcular IMC!")
      Alert.alert("Erro", "Erro ao calcular IMC!")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Caluladora IMC!</Text>
      <Text style={styles.subtitle}>Defina os valores abaixo e clique em "Calcular" para descobrir sua categoria!</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        label="Peso (kg)"
        name="weight"
        onChangeText={setWeight}
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        label="Altura (m)"
        name="height"
        onChangeText={setHeight}
      />

      <Button
        style={styles.button}
        onPress={() => imcCalculator(height, weight)}
        color="#33f"
        title="Calcular"
      />

      {
        message && (
          <Text
            style={[styles.message, 
                    message === "Abaixo do peso" ? styles.yellow : 
                   (message === "Peso ideal" ? styles.green :
                   (message === "Sobrepeso" ? styles.orange : styles.red))]}
          >
            {message}
          </Text>

        )
      }
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    paddingTop: 64,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
  },
  button: {
    marginTop: 32,
  },
  message: {
    marginTop: 32,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 16,
  },
  yellow: {
    backgroundColor: "#ff6",
  },
  green: {
    backgroundColor: "#6f6",
  },
  orange: {
    backgroundColor: "#f93",
  },
  red: {
    backgroundColor: "#f66",
  },

});
