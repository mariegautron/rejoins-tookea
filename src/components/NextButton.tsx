import { CircularProgress } from "@material-ui/core";
import CustomButton from "./CustomButton";

interface NextButtonProps {
  isSubmitting: boolean;
  isLastStep: Function;
}

const NextButton = ({ isSubmitting, isLastStep }: NextButtonProps) => {
  return (
    <CustomButton
      startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
      disabled={isSubmitting}
      variant="contained"
      color="primary"
      type="submit"
    >
      {isSubmitting ? "Envoi" : isLastStep() ? "Envoyer" : "Suivant"}
    </CustomButton>
  );
};

export default NextButton;
