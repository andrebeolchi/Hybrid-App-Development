import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import getImage from './utils/ImagesForWeather'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={getImage('Snow')} /* Função para buscar a Imagem com base no clima */
          style={styles.imageContainer} /* Estilo do Container */
          imageStyle={styles.image} /* Estilo da Imagem */
        >
          <View
            style={styles.detailsContainer} /* Estilo da View */
          >

            {/* Cidade */}
            <Text style={[styles.largeText, styles.textStyle]}>
              San Francisco
            </Text>

            {/* Clima */}
            <Text style={[styles.smallText, styles.textStyle]}>
              Light Cloud
            </Text>
            
            {/* Temperatura */}
            <Text style={[styles.largeText, styles.textStyle]}>
              24°
            </Text>

            <TextInput /* Input para digitar a temperatura */
              style={styles.input}  /* Estilos do input */
              placeholder="Search any city" /* Texto do placeholder */
              placeholderTextColor="white" /* Cor do placeholder */
            />
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({ /* Estilos */
  container: {
    flex: 1,

  },
  imageContainer: {
    flex: 1,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  textStyle: {
    textAlign: 'center',
    color: 'white',
  },
  largeText: {
    fontSize: 40
  },
  smallText: {
    fontSize: 22
  },
  input: {
    backgroundColor: '#666',
    color: 'white',
    fontSize: 30,
    width: 300,
    marginTop: 30,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center'
  }
})