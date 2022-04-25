import React from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class App extends React.Component {
  state = {
    uri: "https://picsum.photos/id/1062/300/200.jpg"
  }

  // if image is 0, show : https://picsum.photos/id/1062/300/200.jpg
  // if image is 1, show : https://picsum.photos/id/100/300/200.jpg
  // if image is 2, show : https://picsum.photos/id/1042/300/200.jpg

  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode={this.state.resizeMode} // Modo de redimensionamento da imagem
          source={{uri: this.state.uri}} // Imagem
          style={{ alignSelf: 'center', width: 300, height: 200 }} // Estilo
        />
        
        <TouchableOpacity
          onPress={_ => this.setState({uri: "https://picsum.photos/id/1062/300/200.jpg"})} // Função para mudar a imagem para 0
          style={styles.button} // Estilo do botão
        >
          <Text
            style={styles.buttonText} // Estilo do texto do botão
          >
            0
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={_ => this.setState({uri: "https://picsum.photos/id/100/300/200.jpg"})} // Função para mudar a imagem para 1
          style={styles.button} // Estilo do botão
        >
          <Text
            style={styles.buttonText} // Estilo do texto do botão
          >
            1
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={_ => this.setState({uri: "https://picsum.photos/id/1042/300/200.jpg"})} // Função para mudar a imagem para 2
          style={styles.button} // Estilo do botão
        >
          <Text
            style={styles.buttonText} // Estilo do texto do botão
          >
            2
          </Text>
        </TouchableOpacity>

        <StatusBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  button: {
    borderRadius: 8,
    padding: 8,
    marginVertical: 32,
    width: '100%',
    backgroundColor: '#959595',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});