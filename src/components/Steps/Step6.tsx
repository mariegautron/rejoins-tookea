import { Box, Typography } from "@material-ui/core";
import React from "react";
import { FormikStep } from "../FormikStep";
import FormikField from "../FormsControls/FormikField";
import FormikSelect from "../FormsControls/FormikSelect";

function Step6() {
  return (
    <FormikStep label="Dev Web">
      <Box paddingBottom={4} style={{ marginTop: 20, marginBottom: 50 }}>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          💻 Développeur.se web (Vue ou React)
        </Typography>
        <FormikSelect
          label="D'après toi quel est ton niveau en javascript ?"
          items={[
            { label: "0, jamais utilisé", value: "0" },
            { label: "1, j'ai eu quelques cours", value: "1" },
            { label: "2, je suis à l'aise", value: "2" },
            {
              label: "3, je l'utilise régulierement (alternance ou stage)",
              value: "3",
            },
          ]}
          name="javascript"
        />
        <FormikSelect
          label="As-tu l'habitude de découper ton code en composants ?"
          items={[
            { label: "Oui", value: "oui" },
            { label: "Non", value: "non" },
          ]}
          name="composants"
        />
        <FormikSelect
          label="As-tu déjà utilisé VueJS ?"
          items={[
            { label: "Oui", value: "oui" },
            { label: "Non", value: "non" },
          ]}
          name="vueJS"
        />
        <FormikField label="Si oui, combien de temps ?" name="vueJSTime" />
        <FormikSelect
          label="As-tu déjà utilisé React ?"
          items={[
            { label: "Oui", value: "oui" },
            { label: "Non", value: "non" },
          ]}
          name="react"
        />
        <FormikField label="Si oui, combien de temps ?" name="reactTime" />

        <FormikSelect
          label="As-tu déjà utilisé NuxtJS ou NextJS ?"
          items={[
            { label: "Oui", value: "oui" },
            { label: "Non", value: "non" },
          ]}
          name="nuxtORnext"
        />
        <FormikSelect
          label="As-tu déjà utilisé Strapi (ou autre CMS Headless) ?"
          items={[
            { label: "Oui", value: "oui" },
            { label: "Non", value: "non" },
          ]}
          name="nuxtORnext"
        />
        <FormikField label="Si autre, dis nous lequel" name="otherStrapi" />
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

export default Step6;
