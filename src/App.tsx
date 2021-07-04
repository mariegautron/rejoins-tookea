import { Container } from "@material-ui/core";
import { FormikValues } from "formik";
import React, { useState } from "react";
import { FormikStepper } from "./components/FormikStepper";
import Step0 from "./components/Steps/Step0";
import Step1 from "./components/Steps/Step1";
import Step10 from "./components/Steps/Step10";
import Step11 from "./components/Steps/Step11";
import Step12 from "./components/Steps/Step12";
import Step13 from "./components/Steps/Step13";
import Step2 from "./components/Steps/Step2";
import Step3 from "./components/Steps/Step3";
import Step4 from "./components/Steps/Step4";
import Step5 from "./components/Steps/Step5";
import Step6 from "./components/Steps/Step6";
import Step7 from "./components/Steps/Step7";
import Step8 from "./components/Steps/Step8";
import Step9 from "./components/Steps/Step9";
import initialValues from "./utils/initialValues";

export default function Home() {
  const [valuesRecord, setValuesRecord] = useState<FormikValues>({});
  return (
    <Container maxWidth="md">
      <FormikStepper
        initialValues={initialValues}
        onSubmit={async (values) => {
          setValuesRecord(values);
          console.log("values", values);
        }}
      >
        <Step0 />
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />
        <Step5 />
        <Step6 />
        <Step7 />
        <Step8 />
        <Step9 />
        <Step10 />
        <Step11 />
        <Step12 />
        <Step13 values={valuesRecord} />
      </FormikStepper>
    </Container>
  );
}
