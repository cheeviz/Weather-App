import React from "react";
import * as S from "./styles";
import { WeatherInfo } from "./components/WeatherInfo";

export const App = () => {
  return (
    <S.Container>
      <WeatherInfo />
    </S.Container>
  );
};
