export const weatherOptions = [
  {
    day: true,
    condition: "clear",
    url: new URL("../assets/day/clear.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "clouds",
    url: new URL("../assets/day/cloudy-day.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "fog",
    url: new URL("../assets/day/fog-day.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "rain",
    url: new URL("../assets/day/rain-day.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "snow",
    url: new URL("../assets/day/snow-day.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "storm",
    url: new URL("../assets/day/storm-day.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "clear",
    url: new URL("../assets/night/clear-night.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "clouds",
    url: new URL("../assets/night/cloudy-night.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "fog",
    url: new URL("../assets/night/fog-night.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "rain",
    url: new URL("../assets/night/rain-night.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "snow",
    url: new URL("../assets/night/snow-night.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "storm",
    url: new URL("../assets/night/storm-night.svg", import.meta.url).href,
  },
];

export const defaultWeatherOptions = {
  day: {
    day: true,
    condition: "default",
    url: new URL("../assets/day/default-day.svg", import.meta.url).href,
  },
  night: {
    day: false,
    condition: "default",
    url: new URL("../assets/night/default-night.svg", import.meta.url).href,
  },
};

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weatherType: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weatherType: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weatherType: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weatherType: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weatherType: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Coat",
    weatherType: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const coordinates = {
  latitude: 39.89431,
  longitude: -85.922661,
};

export const APIkey = "af6a02b9c0781a3adcdfa8e1cbed2580";
