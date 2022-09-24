import { Box, Typography } from "@material-ui/core";
import React from "react";
import logo from "../../assets/logo.png";
import { FormikStep } from "../FormikStep";
import FormikSelect from "../FormsControls/FormikSelect";

function Step0() {
  return (
    <FormikStep label="Bienvenue">
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
          Rejoins l'équipe Tookea
        </Typography>
        <Typography
          variant="subtitle2"
          align="center"
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          Que tu sois ancien ou nouveau remplis ce formulaire pour que l'on
          sache qui tu es et quelles missions tu veux faire !
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          Si tu es nouveau, ce formulaire te présentera aussi le projet et
          l'équipe pour que tu saches dans quoi tu t'embarques. Les réponses
          nous serons envoyées directement sur notre Discord, nous te
          recontacterons si on a d'autres questions. N'hésite pas aussi à nous
          contacter si tu as des questions !
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 50, fontWeight: 600 }}
          color="textPrimary"
        >
          Pour nous contacter : Marie Gautron par Teams ou Linkedin ou
          marie.gautron@ynov.com
        </Typography>
        <Typography
          variant="subtitle2"
          align="center"
          style={{
            marginBottom: 50,
            padding: 20,
            backgroundColor: "#FAF3F6",
          }}
          color="primary"
        >
          Attention, en fonction de tes réponses, le questionnaire peut être un
          peu long, installe toi bien et mets toi dans de bonnes conditions.
          Pour les questions ouvertes, décris-nous ce que tu penses ou tes
          expériences, cela nous permettra de mieux te connaître. Il ne faut pas
          que ce questionnaire te fasse peur, nous préférons un bon feeling
          pendant les entretiens que de "bonnes" réponses sur ce questionnaire.
        </Typography>

        <Box paddingBottom={4} width="100%">
          <FormikSelect
            name="old"
            items={[
              { label: "Oui", value: "oui" },
              { label: "Non", value: "non" },
            ]}
            label="Déjà chez Tookea l'année dernière ?"
            required
          />
        </Box>
      </Box>
    </FormikStep>
  );
}

export default Step0;
