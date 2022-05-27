import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://www.metaweather.com.br/api/",
    headers: {
        "Content-Type": "application/json"
    }
});

export const getLocationByCity = async (city) => {
    const { data } = await axiosInstance.get(`location/search/?query=${city}`);
    return data[0]; // woeid
}

export const getWeatherByCity = async ({ city, woeid }) => {
    const { data } = await axiosInstance.get(`location/${woeid ?? getLocationByCity(city).woeid}`);
    const { title, consolidated_weather } = data;

    const { weather_state_name, the_temp } = consolidated_weather[0];

    return {
        location: title,
        weather: weather_state_name,
        temperature: the_temp
    };
}