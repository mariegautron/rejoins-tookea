import { Box, Typography } from "@material-ui/core";
import React from "react";
import { FormikStep } from "../FormikStep";
import FormikField from "../FormsControls/FormikField";
import FormikSelect from "../FormsControls/FormikSelect";

function Step3() {
  return (
    <FormikStep label="Qui es tu ?">
      <Box paddingBottom={4} style={{ marginTop: 20, marginBottom: 50 }}>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          🔎 Qui es tu ?
        </Typography>
        <FormikField label="Prénom" name="firstName" required />
        <FormikField label="Nom" name="lastName" required />
        <FormikSelect
          name="prom"
          items={[
            { label: "B1", value: "B1" },
            { label: "B2", value: "B2" },
            { label: "B3", value: "B3" },
            { label: "M1", value: "M1" },
            { label: "M2", value: "M2" },
          ]}
          label="Ton niveau"
          required
        />
        <FormikSelect
          name="domain"
          items={[
            { label: "Informatique", value: "info" },
            { label: "Marketing & Communication", value: "market-com" },
            { label: "Audiovisuel", value: "audio" },
            { label: "Création & Design", value: "design" },
          ]}
          label="Ton cursus à Ynov"
          required
        />
      </Box>
    </FormikStep>
  );
}

export default Step3;
