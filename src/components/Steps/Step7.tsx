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
        <Typography
          variant="body1"
          gutterBottom
          align="center"
          style={{ marginBottom: 50 }}
        >
          Ne paniques pas si tu as l'impression de ne pas tout connaitre, Marie
          est la pour t'accompagner et le questionnaire est fait pour poser des
          questions au maximum. Nous aurons l'occasion de discuter pendant les
          entretiens.
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
            { label: "Je ne m'intéresse pas au développement", value: "berk" },
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

        <FormikField
          label="Que penses-tu de l'identité visuelle de Tookea?"
          name="idVisuelle"
        />

        <FormikSelect
          label="Travailles-tu tes designs avec des grilles ?"
          items={[
            { label: "Oui", value: "oui" },
            { label: "Non", value: "non" },
          ]}
          name="grilles"
        />
        <FormikField
          label="As-tu déjà pratiqué ou entendu parlé de l'Atomic Design"
          name="atomicDesign"
        />
        <FormikSelect
          label="As tu déjà réalisé un design system ?"
          items={[
            { label: "Oui", value: "oui" },
            { label: "Non", value: "non" },
          ]}
          name="designSystem"
        />
        <FormikSelect
          label="As tu l'habitude d'utiliser les variants sur Figma ?"
          items={[
            { label: "Oui", value: "oui" },
            { label: "Non", value: "non" },
          ]}
          name="variantsFigma"
        />
        <FormikSelect
          label="Réalises-tu tes propres illustrations ?"
          items={[
            { label: "Oui", value: "oui" },
            { label: "Non", value: "non" },
          ]}
          name="illuDesign"
        />
        <FormikField
          label="Si tu as un compte Instagram, Behance, ou un drive de tes créations, partage le lien ici !"
          name="lienDesign"
        />
      </Box>
    </FormikStep>
  );
}

export default Step7;
