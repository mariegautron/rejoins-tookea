import { MobileStepper, Step, StepLabel, Stepper } from "@material-ui/core";
import { Form, Formik, FormikConfig, FormikValues } from "formik";
import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import stepsTab from "../utils/getJourneyTabStep";
import getLabel from "../utils/getLabelStepper";
import sendDiscordMessage from "../utils/sendDiscordMessage";
import BackButton from "./BackButton";
import EndPopUp from "./EndPopUp";
import { FormikStepProps } from "./FormikStep";
import NextButton from "./NextButton";

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
  const [open, setOpen] = React.useState(false);

  const stepsJourney = stepsTab(valuesRecord);

  function isLastStep() {
    return step === stepsJourney[stepsJourney.length - 1];
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Formik
        {...props}
        onSubmit={async (values, helpers) => {
          await props.onSubmit(values, helpers);
          if (isLastStep()) {
            await sendDiscordMessage(values);
            setCompleted(true);
            setOpen(true);
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
                  <NextButton
                    isSubmitting={isSubmitting}
                    isLastStep={isLastStep}
                  />
                }
                backButton={
                  <BackButton
                    isSubmitting={isSubmitting}
                    increment={increment}
                    setIncrement={setIncrement}
                    setStep={setStep}
                    stepsJourney={stepsJourney}
                  />
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
                  <BackButton
                    isSubmitting={isSubmitting}
                    increment={increment}
                    setIncrement={setIncrement}
                    setStep={setStep}
                    stepsJourney={stepsJourney}
                  />
                )}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    width: "100%",
                  }}
                >
                  <NextButton
                    isSubmitting={isSubmitting}
                    isLastStep={isLastStep}
                  />
                </div>
              </div>
            )}
          </Form>
        )}
      </Formik>
      <EndPopUp
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
      {console.log(open)}
    </>
  );
}
