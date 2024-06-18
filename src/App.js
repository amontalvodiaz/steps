import { useState } from "react";

const messages = [
  "Learn React *",
  "Apply for jobs *",
  "Invest your new income "
];
export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((currentStep) => currentStep - 1);
  }

  function handleNext() {
    if (step < 3) setStep((currentStep) => currentStep + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button
              backgroundColor="#7950f2"
              textColor="#fff"
              onClickHandler={handlePrevious}
            >
              👈 Previous
            </Button>
            <Button
              backgroundColor="#7950f2"
              textColor="#fff"
              onClickHandler={handleNext}
            >
              Next 👉
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ backgroundColor, textColor, onClickHandler, children }) {
  return (
    <button
      style={{ backgroundColor: backgroundColor, color: textColor }}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}
