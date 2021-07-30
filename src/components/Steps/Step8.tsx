import { Box, Typography } from "@material-ui/core";
import React from "react";
import { FormikStep } from "../FormikStep";
import FormikField from "../FormsControls/FormikField";
import FormikSelect from "../FormsControls/FormikSelect";

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
          📈 SEO
        </Typography>
        <FormikField label="As-tu de l'expérience en SEO ?" name="seoXP" />
        <FormikField
          label="Quels outils utilises-tu pour le SEO ?"
          name="toolsSEO"
        />
        <FormikSelect
          label="Sais-tu ce qu'est une balise title et une meta description ?"
          items={[
            { label: "Oui", value: "oui" },
            { label: "Non", value: "non" },
          ]}
          name="meta"
        />
        <FormikSelect
          label="Sais-tu à quoi sert un robots.txt et un sitemap ?"
          items={[
            { label: "Oui", value: "oui" },
            { label: "Non", value: "non" },
          ]}
          name="sitemap"
        />
        <FormikField
          label="Donne-nous 3 mots qui permettraient de bien référencer Tara"
          name="keywords"
        />
        <FormikField
          label="Pour toi quelles sont les cibles (le type d'utilisateurs visé) de Tara ?"
          name="target"
        />
      </Box>
    </FormikStep>
  );
}

export default Step8;
