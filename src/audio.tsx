import * as Tone from "tone";

// **************** TONE.JS **************** //

const osc = new Tone.Oscillator({ type: "sine" });
const filter = new Tone.Filter(8000, "lowpass", -24);
const reverb = new Tone.Reverb({ decay: 1, wet: 0.1 });
const delay = new Tone.FeedbackDelay({ delayTime: 1 }); // had feedback: 0, wet: 0,
const output = new Tone.Volume(-12).toDestination();
osc.chain(reverb, delay, filter, output);

const signal = new Tone.Signal({
  units: "frequency",
  value: 60,
  minValue: 60,
  maxValue: 1000,
}).connect(osc.frequency, 0, 0);

const lfo = new Tone.LFO({
  amplitude: 0,
  frequency: 1,
  min: -300,
  max: 300,
  type: "square",
}).connect(osc.frequency, 0, 1);

// ************ Audio Param Setters ************ //

export const oscType = (v: number) => {
  if (v === 1) osc.type = "sine";
  else if (v === 2) osc.type = "square";
  else if (v === 3) osc.type = "sawtooth";
  else osc.type = "triangle";
};

export const modType = (v: number) => {
  if (v === 1) lfo.type = "sine";
  else if (v === 2) lfo.type = "square";
  else if (v === 3) lfo.type = "sawtooth";
  else lfo.type = "triangle";
};

export const timeSigs = [
  "1",
  "2n",
  "2t",
  "4n",
  "4t",
  "4n.",
  "8n",
  "8t",
  "8n.",
  "16n",
  "16t",
  "16n.",
  "32n",
  "32t",
  "32n.",
];

export const delayTime = (n: number) => {
  if (n > 0.01 && n < 0.99) {
    delay.delayTime.rampTo(n, 0.5);
    return;
  }
  delay.delayTime.rampTo(timeSigs[n], 0.5);
};

export const oscFreq = (hz: number) => {
  signal.rampTo(hz, 0.1);
};

export const lfoFreq = (hz: number) => {
  lfo.frequency.rampTo(hz.toFixed(1), 0.1);
};
export const lfoAmp = (v: number) => {
  lfo.amplitude.rampTo(v, 0.1);
};
export const delayFeedback = (v: number) => {
  delay.feedback.rampTo(v, 0.1);
};
export const delayMix = (v: number) => {
  delay.wet.rampTo(v, 0);
};
export const outputVol = (db: number) => {
  osc.volume.rampTo(db - 48, 0.1);
};

const start = () => {
  lfo.start();
  osc.start();
};

const stop = () => {
  lfo.stop();
  osc.stop();
};

export const savePatch = (patchNum: string) => {
  const patch = {
    oscType: osc.type,
    oscFreq: signal.value,
    lfoFreq: lfo.frequency.value,
    lfoAmp: lfo.amplitude.value,
    lfoType: lfo.type,
    delayFeedback: delay.feedback.value,
    delayMix: delay.wet.value,
    delayTime: delay.delayTime.value,
    outputVol: Math.round(output.volume.value),
  };
  localStorage.setItem(`patch-${patchNum}`, JSON.stringify(patch));
};

const waveToInt = (wave: string) => {
  if (wave === "sine") return 1;
  else if (wave === "square") return 2;
  else if (wave === "sawtooth") return 3;
  else return 4;
};

const intToWave = (int: number) => {
  if (int === 1) return "Sine";
  else if (int === 2) return "Square";
  else if (int === 3) return "Sawtooth";
  else return "Triangle";
};

const delayTimeToInt = (f: number) => {
  if (f === 0.6666666666666666) return 2;
  else if (f === 0.5) return 3;
  else if (f === 0.3333333333333333) return 4;
  else if (f === 0.75) return 5;
  else if (f === 0.25) return 6;
  else if (f === 0.16666666666666666) return 7;
  else if (f === 0.375) return 8;
  else if (f === 0.125) return 9;
  else if (f === 0.08333333333333333) return 10;
  else if (f === 0.1875) return 11;
  else if (f === 0.0625) return 12;
  else if (f === 0.041666666666666664) return 13;
  else if (f === 0.09375) return 14;
  else return 1;
};

export { start, stop, waveToInt, intToWave, delayTimeToInt };
