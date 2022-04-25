import React from 'react';
import { ActivityIndicator, ScrollView, StatusBar, View } from 'react-native';
import image from './assets/splash.png';

export default function App() {
  return (
    <View style={{
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    }}>
      <ActivityIndicator color="blue" size="large" /> {/* Animação de loading */}
      <ActivityIndicator color="red" size="small" /> {/* Animação de loading */}
      <ActivityIndicator color="green" size={100} /> {/* Animação de loading */}

      <ScrollView  // Componente que permite que o usuário rolar a tela
        horizontal={true} // Define se a ScrollView será horizontal ou vertical
      >
        <Image source={image} style={{ width: 100, height: 100, margin: 20 }} /> {/* Componente que exibe uma imagem */}
        <Image source={image} style={{ width: 100, height: 100, margin: 20 }} /> {/* Componente que exibe uma imagem */}
        <Image source={image} style={{ width: 100, height: 100, margin: 20 }} /> {/* Componente que exibe uma imagem */}
      </ScrollView>

      <ScrollView // Componente que permite que o usuário rolar a tela
        horizontal={false} // Define que a ScrollView será vertical
        onScrollBeginDrag={_ => console.log('Iniciou o Scroll')} // Função que será executada quando o usuário iniciar o scroll
        onScrollEndDrag={_ => console.log('Terminou o Scroll')} // Função que será executada quando o usuário terminar o scroll
      > 
        <Image source={image} style={{ width: 100, height: 100, margin: 20 }} /> {/* Componente que exibe uma imagem */}
        <Image source={image} style={{ width: 100, height: 100, margin: 20 }} /> {/* Componente que exibe uma imagem */}
        <Image source={image} style={{ width: 100, height: 100, margin: 20 }} /> {/* Componente que exibe uma imagem */}
      </ScrollView>

      <StatusBar /> {/* Componente que exibe o status do aplicativo */}
    </View>
  );
}