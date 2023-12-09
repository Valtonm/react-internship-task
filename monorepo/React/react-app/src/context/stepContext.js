import { createContext, useContext, useState } from 'react';

const StepContext = createContext();

export const StepProvider = ({ children }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prevStep) => prevStep === 1 ? 2 : 1);

  return (
    <StepContext.Provider value={{ step, nextStep }}>
      {children}
    </StepContext.Provider>
  );
};

export const useStep = () => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error('useStep must be used within a StepProvider');
  }
  return context;
};