import React from "react";
import * as S from "./Trigger.styles";
import { start, stop } from "../../audio";
import svg from "./svg";
import { TriggerContext } from "../../contexts/TriggerContext";

const Trigger = () => {
  const { triggered, isTriggered } = React.useContext(TriggerContext);

  const handleStart = () => {
    isTriggered(true);
    start();
  };

  const handleStop = () => {
    isTriggered(false);
    stop();
  };

  return (
    <S.Switch>
      <S.Button
        isActive={triggered}
        onMouseDown={handleStart}
        onMouseUp={handleStop}
        onTouchStart={handleStart}
        onTouchEnd={handleStop}
      >
        {svg}
      </S.Button>
      <S.Label>Trigger</S.Label>
    </S.Switch>
  );
};

export default Trigger;
