import React, { useState } from "react";

const api = {
  key: "d06b3d3ca94e90c75eacc22346466f71",
  base: "https://api.openweathermap.org/data/2.5/",
};

export const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          /* console.log(result) */
        });
    }
  };

  const dataBuilder = (d) => {
    let meses = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];

    let dias = [
      "Domingo",
      "Segunda-Feira",
      "Terça-Feira",
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sábado",
    ];

    let dia = dias[d.getDay()];
    let date = d.getDate();
    let mes = meses[d.getMonth()];
    let ano = d.getFullYear();

    return `${dia}, ${date} de ${mes} de ${ano}`;
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <input
            className="search-bar"
            type="text"
            placeholder="Procurar..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
          {weather.cod === "404" ? (
            <span className="text-black font-bold text-2xl text-center p-2">
              Cidade Não Encontrada
            </span>
          ) : (
            ""
          )}
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dataBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°C</div>
              <div className="weather">{weather.weather[0].description}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
};
