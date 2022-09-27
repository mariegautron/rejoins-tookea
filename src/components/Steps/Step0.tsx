import { Box, Typography } from "@material-ui/core";
import { Variant } from "@material-ui/core/styles/createTypography";
import React from "react";
import logo from "../../assets/logo.png";
import content from "../../data/content";
import { FormikStep } from "../FormikStep";
import FormikSelect from "../FormsControls/FormikSelect";

function Step0() {
  const contentBienvenue = content[0]
  return (
    <FormikStep label={contentBienvenue.stepLabel}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        style={{ marginTop: 20, marginBottom: 50 }}
      >
        <img src={logo} alt="logo" width={100} />
        <Typography
          variant="h3"
          component="h1"
          align="center"
          style={{ marginBottom: 50, marginTop: 50 }}
          color="textPrimary"
        >
          {contentBienvenue.title}
        </Typography>
        {contentBienvenue.texts.map((text) => {
          if (text.type === 'quote') {
            return <Typography
              variant="subtitle2"
              align="center"
              style={{
                marginBottom: 50,
                padding: 20,
                backgroundColor: "#FAF3F6",
              }}
              color="primary"
            >
              {text.content}
            </Typography>
          }
          return <Typography
            variant={text.variant as Variant | 'inherit'}
            align="center"
            style={{ marginBottom: 50, fontWeight: text.fontWeight || 400 }}
            color="textPrimary"
          >
            {text.content}
          </Typography>
        })}

        <Box paddingBottom={4} width="100%">
          {contentBienvenue.form.map((input) => {
            if (input.type === 'select') {
              return <FormikSelect
                name={input.name}
                items={input.items}
                label={input.label}
                required
              />
            }
          })}

        </Box>
      </Box>
    </FormikStep>
  );
}

export default Step0;
