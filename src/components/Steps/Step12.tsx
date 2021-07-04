import { Box, Typography } from "@material-ui/core";
import React from "react";
import { FormikStep } from "../FormikStep";

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
      </Box>
    </FormikStep>
  );
}

export default Step12;
