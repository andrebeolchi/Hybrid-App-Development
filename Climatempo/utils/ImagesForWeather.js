const images = {
    'Clear': require('../assets/clear.png'),

    'Hail': require('../assets/hail.png'),

    'Heavy Cloud': require('../assets/heavy-cloud.png'),

    'Light Cloud': require('../assets/light-cloud.png'),

    'Heavy Rain': require('../assets/heavy-rain.png'),

    'Light Rain': require('../assets/light-rain.png'),

    'Showers': require('../assets/showers.png'),

    'Sleet': require('../assets/sleet.png'),

    'Snow': require('../assets/snow.png'),

    'Thunder': require('../assets/thunder.png'),
};

/**
 * Função para buscar a imagem com base no clima
 * @param {String} weather - Clima
 * @returns {Image} - Imagem do clima
 */
export default function getImage(weather) {
    return images[weather];
}