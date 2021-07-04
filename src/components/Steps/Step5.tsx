import { Box, Typography } from "@material-ui/core";
import React from "react";
import { FormikStep } from "../FormikStep";
import FormikField from "../FormsControls/FormikField";
import FormikSelect from "../FormsControls/FormikSelect";

function Step5() {
  return (
    <FormikStep label="Dev Mobile">
      <Box paddingBottom={4} style={{ marginTop: 20, marginBottom: 50 }}>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          📱 Développeur.se mobile (cybersécurité)
        </Typography>
        <FormikSelect
          label="As-tu déjà fait du Flutter ?"
          items={[
            { label: "Oui", value: "oui" },
            { label: "Non", value: "non" },
          ]}
          name="flutter"
        />
        <FormikField label="Si oui, combien de temps ?" name="flutterTime" />
        <FormikSelect
          label="As-tu déjà utilisé Firebase ?"
          items={[
            { label: "Oui", value: "oui" },
            { label: "Non", value: "non" },
          ]}
          name="firebase"
        />
        <FormikSelect
          label="D'après toi quel est ton niveau avec git (gitHub, gitLab) ?"
          items={[
            { label: "0, jamais utilisé", value: "0" },
            {
              label:
                "1, je l'ai déjà utilisé mais seul (pas de travail de groupe)",
              value: "1",
            },
            { label: "2, je connais la base (add, commit, push)", value: "2" },
            {
              label:
                "3, je n'ai pas peur des conflits et je sais les résoudre aisement",
              value: "3",
            },
          ]}
          name="git"
        />
        <FormikSelect
          label="As-tu déjà travailler avec Jira ?"
          items={[
            { label: "Oui", value: "oui" },
            { label: "Non", value: "non" },
          ]}
          name="jira"
        />
        <FormikSelect
          label="As-tu l'habitude de documenter ton code ? (par exemple sur des outils comme Confluence)"
          items={[
            { label: "Oui", value: "oui" },
            { label: "Non", value: "non" },
          ]}
          name="doc"
        />
      </Box>
    </FormikStep>
  );
}

export default Step5;
