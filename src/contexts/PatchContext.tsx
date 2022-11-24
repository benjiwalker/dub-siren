import React from "react";

export interface Provider {
  children: React.ReactNode;
}

interface Context {
  patch: {
    oscType: string;
    oscFreq: number;
    lfoFreq: number;
    lfoAmp: number;
    lfoType: string;
    delayFeedback: number;
    delayMix: number;
    delayTime: number;
    outputVol: number;
  };
  setPatch: React.Dispatch<React.SetStateAction<Context["patch"]>>;
}

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

export const PatchContext = React.createContext({} as Context);

export const PatchProvider: React.FC<Provider> = ({ children }) => {
  const [patch, setPatch] = React.useState(defaultPatch);

  return (
    <PatchContext.Provider
      value={{
        patch,
        setPatch,
      }}
    >
      {children}
    </PatchContext.Provider>
  );
};
