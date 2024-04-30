import React, { SetStateAction, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import { TourProvider } from '@reactour/tour';
import { Button } from './components/Button';

const App: React.FC = () => {
  const redirect = useNavigate();
  const [step, setStep] = useState(0);

  const setCurrentStep = (step: SetStateAction<number>) => {
    switch (step) {
      case 0:
        redirect("/");
        break;
      case 1:
        redirect("/");
        break;
      case 2:
        redirect("/teste");
        break;
      default:
        break;
    }
    setStep(step);
  };

  const steps =
    [
      {
        content: <h2>nesse botão vocês terão uma experiência totalmente aleatória</h2>,
        selector: '[data-joy="UM"]',
      },
      {
        content: <h2>Sticky elements</h2>,
        selector: '[data-joy="DOIS"]',
      },
      {
        content: <h2>STEP 3</h2>,
        selector: '[data-joy="TRES"]',
        redirect: "/"
      },
    ]

  return (
    <TourProvider
      steps={steps}
      currentStep={step}
      setCurrentStep={setCurrentStep}
      showDots={false}
      showCloseButton={false}
      showPrevNextButtons={false}
      showBadge={false}
    >
      <Header />
      <Button.Root action={() => setCurrentStep(step + 1)} isPrimary style={{ position: 'fixed', zIndex: "999999999", right: 25, bottom: 25 }}>
        <Button.Text text='PROXIMO' />
      </Button.Root>

      <Button.Root action={() => setCurrentStep(step - 1)} style={{ position: 'fixed', zIndex: "999999999", left: 25, bottom: 25  }}>
        <Button.Text text='VOLTAR' />
      </Button.Root>
      <Outlet />
    </TourProvider>
  );
};

export default App;
