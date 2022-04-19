import React from 'react';
import { Button, Image, ImageBackground, StatusBar, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

export default class App extends React.Component {
  state = {
    isEnabled: false,
    resizeMode: 'cover',
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode={this.state.resizeMode} // Modo de redimensionamento da imagem
          source={{ uri: "https://picsum.photos/id/1062/300/200.jpg" }} // Imagem
          style={{ alignSelf: 'center', width: 200, height: 200 }} // Estilo
        />

        <ImageBackground
          resizeMode="cover"
          source={{ uri: "https://picsum.photos/id/100/1920/1080.jpg" }} // Imagem de fundo
          style={{
            padding: 32,
            marginVertical: 32,
            width: '100%',
            height: 300,
            justifyContent: 'center',
          }}>
          <Button
            onPress={_ => this.setState({ resizeMode: 'cover' })} // Função para mudar o resizeMode da imagem para cover
            title="Cover"
          />
          <Button
            onPress={_ => this.setState({ resizeMode: 'contain' })} // Função para mudar o resizeMode da imagem para contain
            title="Contain"
          />
          <Button
            onPress={_ => this.setState({ resizeMode: 'stretch' })} // Função para mudar o resizeMode da imagem para stretch
            title="Stretch"
          />
          <Button
            onPress={_ => this.setState({ resizeMode: 'repeat' })} // Função para mudar o resizeMode da imagem para repeat
            title="Repeat"
          />
          <Button
            onPress={_ => this.setState({ resizeMode: 'center' })} // Função para mudar o resizeMode da imagem para center
            title="Center"
          />
        </ImageBackground>

        <TouchableOpacity // TouchableOpacity é um componente que permite que o usuário toque na tela e a aplicação responda ao toque
          activeOpacity={0.1} // Nível de Opacidade
          onPress={_ => alert("Você clicou no botão... (Texto Botão)!!")} // Função que será executada quando o usuário tocar na tela
        >
          <Text>
            Texto Clicável
          </Text>
        </TouchableOpacity>

        <View
          style={{
            padding: 32,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Switch
            value={this.state.isEnabled} // Valor do Switch
            onValueChange={_ => this.setState({ isEnabled: !this.state.isEnabled })} // Função para mudar o valor do Switch
            thumbColor={this.state.isEnabled ? "red" : "green"} // Cor do Círculo do Switch
            trackColor={{ false: 'green', true: 'blue' }} // Cor do Fundo do Switch
          />
          <Text
            style={{
              fontSize: 16,
              marginLeft: 16,
            }}
          >
            {this.state.isEnabled ? 'Ligado' : 'Desligado'} {/* Texto que será exibido no Switch */}
          </Text>
        </View>

        <StatusBar />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});