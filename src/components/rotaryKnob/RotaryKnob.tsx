import React from "react";
import * as S from "./RotaryKnob.styles";
import params from "./RotaryKnobParams";
import { Knob } from "react-rotary-knob";
import { PatchContext } from "../../contexts/PatchContext";
import { intToWave, waveToInt, delayTimeToInt, timeSigs } from "../../audio";

type Props = {
  param: string;
  label: string;
  def: number;
  min: number;
  max: number;
  step: number;
  audioParamFunc: (value: number) => void;
};

const RotaryKnob = ({
  param,
  label,
  def,
  min,
  max,
  step,
  audioParamFunc,
}: Props) => {
  const labelRef = React.useRef(label);
  const valueRef = React.useRef(min);
  const initialRender = React.useRef(true);
  const [value, setValue] = React.useState(def);
  const [active, setActive] = React.useState(false);
  const [fromPatch, setFromPatch] = React.useState(false);
  const [paramLabel, setParamLabel] = React.useState(label);
  const { patch } = React.useContext(PatchContext);

  // manages the knob text label
  React.useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    // handles knob label change from patch load
    if (fromPatch) {
      if (param === "osc-type" || param === "mod-type") {
        setParamLabel(intToWave(value));
      } else {
        setParamLabel(labelRef.current);
      }
      setFromPatch(false);
      valueRef.current = value;
      return;
    }

    // handles knob label change from user interaction
    if (value !== valueRef.current) {
      switch (param) {
        case "osc-freq":
          setParamLabel(`${value.toFixed()}hz`);
          break;
        case "mod-freq":
          setParamLabel(`${(value * 10).toFixed()}hz`);
          break;
        case "osc-type":
          setParamLabel(intToWave(value));
          break;
        case "mod-type":
          setParamLabel(intToWave(value));
          break;
        case "delay-time":
          setParamLabel(timeSigs[Math.round(value)]);
          break;
        case "delay-mix":
          setParamLabel(`${(value * 100).toFixed()}%`);
          break;
        case "gain":
          setParamLabel(`${Math.round(value - 48)}db`);
          break;
        default:
          setParamLabel((value * 100).toFixed());
      }
      valueRef.current = value;
    }
  }, [param, value, fromPatch]);

  // manages the audio param and label value of the knob when new patch selected
  React.useEffect(() => {
    if (patch.oscType) {
      switch (param) {
        case "osc-type":
          setValue(waveToInt(patch.oscType));
          audioParamFunc(waveToInt(patch.lfoType)); //
          break;
        case "osc-freq":
          setValue(patch.oscFreq);
          audioParamFunc(patch.oscFreq);
          break;
        case "mod-freq":
          setValue(patch.lfoFreq);
          audioParamFunc(patch.lfoFreq);
          break;
        case "mod-amp":
          setValue(patch.lfoAmp);
          audioParamFunc(patch.lfoAmp);
          break;
        case "mod-type":
          setValue(waveToInt(patch.lfoType));
          audioParamFunc(waveToInt(patch.lfoType));
          break;
        case "delay-feedback":
          setValue(patch.delayFeedback);
          audioParamFunc(patch.delayFeedback);
          break;
        case "delay-time":
          setValue(delayTimeToInt(patch.delayTime));
          audioParamFunc(patch.delayTime);
          break;
        case "delay-mix":
          setValue(patch.delayMix);
          audioParamFunc(patch.delayMix);
          break;
        default:
          setValue(patch.outputVol + 48);
          audioParamFunc(patch.outputVol + 48);
      }
      setFromPatch(true);
    }
  }, [patch, param, audioParamFunc]);

  const handleOnChange = (v: number) => {
    const maxDistance = max / 5;
    let distance = Math.abs(v - value);
    if (distance > maxDistance) {
      return;
    } else {
      let val = v;
      if (
        param === "osc-type" ||
        param === "mod-type" ||
        param === "delay-time"
      ) {
        val = Math.round(v);
      }
      setValue(val);
      audioParamFunc(val);
    }
  };

  const handleOnStart = () => {
    setActive(true);
  };

  const handleOnEnd = () => {
    if (param === "osc-type" || param === "mod-type") {
      setActive(false);
      return;
    }
    setParamLabel(labelRef.current);
    setActive(false);
  };

  return (
    <S.Container active={active}>
      <Knob
        style={{ cursor: "pointer" }}
        min={min}
        max={max}
        step={step}
        value={value}
        unlockDistance={0}
        preciseMode={false}
        clampMin={params.clampMin}
        clampMax={params.clampMax}
        rotateDegrees={params.rotateDegrees}
        onChange={handleOnChange}
        onStart={handleOnStart}
        onEnd={handleOnEnd}
      ></Knob>
      <S.Label id={`${param}-label`}>{paramLabel}</S.Label>
    </S.Container>
  );
};

export default RotaryKnob;
