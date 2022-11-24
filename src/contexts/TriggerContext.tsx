import React from "react";

export interface Provider {
  children: React.ReactNode;
}

interface Context {
  triggered: boolean;
  isTriggered: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TriggerContext = React.createContext({} as Context);

export const TriggerProvider: React.FC<Provider> = ({ children }) => {
  const [triggered, isTriggered] = React.useState(false);

  return (
    <TriggerContext.Provider
      value={{
        triggered,
        isTriggered,
      }}
    >
      {children}
    </TriggerContext.Provider>
  );
};
