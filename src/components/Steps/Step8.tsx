import { Box, Typography } from "@material-ui/core";
import React from "react";
import { FormikStep } from "../FormikStep";

function Step8() {
  return (
    <FormikStep label="Market">
      <Box paddingBottom={4} style={{ marginTop: 20, marginBottom: 50 }}>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          📈 Marketing
        </Typography>
      </Box>
    </FormikStep>
  );
}

export default Step8;
