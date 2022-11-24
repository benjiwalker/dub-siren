import * as S from "./DubSiren.styles";
import Module from "../module/Module";
import Trigger from "../trigger/Trigger";
import RotaryKnob from "../rotaryKnob/RotaryKnob";
import params from "../rotaryKnob/RotaryKnobParams";

const DubSiren = () => {
  return (
    <S.DubSiren>
      <Module name={"Oscillator"}>
        <RotaryKnob
          param={"osc-type"}
          label={"Sine"}
          def={params.OscWaveSelector.default}
          min={params.OscWaveSelector.min}
          max={params.OscWaveSelector.max}
          step={params.OscWaveSelector.step}
          audioParamFunc={params.OscWaveSelector.func}
        />
        <RotaryKnob
          param={"osc-freq"}
          label={"Frequency"}
          def={params.OscFrequency.default}
          min={params.OscFrequency.min}
          max={params.OscFrequency.max}
          step={params.OscFrequency.step}
          audioParamFunc={params.OscFrequency.func}
        />
      </Module>
      <Module name={"Modulator"}>
        <RotaryKnob
          param={"mod-type"}
          label={"Sine"}
          def={params.ModWaveSelector.default}
          min={params.ModWaveSelector.min}
          max={params.ModWaveSelector.max}
          step={params.ModWaveSelector.step}
          audioParamFunc={params.ModWaveSelector.func}
        />
        <RotaryKnob
          param={"mod-freq"}
          label={"Frequency"}
          def={params.ModFrequency.default}
          min={params.ModFrequency.min}
          max={params.ModFrequency.max}
          step={params.ModFrequency.step}
          audioParamFunc={params.ModFrequency.func}
        />
        <RotaryKnob
          param={"mod-amp"}
          label={"Amplitude"}
          def={params.ModAmplitude.default}
          min={params.ModAmplitude.min}
          max={params.ModAmplitude.max}
          step={params.ModAmplitude.step}
          audioParamFunc={params.ModAmplitude.func}
        />
      </Module>
      <Module name={"Delay"}>
        <RotaryKnob
          param={"delay-time"}
          label={"Time"}
          def={params.DelayTime.default}
          min={params.DelayTime.min}
          max={params.DelayTime.max}
          step={params.DelayTime.step}
          audioParamFunc={params.DelayTime.func}
        />
        <RotaryKnob
          param={"delay-feedback"}
          label={"Feedback"}
          def={params.DelayFeedback.default}
          min={params.DelayFeedback.min}
          max={params.DelayFeedback.max}
          step={params.DelayFeedback.step}
          audioParamFunc={params.DelayFeedback.func}
        />
        <RotaryKnob
          param={"delay-mix"}
          label={"Mix"}
          def={params.DelayMix.default}
          min={params.DelayMix.min}
          max={params.DelayMix.max}
          step={params.DelayMix.step}
          audioParamFunc={params.DelayMix.func}
        />
      </Module>
      <Module name={"Output"}>
        <RotaryKnob
          param={"gain"}
          label={"Gain"}
          def={params.OutputGain.default}
          min={params.OutputGain.min}
          max={params.OutputGain.max}
          step={params.OutputGain.step}
          audioParamFunc={params.OutputGain.func}
        />
        <Trigger />
      </Module>
    </S.DubSiren>
  );
};

export default DubSiren;
