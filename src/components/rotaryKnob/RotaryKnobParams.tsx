import * as AudioFunctions from "../../audio";

const params = {
  clampMin: 60,
  clampMax: 300,
  rotateDegrees: 180,
  OscWaveSelector: {
    min: 1,
    max: 4,
    default: 1,
    step: 1,
    func: AudioFunctions.oscType,
  },
  ModWaveSelector: {
    min: 1,
    max: 4,
    default: 1,
    step: 1,
    func: AudioFunctions.modType,
  },
  DelayFeedback: {
    min: 0,
    max: 1,
    default: 0,
    step: 0.01,
    func: AudioFunctions.delayFeedback,
  },
  DelayTime: {
    min: 0,
    max: 14,
    default: 0,
    step: 1,
    func: AudioFunctions.delayTime,
  },
  DelayMix: {
    min: 0,
    max: 1,
    default: 0,
    step: 0.01,
    func: AudioFunctions.delayMix,
  },
  OscFrequency: {
    min: 60,
    max: 1000,
    default: 440,
    step: 1,
    func: AudioFunctions.oscFreq,
  },
  ModFrequency: {
    min: 0,
    max: 14,
    default: 0,
    step: 0.1,
    func: AudioFunctions.lfoFreq,
  },
  ModAmplitude: {
    min: 0,
    max: 1,
    default: 0,
    step: 0.01,
    func: AudioFunctions.lfoAmp,
  },
  OutputGain: {
    min: 0,
    max: 42,
    default: 30,
    step: 1,
    func: AudioFunctions.outputVol,
  },
};

export default params;
