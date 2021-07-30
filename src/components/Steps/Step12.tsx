import { Box, Typography } from "@material-ui/core";
import React from "react";
import { FormikStep } from "../FormikStep";
import FormikField from "../FormsControls/FormikField";

function Step12() {
  return (
    <FormikStep label="Changements">
      <Box paddingBottom={4} style={{ marginTop: 20, marginBottom: 50 }}>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          🦖 Des changements à suggerer ?
        </Typography>
        <FormikField
          label="Qu'est ce que tu n'as pas aimé chez Tara l'année dernière et que tu ne veux pas revoir cette année ?"
          name="changes"
        />
      </Box>
    </FormikStep>
  );
}

export default Step12;
