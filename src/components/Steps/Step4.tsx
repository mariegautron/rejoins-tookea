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
import { FormikStep } from "../FormikStep";
import FormikField from "../FormsControls/FormikField";
import Mission from "../Mission";
import missionsTab from "../../data/missions";

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
