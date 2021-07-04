import CustomButton from "./CustomButton";

interface BackButtonProps {
  isSubmitting: boolean;
  setStep: Function;
  stepsJourney: number[];
  increment: number;
  setIncrement: Function;
}

const BackButton = ({
  isSubmitting,
  setStep,
  stepsJourney,
  increment,
  setIncrement,
}: BackButtonProps) => {
  return (
    <CustomButton
      disabled={isSubmitting}
      variant="contained"
      color="primary"
      onClick={() => {
        setStep(stepsJourney[increment - 1]);
        setIncrement((i: number) => i - 1);
      }}
    >
      Précédent
    </CustomButton>
  );
};

export default BackButton;
