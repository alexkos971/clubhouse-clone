import React from "react";

import {WelcomeStep} from "../components/steps/WelcomeStep";
import {EnterNameStep} from "../components/steps/EnterNameStep";
import {ChooseAvatarStep} from "../components/steps/ChooseAvatarStep";
import {EnterPhoneStep} from "../components/steps/EnterPhoneStep";
import {EnterCodeStep} from "../components/steps/EnterCodeStep";
import { TwitterStep } from "../components/steps/TwitterStep";

const stepComponents = {
  0: WelcomeStep,
  1: EnterNameStep,
  2: TwitterStep,
  3: ChooseAvatarStep,
  4: EnterPhoneStep,
  5: EnterCodeStep
}

interface MainContextProps {
  onNextStep: () => void;
  step: number;
}

export const MainContext = React.createContext<MainContextProps>({} as MainContextProps);

export default function Home() {
  const [step, setStep] = React.useState<number>(0)
  const Step = stepComponents[step]

  const onNextStep = () => {
    setStep(prev => prev + 1);
  }

  return (
    <MainContext.Provider value={{ step, onNextStep }}>
      <Step/>
    </MainContext.Provider>
  )
}
