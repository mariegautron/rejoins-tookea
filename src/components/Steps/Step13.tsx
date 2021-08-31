import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { FormikValues } from "formik";
import React from "react";
import { transformDomain, valueMissionToTab } from "../../utils/valuesToString";
import { FormikStep } from "../FormikStep";
import ResultChef from "../Results/Chef";
import ComResult from "../Results/Com";
import ResultDesign from "../Results/Design";
import ResultDevMobile from "../Results/DevMobile";
import ResultDevWeb from "../Results/DevWeb";
import ResultQuestions from "../Results/Questions";
import SEOResult from "../Results/SEO";

function Step13({ values }: FormikValues) {
  return (
    <FormikStep label="Results">
      <Box paddingBottom={4} style={{ marginTop: 20, marginBottom: 50 }}>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          ✈️ Résultats
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          align="center"
          style={{ marginBottom: 50 }}
        >
          Voici tes réponses. Cliques sur le bouton "Envoyer" pour que les
          membres Tara reçoivent tes réponses sur leur Discord. Nous te
          contacterons si nous avons d'autres questions, de ton coté n'hesites
          pas non plus à nous contacter. Nous t'attendons maintenant aux
          entretiens d'Ynov, à bientot !
        </Typography>
        <Typography
          variant="body1"
          style={{ marginBottom: 20, fontWeight: "bold" }}
          color="primary"
        >
          {values.firstName} {values.lastName}
        </Typography>
        <Typography
          variant="body1"
          style={{ marginBottom: 20, fontStyle: "italic" }}
          color="textPrimary"
        >
          {values.prom} {transformDomain(values.domain)}
        </Typography>
        <Typography
          variant="body1"
          style={{ marginBottom: 20 }}
          color="textPrimary"
        >
          Les missions que tu veux faire :
        </Typography>
        <List style={{ marginBottom: 20 }}>
          {valueMissionToTab(values).map((mission) => (
            <ListItem style={{ padding: 0 }}>
              <CheckIcon style={{ marginRight: 10, maxWidth: 20 }} />
              <ListItemText primary={mission} />
            </ListItem>
          ))}
        </List>
        <Accordion style={{ padding: 10, marginBottom: 20 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Voir le détails de mes réponses
          </AccordionSummary>
          <AccordionDetails style={{ display: "block" }}>
            {values.old === "non" &&
              (values.missionDevMobile || values.missionDevMobileSecu) && (
                <ResultDevMobile values={values} />
              )}
            {values.old === "non" &&
              (values.missionDevWebVue || values.missionDevWebReact) && (
                <ResultDevWeb values={values} />
              )}
            {values.old === "non" && values.missionUXUI && (
              <ResultDesign values={values} />
            )}
            {values.old === "non" && values.missionSEO && (
              <SEOResult values={values} />
            )}
            {values.old === "non" && values.missionComManager && (
              <ComResult values={values} />
            )}
            {values.missionCDP && <ResultChef values={values} />}

            <ResultQuestions values={values} />
            {values.old === "oui" && (
              <Typography
                variant="body1"
                style={{ marginBottom: 20 }}
                color="textPrimary"
              >
                Qu'est ce que tu n'as pas aimé chez Tara l'année dernière et que
                tu ne veux pas revoir cette année ? {values.changes}
              </Typography>
            )}
          </AccordionDetails>
        </Accordion>
      </Box>
    </FormikStep>
  );
}

export default Step13;
