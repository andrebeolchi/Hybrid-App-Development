import React from 'react'
import {
  ActivityIndicator, ImageBackground,
  StyleSheet,
  Text, View
} from 'react-native'
import SearchInput from './components/SearchInput'
import getImage from './utils/ImagesForWeather'


export default class App extends React.Component {
  state = {
    loading: false,
    error: false,
    location: "",
    weather: "",
    temperature: 0,
  }

  componentDidMount() {
    this.handleLocationUpdate("San Francisco")
  }

  handleLocationUpdate = async city => {
    if (!city) return

    this.setState({ loading: true },
      async () => {
        try {
          const { location, weather, temperature } = await getWeatherByCity(city)
          this.setState({
            loading: false,
            error: false,
            location,
            weather,
            temperature
          })
        } catch (error) {
          this.setState({ loading: false, error: true })
        }
      })
  }

  renderInfo() {
    const { location, weather, temperature } = this.state
    const image = getImage(weather)
    return (
      <View>
        {/* Cidade */}
        < Text style={[styles.largeText, styles.textStyle]}>
          {location}
        </Text>

        {/* Clima */}
        <Text style={[styles.smallText, styles.textStyle]}>
          {weather}
        </Text>

        {/* Temperatura */}
        <Text style={[styles.largeText, styles.textStyle]}>
          {`${Math.round(temperature)}°`}
        </Text>
      </View>
    )
  }

  renderContent() {
    const { error } = this.state

    return (
      <View>
        {error && ( /* Se o erro for verdadeiro, exibe o erro */
          <Text>
            Could not load weather data. Please try again.
          </Text>
        )}

        {!error &&
          this.renderInfo()  // Função para renderizar os dados, caso não tenha erro */
        }

        <SearchInput
          placeholder="Search any City" /* Texto do placeholder */
          onSubmit={this.handleLocationUpdate} /* Função para submeter o input */
        />

      </View>
    )
  }

  render() {
    const { loading, weather } = this.state
    return (
      <View style={styles.container}>
        <ImageBackground
          source={getImage(weather)} /* Função para buscar a Imagem com base no clima */
          style={styles.imageContainer} /* Estilo do Container */
          imageStyle={styles.image} /* Estilo da Imagem */
        >
          <View
            style={styles.detailsContainer} /* Estilo da View */
          >

            <ActivityIndicator
              animating={loading}
              size="large" /* Tamanho do ActivityIndicator */
              color="#ffffff" /* Cor do ActivityIndicator */
            />

            {
              !loading && this.renderContent()
            }
          </View>
        </ImageBackground >
      </View >
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
  }
})