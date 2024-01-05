import { useState } from "react";
import * as S from "./styles";

export function Search({ handleSearch, error }) {
  const [inputValue, setInputValue] = useState("");

  const handleChangeInput = async (e) => {
    setInputValue(e.target.value);

    if (e.key === "Enter") {
      await handleSearch(inputValue);
      setInputValue("");
    }
  };

  return (
    <S.Container className="search-box">
      <S.Input
        type="text"
        placeholder="Procurar cidade"
        value={inputValue}
        onChange={handleChangeInput}
        onKeyDown={handleChangeInput}
      />

      {error ? <S.Paragrafo>Cidade Não Encontrada</S.Paragrafo> : null}
    </S.Container>
  );
}
