import { Box, Typography } from "@material-ui/core";
import React from "react";
import { FormikStep } from "../FormikStep";
import FormikField from "../FormsControls/FormikField";
import FormikSelect from "../FormsControls/FormikSelect";

function Step7() {
  return (
    <FormikStep label="Design">
      <Box paddingBottom={4} style={{ marginTop: 20, marginBottom: 50 }}>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          🎨 Design
        </Typography>

        <FormikSelect
          label="Team XD ou team Figma ?"
          items={[
            { label: "XD", value: "XD" },
            { label: "Figma", value: "figma" },
          ]}
          name="xdORfigma"
        />
        <FormikSelect
          label="As-tu déjà réalisé des prototypes avec Figma ?"
          items={[
            { label: "Oui", value: "oui" },
            { label: "Non", value: "non" },
          ]}
          name="proto"
        />

        <FormikSelect
          label="Connais-tu la différence entre UX et UI ?"
          items={[
            { label: "Oui", value: "oui" },
            { label: "Non", value: "non" },
          ]}
          name="diffUXUI"
        />

        <FormikField
          label="Quels sont tes outils de veille graphique ?"
          name="veille"
        />

        <FormikSelect
          label="Les développeurs, pour toi ... "
          items={[
            { label: "Je ne m'interesse pas au développement", value: "berk" },
            {
              label: "La communication avec eux est indispensable",
              value: "com",
            },
            {
              label:
                "En tant que designer, il faut savoir un peu développer et je connais les bases (html, css)",
              value: "html",
            },
          ]}
          name="linkDesignDev"
        />
      </Box>
    </FormikStep>
  );
}

export default Step7;
