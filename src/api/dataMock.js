  export const getCurrentLocationMock = [
    {
        name: "Madrid",
        local_names: {
            ku: "Madrîd",
            ca: "Madrid",
            he: "מדריד",
            kn: "ಮಾದ್ರಿದ್",
            ar: "وسط المدينة",
            cs: "Madrid",
            ko: "마드리드",
            yi: "מאדריד",
            th: "มาดริด",
            co: "Madridi",
            ba: "Мадрид",
            kk: "Мадрид",
            br: "Madrid",
            en: "Madrid",
            ur: "میڈرڈ",
            ab: "Мaдрид",
            el: "Μαδρίτη",
            oc: "Madrid",
            hy: "Մադրիդ",
            hi: "मद्रिद",
            lv: "Madride",
            de: "Madrid",
            sa: "मद्रिद्",
            am: "ማድሪድ",
            mn: "Мадрид",
            cv: "Мадрид",
            be: "Мадрыд",
            sl: "Madrid",
            bg: "Мадрид",
            no: "Madrid",
            sv: "Madrid",
            fr: "Madrid",
            ro: "Madrid",
            tg: "Мадрид",
            sr: "Мадрид",
            sq: "Madridi",
            es: "Centro",
            eo: "Madrido",
            ka: "მადრიდი",
            ja: "マドリード",
            uk: "Мадрид",
            lt: "Madridas",
            it: "Madrid",
            fa: "مادرید",
            bo: "མ་ད་རིད།",
            eu: "Madril",
            zh: "馬德里/马德里",
            ky: "Мадрид",
            bn: "মাদ্রিদ",
            mr: "माद्रिद",
            la: "Matritum",
            hu: "Madrid",
            sk: "Madrid",
            mk: "Мадрид",
            kv: "Мадрид",
            ga: "Maidrid",
            is: "Madrid",
            an: "Madrit",
            ru: "Мадрид",
            pl: "Madryt",
            os: "Мадрид",
            ta: "மத்ரித்",
            ml: "മാഡ്രിഡ്"
        },
        lat: 40.4167047,
        lon: -3.7035825,
        country: "ES",
        state: "Community of Madrid"
    }
]

export const weatherFetchMock = {
  coord: {
      lon: -6.4068,
      lat: 38.6847
  },
  weather: [
      {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d"
      }
  ],
  base: "stations",
  main: {
      temp: 31.96,
      feels_like: 30.28,
      temp_min: 31.96,
      temp_max: 31.96,
      pressure: 1016,
      humidity: 25,
      sea_level: 1016,
      grnd_level: 977
  },
  visibility: 10000,
  wind: {
      speed: 1.74,
      deg: 235,
      gust: 2.93
  },
  clouds: {
      all: 0
  },
  dt: 1719853579,
  sys: {
      type: 1,
      id: 6402,
      country: "ES",
      sunrise: 1719810280,
      sunset: 1719863647
  },
  timezone: 7200,
  id: 2521893,
  name: "Almendralejo",
  cod: 200
}

