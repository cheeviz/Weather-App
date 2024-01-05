import { useState } from "react";
import { Search } from "../Search";

import * as S from "./styles";
import { dataBuilder } from "../../Utils/Databuilder";

export function WeatherInfo() {
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState(false);

  const handleSearch = async (searchQuery) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&units=metric&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );

      if (response.status === 404 || response.statusText === "Not Found") {
        throw new Error("Not Found");
      }

      const result = await response.json();
      setWeather(result);
      setError(false);
    } catch (err) {
      console.error(err.message)
      if (err.message === "Not Found") {
        setWeather([]);
        setError(true);
      }
    }
  };

  return (
    <S.Container>
      <S.Box>
        <Search handleSearch={handleSearch} error={error} />
        {typeof weather.main != "undefined" ? (
          <S.WeatherInfoContainer>
            <S.WeatherTitleBox>
              <S.CidadeTitle>
                {weather.name}, {weather.sys.country}
              </S.CidadeTitle>
              <S.DateNow>{dataBuilder(new Date())}</S.DateNow>
            </S.WeatherTitleBox>

            <S.WeatherClimate>
              <S.WeatherInfoBox>
                <S.Icon
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt="Imagem"
                />
                <S.Paragrafo>{Math.floor(weather.main.temp)}°C</S.Paragrafo>
              </S.WeatherInfoBox>

              <S.WeatherInformation>
                <S.WeatherInformationBox>
                  <S.Span>Umidade</S.Span>
                  <S.Paragrafo>{weather.main.humidity}%</S.Paragrafo>
                </S.WeatherInformationBox>
                <S.WeatherInformationBox>
                  <S.Span>Visibilidade</S.Span>
                  <S.Paragrafo>{weather.visibility / 1000}km</S.Paragrafo>
                </S.WeatherInformationBox>
              </S.WeatherInformation>
            </S.WeatherClimate>
          </S.WeatherInfoContainer>
        ) : null}
      </S.Box>
    </S.Container>
  );
}
