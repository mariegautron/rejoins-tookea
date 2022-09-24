import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Field } from "formik";
import { CheckboxWithLabel } from "formik-material-ui";
import React from "react";
import missionsTab from "../../data/missions";
import { FormikStep } from "../FormikStep";
import FormikField from "../FormsControls/FormikField";
import Mission from "../Mission";

function Step4() {
  return (
    <FormikStep label="Missions">
      <Box paddingBottom={4} style={{ marginTop: 20, marginBottom: 50 }}>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          🏁 Quelles missions veux-tu faire ?
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          align="center"
          style={{ marginBottom: 20 }}
        >
          Tu l'auras compris chez Tookea, pas d'étiquette c'est TOI qui choisis ce
          que tu veux faire ! Lis les missions avant de cocher quand meme ! Les
          niveaux indiqués sont "de préférence" ne t'arrêtes pas à ça.
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          align="center"
          style={{ marginBottom: 20 }}
        >
          Si jamais tu as pour idée d'aider en gestion de projet en plus de ta
          missions principale, coches aussi la mission "Chef.fe de projet"
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          align="center"
          style={{ marginBottom: 20 }}
        >
          Coche VRAIMENT TOUT ce que tu as envie de faire. Rien n'est gravé dans
          le marbre, tout peut changer en fonction de tes envies et de ta
          personnalité !
        </Typography>

        {missionsTab.map(
          ({ id, title, text, missions, technos, qualities, level }) => (
            <Accordion style={{ padding: 10, marginBottom: 20 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Field
                  component={CheckboxWithLabel}
                  type="checkbox"
                  name={`mission${id}`}
                  Label={{ label: title }}
                />
              </AccordionSummary>
              <AccordionDetails>
                <Mission
                  title={title}
                  text={text}
                  missions={missions}
                  technos={technos}
                  qualities={qualities}
                  level={level}
                />
              </AccordionDetails>
            </Accordion>
          )
        )}

        <Typography variant="body1" gutterBottom align="center">
          Un commentaire ? Tu veux modifier un rôle ou faire un autre rôle que
          ceux qui sont décris ? Dis nous tout!
        </Typography>
        <FormikField label="Autre" name="missionAutre" />
      </Box>
    </FormikStep>
  );
}

export default Step4;
