import {
  CircularProgress,
  MobileStepper,
  Step,
  StepLabel,
  Stepper,
} from "@material-ui/core";
import { Form, Formik, FormikConfig, FormikValues } from "formik";
import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import CustomButton from "./CustomButton";
import { FormikStepProps } from "./FormikStep";
import stepsTab from "../utils/getJourneyTabStep";
import getLabel from "../utils/getLabelStepper";
import sendDiscordMessage from "../utils/sendDiscordMessage";

export function FormikStepper({
  children,
  ...props
}: FormikConfig<FormikValues>) {
  const childrenArray = React.Children.toArray(
    children
  ) as React.ReactElement<FormikStepProps>[];
  const [step, setStep] = useState(0);
  const [increment, setIncrement] = useState(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);
  const [valuesRecord, setValuesRecord] = useState<FormikValues>({});

  const stepsJourney = stepsTab(valuesRecord);

  function isLastStep() {
    return step === stepsJourney[stepsJourney.length - 1];
  }

  console.log("stepsJourney", stepsJourney);
  console.log("increment", increment);
  console.log("stepsJourney[increment]", stepsJourney[increment]);
  console.log("stepsJourney[increment + 1]", stepsJourney[increment + 1]);
  console.log("stepsJourney[increment - 1]", stepsJourney[increment - 1]);
  return (
    <Formik
      {...props}
      onSubmit={async (values, helpers) => {
        await props.onSubmit(values, helpers);
        if (isLastStep()) {
          await sendDiscordMessage(values);
          setCompleted(true);
        } else {
          setStep(stepsTab(values)[increment + 1]);
          setIncrement((i) => i + 1);
          setValuesRecord(values);
          helpers.setTouched({});
        }
        window["scrollTo"]({ top: 0, behavior: "smooth" });
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          {!isMobile && (
            <Stepper
              alternativeLabel
              activeStep={step}
              style={{ marginBottom: 20 }}
            >
              {childrenArray.map((child, index) => {
                return (
                  <Step
                    key={child.props.label}
                    completed={step > index || completed}
                  >
                    <StepLabel>{getLabel(index)}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          )}

          {isMobile && (
            <MobileStepper
              activeStep={step}
              steps={childrenArray.length}
              nextButton={
                <CustomButton
                  startIcon={
                    isSubmitting ? <CircularProgress size="1rem" /> : null
                  }
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  {isSubmitting
                    ? "Submitting"
                    : isLastStep()
                    ? "Submit"
                    : "Next"}
                </CustomButton>
              }
              backButton={
                <CustomButton
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setStep(stepsJourney[increment - 1]);
                    setIncrement((i) => i - 1);
                  }}
                >
                  Back
                </CustomButton>
              }
            />
          )}

          {currentChild}

          {!isMobile && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 50,
                marginTop: 20,
              }}
            >
              {step > 0 && (
                <CustomButton
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setStep(stepsJourney[increment - 1]);
                    setIncrement((i) => i - 1);
                  }}
                >
                  Back
                </CustomButton>
              )}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                }}
              >
                <CustomButton
                  startIcon={
                    isSubmitting ? <CircularProgress size="1rem" /> : null
                  }
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  {isSubmitting
                    ? "Submitting"
                    : isLastStep()
                    ? "Submit"
                    : "Next"}
                </CustomButton>
              </div>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
}
