import React from "react";
import * as S from "./PatchBay.styles";
import { savePatch } from "../../audio";
import { PatchContext } from "../../contexts/PatchContext";

const defaultPatch = {
  oscType: "sine",
  oscFreq: 440,
  lfoFreq: 0,
  lfoAmp: 0,
  lfoType: "sine",
  delayFeedback: 0,
  delayMix: 0,
  delayTime: 1,
  outputVol: -12,
};

const PatchBay = () => {
  const previousPatch = React.useRef("1");
  const [select, setSelect] = React.useState("1");
  const { setPatch } = React.useContext(PatchContext);

  // sets keys to select patches
  React.useEffect(() => {
    window.addEventListener("keydown", (evt) => {
      evt.preventDefault();
      if (evt.key === "1") setSelect("1");
      if (evt.key === "2") setSelect("2");
      if (evt.key === "3") setSelect("3");
      if (evt.key === "4") setSelect("4");
      if (evt.key === "5") setSelect("5");
      if (evt.key === "6") setSelect("6");
      if (evt.key === "7") setSelect("7");
      if (evt.key === "8") setSelect("8");
      if (evt.key === "9") setSelect("9");
    });
  }, []);

  React.useEffect(() => {
    const patch = localStorage.getItem(`patch-${select}`);
    if (patch) {
      setPatch(JSON.parse(patch));
    } else {
      setPatch(defaultPatch);
    }
  }, [setPatch, select]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelect(e.target.value);
    savePatch(previousPatch.current);
    previousPatch.current = e.target.value;
  };

  return (
    <S.PatchBay>
      <S.Title>Patches</S.Title>
      <S.Option>
        <S.Label>1</S.Label>
        <S.Radio
          value={"1"}
          checked={select === "1"}
          onChange={handleOnChange}
        />
      </S.Option>
      <S.Option>
        <S.Label>2</S.Label>
        <S.Radio
          value={"2"}
          checked={select === "2"}
          onChange={handleOnChange}
        />
      </S.Option>
      <S.Option>
        <S.Label>3</S.Label>
        <S.Radio
          value={"3"}
          checked={select === "3"}
          onChange={handleOnChange}
        />
      </S.Option>
      <S.Option>
        <S.Label>4</S.Label>
        <S.Radio
          value={"4"}
          checked={select === "4"}
          onChange={handleOnChange}
        />
      </S.Option>
      <S.Option>
        <S.Label>5</S.Label>
        <S.Radio
          value={"5"}
          checked={select === "5"}
          onChange={handleOnChange}
        />
      </S.Option>
      <S.Option>
        <S.Label>6</S.Label>
        <S.Radio
          value={"6"}
          checked={select === "6"}
          onChange={handleOnChange}
        />
      </S.Option>
      <S.Option>
        <S.Label>7</S.Label>
        <S.Radio
          value={"7"}
          checked={select === "7"}
          onChange={handleOnChange}
        />
      </S.Option>
      <S.Option>
        <S.Label>8</S.Label>
        <S.Radio
          value={"8"}
          checked={select === "8"}
          onChange={handleOnChange}
        />
      </S.Option>
    </S.PatchBay>
  );
};

export default PatchBay;
