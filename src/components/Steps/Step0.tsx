import { Box, Typography } from "@material-ui/core";
import React from "react";
import { FormikStep } from "../FormikStep";
import FormikSelect from "../FormsControls/FormikSelect";
import logo from "../../assets/logo.png";

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
          Rejoins l'équipe Tara
        </Typography>
        <Typography
          variant="subtitle2"
          align="center"
          style={{ marginBottom: 50 }}
          color="primary"
        >
          Que tu sois ancien ou nouveau remplit ce formulaire pour qu'on sache
          qui tu es et quelles missions tu veux faire !
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          Si tu es nouveau, ce formulaire te présentera aussi le projet et
          l'équipe pour que tu sache dans quoi tu t'embarques. Les réponses nous
          serons envoyés directement sur notre Discord, nous te recontacterons
          si on a d'autres questions. N'hesite pas aussi à nous contacter si tu
          as des questions !
        </Typography>
        <Box paddingBottom={4} width="100%">
          <FormikSelect
            name="old"
            items={[
              { label: "Oui", value: "oui" },
              { label: "Non", value: "non" },
            ]}
            label="Déjà chez Tara l'année dernière ?"
            required
          />
        </Box>
      </Box>
    </FormikStep>
  );
}

export default Step0;
