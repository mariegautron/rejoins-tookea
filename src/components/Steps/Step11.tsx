import { Box, Typography } from "@material-ui/core";
import React from "react";
import { FormikStep } from "../FormikStep";
import FormikField from "../FormsControls/FormikField";
import FormikSelect from "../FormsControls/FormikSelect";

function Step11() {
  return (
    <FormikStep label="Questions">
      <Box paddingBottom={4} style={{ marginTop: 20, marginBottom: 50 }}>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          ❓ Questions
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          align="center"
          style={{ marginBottom: 50 }}
        >
          Il est temps de nous montrer vraiment qui tu es ! Réponds au maximum à
          ces questions (avis, expériences...). Cela nous donnera un avant goûts
          avant les entretiens
        </Typography>
        <FormikField label="Pourquoi venir chez Tookea ?" name="why" />
        <FormikField
          label="Quels sont tes points forts ?"
          name="strongPoints"
        />
        <FormikField
          label="Tu travailles plutôt le matin, le soir, la nuit ... ?"
          name="workWhen"
        />
        <FormikField
          label="As-tu une alternance ou un job étudiant ? Quelle fréquence ?"
          name="jobAlt"
        />
        <FormikField
          label="Tu préfères gérer seul.le ton temps ou qu'on te donne des deadlines (courtes) ?"
          name="deadlines"
        />
        <FormikField
          label="Est-ce que tu es autonome ou tu as besoin de quelqu’un avec toi pour t’aider ou te motiver ?"
          name="autonome"
        />
        <FormikField
          label="Tu préfères travailler seul ou en équipe ?"
          name="workInTeam"
        />
        <FormikField
          label="Connais-tu déjà quelqu'un dans l'équipe ? Si oui, qui ?"
          name="knowTeam"
        />
        <FormikField
          label="Tu préfères chercher de ton côté ou demander de l'aide ?"
          name="needHelp"
        />
        <FormikField
          label="Qu'est ce que tu attends des chef.fe.s de projet ?"
          name="attendesCDP"
        />
        <FormikField
          label="Qu'est ce que tu veux apprendre chez Tookea ?"
          name="learn"
        />
        <FormikField
          label="Est-ce que tu connais ou tu as pratiqué les méthodes agiles (SCRUM en particulier) ?"
          name="knowScrum"
        />
        <FormikSelect
          label="As-tu déjà fait du bivouac ?"
          name="knowHebergeur"
          items={[
            { label: "Oui", value: "oui" },
            { label: "Non", value: "non" },
          ]}
        />
      </Box>
    </FormikStep>
  );
}

export default Step11;