// export const forecastFetchMock = {
//   "cod": "200",
//   "message": 0,
//   "cnt": 40,
//   "list": [
//     {
//       "dt": 1720191600,
//       "main": {
//         "temp": 20.48,
//         "feels_like": 20.62,
//         "temp_min": 17.86,
//         "temp_max": 20.48,
//         "pressure": 1005,
//         "sea_level": 1005,
//         "grnd_level": 1001,
//         "humidity": 78,
//         "temp_kf": 2.62
//       },
//       "weather": [
//         {
//           "id": 500,
//           "main": "Rain",
//           "description": "light rain",
//           "icon": "10d"
//         }
//       ],
//       "clouds": {
//         "all": 40
//       },
//       "wind": {
//         "speed": 2.3,
//         "deg": 261,
//         "gust": 5.16
//       },
//       "visibility": 9043,
//       "pop": 1,
//       "rain": {
//         "3h": 1.86
//       },
//       "sys": {
//         "pod": "d"
//       },
//       "dt_txt": "2024-07-05 15:00:00"
//     },
//     {
//       "dt": 1720202400,
//       "main": {
//         "temp": 19.16,
//         "feels_like": 19.32,
//         "temp_min": 16.51,
//         "temp_max": 19.16,
//         "pressure": 1004,
//         "sea_level": 1004,
//         "grnd_level": 999,
//         "humidity": 84,
//         "temp_kf": 2.65
//       },
//       "weather": [
//         {
//           "id": 501,
//           "main": "Rain",
//           "description": "moderate rain",
//           "icon": "10d"
//         }
//       ],
//       "clouds": {
//         "all": 60
//       },
//       "wind": {
//         "speed": 5.25,
//         "deg": 222,
//         "gust": 12.85
//       },
//       "visibility": 4233,
//       "pop": 1,
//       "rain": {
//         "3h": 6.98
//       },
//       "sys": {
//         "pod": "d"
//       },
//       "dt_txt": "2024-07-05 18:00:00"
//     },
//     {
//       "dt": 1720213200,
//       "main": {
//         "temp": 17.69,
//         "feels_like": 17.86,
//         "temp_min": 16.29,
//         "temp_max": 17.69,
//         "pressure": 1003,
//         "sea_level": 1003,
//         "grnd_level": 998,
//         "humidity": 90,
//         "temp_kf": 1.4
//       },
//       "weather": [
//         {
//           "id": 501,
//           "main": "Rain",
//           "description": "moderate rain",
//           "icon": "10n"
//         }
//       ],
//       "clouds": {
//         "all": 80
//       },
//       "wind": {
//         "speed": 5.21,
//         "deg": 220,
//         "gust": 11.98
//       },
//       "visibility": 7903,
//       "pop": 1,
//       "rain": {
//         "3h": 9.74
//       },
//       "sys": {
//         "pod": "n"
//       },
//       "dt_txt": "2024-07-05 21:00:00"
//     },
//     {
//       "dt": 1720224000,
//       "main": {
//         "temp": 15.55,
//         "feels_like": 15.67,
//         "temp_min": 15.55,
//         "temp_max": 15.55,
//         "pressure": 999,
//         "sea_level": 999,
//         "grnd_level": 995,
//         "humidity": 96,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 501,
//           "main": "Rain",
//           "description": "moderate rain",
//           "icon": "10n"
//         }
//       ],
//       "clouds": {
//         "all": 100
//       },
//       "wind": {
//         "speed": 4.51,
//         "deg": 220,
//         "gust": 10.89
//       },
//       "visibility": 6804,
//       "pop": 1,
//       "rain": {
//         "3h": 5.91
//       },
//       "sys": {
//         "pod": "n"
//       },
//       "dt_txt": "2024-07-06 00:00:00"
//     },
//     {
//       "dt": 1720234800,
//       "main": {
//         "temp": 14.04,
//         "feels_like": 14.01,
//         "temp_min": 14.04,
//         "temp_max": 14.04,
//         "pressure": 998,
//         "sea_level": 998,
//         "grnd_level": 994,
//         "humidity": 96,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 500,
//           "main": "Rain",
//           "description": "light rain",
//           "icon": "10n"
//         }
//       ],
//       "clouds": {
//         "all": 100
//       },
//       "wind": {
//         "speed": 4.24,
//         "deg": 277,
//         "gust": 7.75
//       },
//       "visibility": 10000,
//       "pop": 1,
//       "rain": {
//         "3h": 2.81
//       },
//       "sys": {
//         "pod": "n"
//       },
//       "dt_txt": "2024-07-06 03:00:00"
//     },
//     {
//       "dt": 1720245600,
//       "main": {
//         "temp": 12.39,
//         "feels_like": 12.09,
//         "temp_min": 12.39,
//         "temp_max": 12.39,
//         "pressure": 1000,
//         "sea_level": 1000,
//         "grnd_level": 996,
//         "humidity": 92,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 500,
//           "main": "Rain",
//           "description": "light rain",
//           "icon": "10d"
//         }
//       ],
//       "clouds": {
//         "all": 99
//       },
//       "wind": {
//         "speed": 4.38,
//         "deg": 262,
//         "gust": 9.4
//       },
//       "visibility": 10000,
//       "pop": 1,
//       "rain": {
//         "3h": 0.15
//       },
//       "sys": {
//         "pod": "d"
//       },
//       "dt_txt": "2024-07-06 06:00:00"
//     },
//     {
//       "dt": 1720256400,
//       "main": {
//         "temp": 14.24,
//         "feels_like": 13.63,
//         "temp_min": 14.24,
//         "temp_max": 14.24,
//         "pressure": 1002,
//         "sea_level": 1002,
//         "grnd_level": 998,
//         "humidity": 73,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 500,
//           "main": "Rain",
//           "description": "light rain",
//           "icon": "10d"
//         }
//       ],
//       "clouds": {
//         "all": 47
//       },
//       "wind": {
//         "speed": 5.99,
//         "deg": 259,
//         "gust": 10.36
//       },
//       "visibility": 10000,
//       "pop": 1,
//       "rain": {
//         "3h": 0.94
//       },
//       "sys": {
//         "pod": "d"
//       },
//       "dt_txt": "2024-07-06 09:00:00"
//     },
//     {
//       "dt": 1720267200,
//       "main": {
//         "temp": 16.72,
//         "feels_like": 15.73,
//         "temp_min": 16.72,
//         "temp_max": 16.72,
//         "pressure": 1003,
//         "sea_level": 1003,
//         "grnd_level": 999,
//         "humidity": 49,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 500,
//           "main": "Rain",
//           "description": "light rain",
//           "icon": "10d"
//         }
//       ],
//       "clouds": {
//         "all": 34
//       },
//       "wind": {
//         "speed": 7.82,
//         "deg": 276,
//         "gust": 12.09
//       },
//       "visibility": 10000,
//       "pop": 1,
//       "rain": {
//         "3h": 0.24
//       },
//       "sys": {
//         "pod": "d"
//       },
//       "dt_txt": "2024-07-06 12:00:00"
//     },
//     {
//       "dt": 1720278000,
//       "main": {
//         "temp": 17.01,
//         "feels_like": 15.99,
//         "temp_min": 17.01,
//         "temp_max": 17.01,
//         "pressure": 1005,
//         "sea_level": 1005,
//         "grnd_level": 1001,
//         "humidity": 47,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 500,
//           "main": "Rain",
//           "description": "light rain",
//           "icon": "10d"
//         }
//       ],
//       "clouds": {
//         "all": 52
//       },
//       "wind": {
//         "speed": 7.3,
//         "deg": 274,
//         "gust": 11.6
//       },
//       "visibility": 10000,
//       "pop": 0.35,
//       "rain": {
//         "3h": 0.17
//       },
//       "sys": {
//         "pod": "d"
//       },
//       "dt_txt": "2024-07-06 15:00:00"
//     },
//     {
//       "dt": 1720288800,
//       "main": {
//         "temp": 16.16,
//         "feels_like": 15.27,
//         "temp_min": 16.16,
//         "temp_max": 16.16,
//         "pressure": 1007,
//         "sea_level": 1007,
//         "grnd_level": 1003,
//         "humidity": 55,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 500,
//           "main": "Rain",
//           "description": "light rain",
//           "icon": "10d"
//         }
//       ],
//       "clouds": {
//         "all": 62
//       },
//       "wind": {
//         "speed": 4.61,
//         "deg": 276,
//         "gust": 9.2
//       },
//       "visibility": 10000,
//       "pop": 0.21,
//       "rain": {
//         "3h": 0.19
//       },
//       "sys": {
//         "pod": "d"
//       },
//       "dt_txt": "2024-07-06 18:00:00"
//     },
//     {
//       "dt": 1720299600,
//       "main": {
//         "temp": 13.38,
//         "feels_like": 12.52,
//         "temp_min": 13.38,
//         "temp_max": 13.38,
//         "pressure": 1009,
//         "sea_level": 1009,
//         "grnd_level": 1005,
//         "humidity": 67,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 801,
//           "main": "Clouds",
//           "description": "few clouds",
//           "icon": "02n"
//         }
//       ],
//       "clouds": {
//         "all": 13
//       },
//       "wind": {
//         "speed": 3.61,
//         "deg": 243,
//         "gust": 8.7
//       },
//       "visibility": 10000,
//       "pop": 0,
//       "sys": {
//         "pod": "n"
//       },
//       "dt_txt": "2024-07-06 21:00:00"
//     },
//     {
//       "dt": 1720310400,
//       "main": {
//         "temp": 11.81,
//         "feels_like": 11.08,
//         "temp_min": 11.81,
//         "temp_max": 11.81,
//         "pressure": 1010,
//         "sea_level": 1010,
//         "grnd_level": 1006,
//         "humidity": 78,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 800,
//           "main": "Clear",
//           "description": "clear sky",
//           "icon": "01n"
//         }
//       ],
//       "clouds": {
//         "all": 8
//       },
//       "wind": {
//         "speed": 3.3,
//         "deg": 233,
//         "gust": 9.75
//       },
//       "visibility": 10000,
//       "pop": 0,
//       "sys": {
//         "pod": "n"
//       },
//       "dt_txt": "2024-07-07 00:00:00"
//     },
//     {
//       "dt": 1720321200,
//       "main": {
//         "temp": 11.11,
//         "feels_like": 10.5,
//         "temp_min": 11.11,
//         "temp_max": 11.11,
//         "pressure": 1010,
//         "sea_level": 1010,
//         "grnd_level": 1006,
//         "humidity": 85,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 803,
//           "main": "Clouds",
//           "description": "broken clouds",
//           "icon": "04n"
//         }
//       ],
//       "clouds": {
//         "all": 69
//       },
//       "wind": {
//         "speed": 3.44,
//         "deg": 225,
//         "gust": 9.71
//       },
//       "visibility": 10000,
//       "pop": 0,
//       "sys": {
//         "pod": "n"
//       },
//       "dt_txt": "2024-07-07 03:00:00"
//     },
//     {
//       "dt": 1720332000,
//       "main": {
//         "temp": 12.57,
//         "feels_like": 11.95,
//         "temp_min": 12.57,
//         "temp_max": 12.57,
//         "pressure": 1011,
//         "sea_level": 1011,
//         "grnd_level": 1006,
//         "humidity": 79,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 803,
//           "main": "Clouds",
//           "description": "broken clouds",
//           "icon": "04d"
//         }
//       ],
//       "clouds": {
//         "all": 84
//       },
//       "wind": {
//         "speed": 3.78,
//         "deg": 229,
//         "gust": 9.66
//       },
//       "visibility": 10000,
//       "pop": 0,
//       "sys": {
//         "pod": "d"
//       },
//       "dt_txt": "2024-07-07 06:00:00"
//     },
//     {
//       "dt": 1720342800,
//       "main": {
//         "temp": 16.65,
//         "feels_like": 15.89,
//         "temp_min": 16.65,
//         "temp_max": 16.65,
//         "pressure": 1011,
//         "sea_level": 1011,
//         "grnd_level": 1006,
//         "humidity": 58,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 804,
//           "main": "Clouds",
//           "description": "overcast clouds",
//           "icon": "04d"
//         }
//       ],
//       "clouds": {
//         "all": 86
//       },
//       "wind": {
//         "speed": 5.01,
//         "deg": 236,
//         "gust": 7.44
//       },
//       "visibility": 10000,
//       "pop": 0,
//       "sys": {
//         "pod": "d"
//       },
//       "dt_txt": "2024-07-07 09:00:00"
//     },
//     {
//       "dt": 1720353600,
//       "main": {
//         "temp": 19.53,
//         "feels_like": 18.71,
//         "temp_min": 19.53,
//         "temp_max": 19.53,
//         "pressure": 1010,
//         "sea_level": 1010,
//         "grnd_level": 1006,
//         "humidity": 45,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 804,
//           "main": "Clouds",
//           "description": "overcast clouds",
//           "icon": "04d"
//         }
//       ],
//       "clouds": {
//         "all": 91
//       },
//       "wind": {
//         "speed": 5.3,
//         "deg": 225,
//         "gust": 7.65
//       },
//       "visibility": 10000,
//       "pop": 0,
//       "sys": {
//         "pod": "d"
//       },
//       "dt_txt": "2024-07-07 12:00:00"
//     },
//     {
//       "dt": 1720364400,
//       "main": {
//         "temp": 14.02,
//         "feels_like": 13.67,
//         "temp_min": 14.02,
//         "temp_max": 14.02,
//         "pressure": 1012,
//         "sea_level": 1012,
//         "grnd_level": 1008,
//         "humidity": 84,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 500,
//           "main": "Rain",
//           "description": "light rain",
//           "icon": "10d"
//         }
//       ],
//       "clouds": {
//         "all": 100
//       },
//       "wind": {
//         "speed": 3.85,
//         "deg": 222,
//         "gust": 8.78
//       },
//       "visibility": 10000,
//       "pop": 1,
//       "rain": {
//         "3h": 0.94
//       },
//       "sys": {
//         "pod": "d"
//       },
//       "dt_txt": "2024-07-07 15:00:00"
//     },
//     {
//       "dt": 1720375200,
//       "main": {
//         "temp": 15.66,
//         "feels_like": 15.14,
//         "temp_min": 15.66,
//         "temp_max": 15.66,
//         "pressure": 1012,
//         "sea_level": 1012,
//         "grnd_level": 1008,
//         "humidity": 71,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 500,
//           "main": "Rain",
//           "description": "light rain",
//           "icon": "10d"
//         }
//       ],
//       "clouds": {
//         "all": 90
//       },
//       "wind": {
//         "speed": 3.86,
//         "deg": 220,
//         "gust": 6.73
//       },
//       "visibility": 10000,
//       "pop": 1,
//       "rain": {
//         "3h": 0.1
//       },
//       "sys": {
//         "pod": "d"
//       },
//       "dt_txt": "2024-07-07 18:00:00"
//     },
//     {
//       "dt": 1720386000,
//       "main": {
//         "temp": 13.84,
//         "feels_like": 13.39,
//         "temp_min": 13.84,
//         "temp_max": 13.84,
//         "pressure": 1013,
//         "sea_level": 1013,
//         "grnd_level": 1008,
//         "humidity": 81,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 803,
//           "main": "Clouds",
//           "description": "broken clouds",
//           "icon": "04n"
//         }
//       ],
//       "clouds": {
//         "all": 64
//       },
//       "wind": {
//         "speed": 3.22,
//         "deg": 210,
//         "gust": 8.37
//       },
//       "visibility": 10000,
//       "pop": 0,
//       "sys": {
//         "pod": "n"
//       },
//       "dt_txt": "2024-07-07 21:00:00"
//     },
//     {
//       "dt": 1720396800,
//       "main": {
//         "temp": 12.79,
//         "feels_like": 12.34,
//         "temp_min": 12.79,
//         "temp_max": 12.79,
//         "pressure": 1014,
//         "sea_level": 1014,
//         "grnd_level": 1009,
//         "humidity": 85,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 803,
//           "main": "Clouds",
//           "description": "broken clouds",
//           "icon": "04n"
//         }
//       ],
//       "clouds": {
//         "all": 82
//       },
//       "wind": {
//         "speed": 2.59,
//         "deg": 218,
//         "gust": 7.49
//       },
//       "visibility": 10000,
//       "pop": 0,
//       "sys": {
//         "pod": "n"
//       },
//       "dt_txt": "2024-07-08 00:00:00"
//     },
//     {
//       "dt": 1720407600,
//       "main": {
//         "temp": 11.87,
//         "feels_like": 11.44,
//         "temp_min": 11.87,
//         "temp_max": 11.87,
//         "pressure": 1014,
//         "sea_level": 1014,
//         "grnd_level": 1009,
//         "humidity": 89,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 804,
//           "main": "Clouds",
//           "description": "overcast clouds",
//           "icon": "04n"
//         }
//       ],
//       "clouds": {
//         "all": 86
//       },
//       "wind": {
//         "speed": 1.58,
//         "deg": 209,
//         "gust": 4.6
//       },
//       "visibility": 10000,
//       "pop": 0,
//       "sys": {
//         "pod": "n"
//       },
//       "dt_txt": "2024-07-08 03:00:00"
//     },
//     {
//       "dt": 1720418400,
//       "main": {
//         "temp": 13.16,
//         "feels_like": 12.78,
//         "temp_min": 13.16,
//         "temp_max": 13.16,
//         "pressure": 1015,
//         "sea_level": 1015,
//         "grnd_level": 1010,
//         "humidity": 86,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 804,
//           "main": "Clouds",
//           "description": "overcast clouds",
//           "icon": "04d"
//         }
//       ],
//       "clouds": {
//         "all": 93
//       },
//       "wind": {
//         "speed": 1.17,
//         "deg": 194,
//         "gust": 3.73
//       },
//       "visibility": 10000,
//       "pop": 0,
//       "sys": {
//         "pod": "d"
//       },
//       "dt_txt": "2024-07-08 06:00:00"
//     },
//     {
//       "dt": 1720429200,
//       "main": {
//         "temp": 13.61,
//         "feels_like": 13.38,
//         "temp_min": 13.61,
//         "temp_max": 13.61,
//         "pressure": 1015,
//         "sea_level": 1015,
//         "grnd_level": 1011,
//         "humidity": 90,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 500,
//           "main": "Rain",
//           "description": "light rain",
//           "icon": "10d"
//         }
//       ],
//       "clouds": {
//         "all": 100
//       },
//       "wind": {
//         "speed": 0.98,
//         "deg": 169,
//         "gust": 3.27
//       },
//       "visibility": 10000,
//       "pop": 0.2,
//       "rain": {
//         "3h": 0.17
//       },
//       "sys": {
//         "pod": "d"
//       },
//       "dt_txt": "2024-07-08 09:00:00"
//     },
//     {
//       "dt": 1720440000,
//       "main": {
//         "temp": 16.64,
//         "feels_like": 16.24,
//         "temp_min": 16.64,
//         "temp_max": 16.64,
//         "pressure": 1016,
//         "sea_level": 1016,
//         "grnd_level": 1011,
//         "humidity": 72,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 804,
//           "main": "Clouds",
//           "description": "overcast clouds",
//           "icon": "04d"
//         }
//       ],
//       "clouds": {
//         "all": 100
//       },
//       "wind": {
//         "speed": 2.07,
//         "deg": 174,
//         "gust": 3.64
//       },
//       "visibility": 10000,
//       "pop": 0,
//       "sys": {
//         "pod": "d"
//       },
//       "dt_txt": "2024-07-08 12:00:00"
//     },
//     {
//       "dt": 1720450800,
//       "main": {
//         "temp": 18.98,
//         "feels_like": 18.5,
//         "temp_min": 18.98,
//         "temp_max": 18.98,
//         "pressure": 1015,
//         "sea_level": 1015,
//         "grnd_level": 1011,
//         "humidity": 60,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 500,
//           "main": "Rain",
//           "description": "light rain",
//           "icon": "10d"
//         }
//       ],
//       "clouds": {
//         "all": 100
//       },
//       "wind": {
//         "speed": 2.49,
//         "deg": 175,
//         "gust": 4.06
//       },
//       "visibility": 10000,
//       "pop": 0.2,
//       "rain": {
//         "3h": 0.13
//       },
//       "sys": {
//         "pod": "d"
//       },
//       "dt_txt": "2024-07-08 15:00:00"
//     },
//     {
//       "dt": 1720461600,
//       "main": {
//         "temp": 17.6,
//         "feels_like": 17.11,
//         "temp_min": 17.6,
//         "temp_max": 17.6,
//         "pressure": 1015,
//         "sea_level": 1015,
//         "grnd_level": 1011,
//         "humidity": 65,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 804,
//           "main": "Clouds",
//           "description": "overcast clouds",
//           "icon": "04d"
//         }
//       ],
//       "clouds": {
//         "all": 100
//       },
//       "wind": {
//         "speed": 3.56,
//         "deg": 182,
//         "gust": 4.59
//       },
//       "visibility": 10000,
//       "pop": 0,
//       "sys": {
//         "pod": "d"
//       },
//       "dt_txt": "2024-07-08 18:00:00"
//     },
//     {
//       "dt": 1720472400,
//       "main": {
//         "temp": 14.76,
//         "feels_like": 14.28,
//         "temp_min": 14.76,
//         "temp_max": 14.76,
//         "pressure": 1016,
//         "sea_level": 1016,
//         "grnd_level": 1012,
//         "humidity": 76,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 804,
//           "main": "Clouds",
//           "description": "overcast clouds",
//           "icon": "04n"
//         }
//       ],
//       "clouds": {
//         "all": 100
//       },
//       "wind": {
//         "speed": 2.05,
//         "deg": 168,
//         "gust": 4.39
//       },
//       "visibility": 10000,
//       "pop": 0,
//       "sys": {
//         "pod": "n"
//       },
//       "dt_txt": "2024-07-08 21:00:00"
//     },
//     {
//       "dt": 1720483200,
//       "main": {
//         "temp": 14.36,
//         "feels_like": 14.07,
//         "temp_min": 14.36,
//         "temp_max": 14.36,
//         "pressure": 1016,
//         "sea_level": 1016,
//         "grnd_level": 1012,
//         "humidity": 85,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 804,
//           "main": "Clouds",
//           "description": "overcast clouds",
//           "icon": "04n"
//         }
//       ],
//       "clouds": {
//         "all": 100
//       },
//       "wind": {
//         "speed": 1.62,
//         "deg": 118,
//         "gust": 3.23
//       },
//       "visibility": 10000,
//       "pop": 0,
//       "sys": {
//         "pod": "n"
//       },
//       "dt_txt": "2024-07-09 00:00:00"
//     },
//     {
//       "dt": 1720494000,
//       "main": {
//         "temp": 14.32,
//         "feels_like": 14.16,
//         "temp_min": 14.32,
//         "temp_max": 14.32,
//         "pressure": 1015,
//         "sea_level": 1015,
//         "grnd_level": 1011,
//         "humidity": 90,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 804,
//           "main": "Clouds",
//           "description": "overcast clouds",
//           "icon": "04n"
//         }
//       ],
//       "clouds": {
//         "all": 100
//       },
//       "wind": {
//         "speed": 1.89,
//         "deg": 107,
//         "gust": 5.09
//       },
//       "visibility": 10000,
//       "pop": 0,
//       "sys": {
//         "pod": "n"
//       },
//       "dt_txt": "2024-07-09 03:00:00"
//     },
//     {
//       "dt": 1720504800,
//       "main": {
//         "temp": 14.64,
//         "feels_like": 14.46,
//         "temp_min": 14.64,
//         "temp_max": 14.64,
//         "pressure": 1016,
//         "sea_level": 1016,
//         "grnd_level": 1012,
//         "humidity": 88,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 804,
//           "main": "Clouds",
//           "description": "overcast clouds",
//           "icon": "04d"
//         }
//       ],
//       "clouds": {
//         "all": 99
//       },
//       "wind": {
//         "speed": 2.22,
//         "deg": 106,
//         "gust": 4.17
//       },
//       "visibility": 10000,
//       "pop": 0,
//       "sys": {
//         "pod": "d"
//       },
//       "dt_txt": "2024-07-09 06:00:00"
//     },
//     {
//       "dt": 1720515600,
//       "main": {
//         "temp": 17.25,
//         "feels_like": 17.04,
//         "temp_min": 17.25,
//         "temp_max": 17.25,
//         "pressure": 1016,
//         "sea_level": 1016,
//         "grnd_level": 1011,
//         "humidity": 77,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 804,
//           "main": "Clouds",
//           "description": "overcast clouds",
//           "icon": "04d"
//         }
//       ],
//       "clouds": {
//         "all": 97
//       },
//       "wind": {
//         "speed": 2.55,
//         "deg": 106,
//         "gust": 3.15
//       },
//       "visibility": 10000,
//       "pop": 0,
//       "sys": {
//         "pod": "d"
//       },
//       "dt_txt": "2024-07-09 09:00:00"
//     },
//     {
//       "dt": 1720526400,
//       "main": {
//         "temp": 20.05,
//         "feels_like": 19.86,
//         "temp_min": 20.05,
//         "temp_max": 20.05,
//         "pressure": 1015,
//         "sea_level": 1015,
//         "grnd_level": 1011,
//         "humidity": 67,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 804,
//           "main": "Clouds",
//           "description": "overcast clouds",
//           "icon": "04d"
//         }
//       ],
//       "clouds": {
//         "all": 98
//       },
//       "wind": {
//         "speed": 3.53,
//         "deg": 106,
//         "gust": 4.71
//       },
//       "visibility": 10000,
//       "pop": 0,
//       "sys": {
//         "pod": "d"
//       },
//       "dt_txt": "2024-07-09 12:00:00"
//     },
//     {
//       "dt": 1720537200,
//       "main": {
//         "temp": 16.3,
//         "feels_like": 16.39,
//         "temp_min": 16.3,
//         "temp_max": 16.3,
//         "pressure": 1014,
//         "sea_level": 1014,
//         "grnd_level": 1010,
//         "humidity": 92,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 500,
//           "main": "Rain",
//           "description": "light rain",
//           "icon": "10d"
//         }
//       ],
//       "clouds": {
//         "all": 100
//       },
//       "wind": {
//         "speed": 3.24,
//         "deg": 86,
//         "gust": 7.64
//       },
//       "visibility": 10000,
//       "pop": 1,
//       "rain": {
//         "3h": 0.81
//       },
//       "sys": {
//         "pod": "d"
//       },
//       "dt_txt": "2024-07-09 15:00:00"
//     },
//     {
//       "dt": 1720548000,
//       "main": {
//         "temp": 16.07,
//         "feels_like": 16.27,
//         "temp_min": 16.07,
//         "temp_max": 16.07,
//         "pressure": 1014,
//         "sea_level": 1014,
//         "grnd_level": 1009,
//         "humidity": 97,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 500,
//           "main": "Rain",
//           "description": "light rain",
//           "icon": "10d"
//         }
//       ],
//       "clouds": {
//         "all": 100
//       },
//       "wind": {
//         "speed": 3.2,
//         "deg": 77,
//         "gust": 7.36
//       },
//       "visibility": 10000,
//       "pop": 1,
//       "rain": {
//         "3h": 1.41
//       },
//       "sys": {
//         "pod": "d"
//       },
//       "dt_txt": "2024-07-09 18:00:00"
//     },
//     {
//       "dt": 1720558800,
//       "main": {
//         "temp": 16.35,
//         "feels_like": 16.63,
//         "temp_min": 16.35,
//         "temp_max": 16.35,
//         "pressure": 1012,
//         "sea_level": 1012,
//         "grnd_level": 1008,
//         "humidity": 99,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 500,
//           "main": "Rain",
//           "description": "light rain",
//           "icon": "10n"
//         }
//       ],
//       "clouds": {
//         "all": 100
//       },
//       "wind": {
//         "speed": 3.09,
//         "deg": 83,
//         "gust": 7.57
//       },
//       "visibility": 311,
//       "pop": 1,
//       "rain": {
//         "3h": 2.08
//       },
//       "sys": {
//         "pod": "n"
//       },
//       "dt_txt": "2024-07-09 21:00:00"
//     },
//     {
//       "dt": 1720569600,
//       "main": {
//         "temp": 16.64,
//         "feels_like": 16.94,
//         "temp_min": 16.64,
//         "temp_max": 16.64,
//         "pressure": 1011,
//         "sea_level": 1011,
//         "grnd_level": 1007,
//         "humidity": 99,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 501,
//           "main": "Rain",
//           "description": "moderate rain",
//           "icon": "10n"
//         }
//       ],
//       "clouds": {
//         "all": 100
//       },
//       "wind": {
//         "speed": 2.76,
//         "deg": 94,
//         "gust": 8.31
//       },
//       "visibility": 321,
//       "pop": 1,
//       "rain": {
//         "3h": 8.95
//       },
//       "sys": {
//         "pod": "n"
//       },
//       "dt_txt": "2024-07-10 00:00:00"
//     },
//     {
//       "dt": 1720580400,
//       "main": {
//         "temp": 16.86,
//         "feels_like": 17.19,
//         "temp_min": 16.86,
//         "temp_max": 16.86,
//         "pressure": 1009,
//         "sea_level": 1009,
//         "grnd_level": 1005,
//         "humidity": 99,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 501,
//           "main": "Rain",
//           "description": "moderate rain",
//           "icon": "10n"
//         }
//       ],
//       "clouds": {
//         "all": 100
//       },
//       "wind": {
//         "speed": 2.53,
//         "deg": 160,
//         "gust": 8.81
//       },
//       "visibility": 1091,
//       "pop": 1,
//       "rain": {
//         "3h": 6.06
//       },
//       "sys": {
//         "pod": "n"
//       },
//       "dt_txt": "2024-07-10 03:00:00"
//     },
//     {
//       "dt": 1720591200,
//       "main": {
//         "temp": 17.13,
//         "feels_like": 17.38,
//         "temp_min": 17.13,
//         "temp_max": 17.13,
//         "pressure": 1010,
//         "sea_level": 1010,
//         "grnd_level": 1005,
//         "humidity": 95,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 500,
//           "main": "Rain",
//           "description": "light rain",
//           "icon": "10d"
//         }
//       ],
//       "clouds": {
//         "all": 100
//       },
//       "wind": {
//         "speed": 3.93,
//         "deg": 210,
//         "gust": 8.61
//       },
//       "visibility": 10000,
//       "pop": 1,
//       "rain": {
//         "3h": 0.13
//       },
//       "sys": {
//         "pod": "d"
//       },
//       "dt_txt": "2024-07-10 06:00:00"
//     },
//     {
//       "dt": 1720602000,
//       "main": {
//         "temp": 19.07,
//         "feels_like": 19.04,
//         "temp_min": 19.07,
//         "temp_max": 19.07,
//         "pressure": 1010,
//         "sea_level": 1010,
//         "grnd_level": 1006,
//         "humidity": 77,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 500,
//           "main": "Rain",
//           "description": "light rain",
//           "icon": "10d"
//         }
//       ],
//       "clouds": {
//         "all": 52
//       },
//       "wind": {
//         "speed": 5.2,
//         "deg": 194,
//         "gust": 7.38
//       },
//       "visibility": 10000,
//       "pop": 0.2,
//       "rain": {
//         "3h": 0.12
//       },
//       "sys": {
//         "pod": "d"
//       },
//       "dt_txt": "2024-07-10 09:00:00"
//     },
//     {
//       "dt": 1720612800,
//       "main": {
//         "temp": 17.05,
//         "feels_like": 17.16,
//         "temp_min": 17.05,
//         "temp_max": 17.05,
//         "pressure": 1010,
//         "sea_level": 1010,
//         "grnd_level": 1006,
//         "humidity": 90,
//         "temp_kf": 0
//       },
//       "weather": [
//         {
//           "id": 803,
//           "main": "Clouds",
//           "description": "broken clouds",
//           "icon": "04d"
//         }
//       ],
//       "clouds": {
//         "all": 74
//       },
//       "wind": {
//         "speed": 3.63,
//         "deg": 186,
//         "gust": 8.48
//       },
//       "visibility": 10000,
//       "pop": 0,
//       "sys": {
//         "pod": "d"
//       },
//       "dt_txt": "2024-07-10 12:00:00"
//     }
//   ],
//   "city": {
//     "id": 2643743,
//     "name": "London",
//     "coord": {
//       "lat": 51.5073,
//       "lon": -0.1276
//     },
//     "country": "GB",
//     "population": 1000000,
//     "timezone": 3600,
//     "sunrise": 1720151450,
//     "sunset": 1720210746
//   }
// }