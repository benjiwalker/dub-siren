import React from "react";
import * as S from "./Title.styles";
import { TriggerContext } from "../../contexts/TriggerContext";
import { start, stop } from "../../audio";

const Title = () => {
  const play = React.useRef(false);
  const { triggered, isTriggered } = React.useContext(TriggerContext);

  // assign trigger keys on initial render
  React.useEffect(() => {
    console.log("assign keys useEffect ran...");

    window.addEventListener("keydown", (evt) => {
      evt.preventDefault();
      if (evt.key === " ") {
        if (play.current === false) {
          play.current = true;
          isTriggered(true);
          start();
        }
      }
    });
    window.addEventListener("keyup", (evt) => {
      evt.preventDefault();
      if (evt.key === " ") {
        if (play.current === true) {
          play.current = false;
          isTriggered(false);
          stop();
        }
      }
    });
  }, []);

  return (
    <S.Title>
      <S.Siren globalTrigger={triggered}>🚨</S.Siren>
      <S.Heading>Dub Siren</S.Heading>
      <S.Siren globalTrigger={triggered}>🚨</S.Siren>
    </S.Title>
  );
};

export default Title;
