import { Typography } from "@material-ui/core";
import { FormikValues } from "formik";
import { valuesGitToString } from "../../utils/valuesToString";

const ResultDevWebBackNode = ({ values }: FormikValues) => {
  return (
    <>
      <Typography
        variant="body1"
        style={{ marginBottom: 20, fontWeight: "bold" }}
        color="textPrimary"
      >
        Développeur.se mobile / cybersécurité
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu as déjà fait du Flutter : {values.flutter} <br />{" "}
        {values.flutter === "oui" && values.flutterTime}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu as déjà utilisé Firebase : {values.firebase}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        D'après toi, ton niveau de git : {valuesGitToString(values.git)}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu as déjà travaillé avec jira : {values.jira}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu as l'habitude de documenter ton code : {values.doc}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu as déjà fait de l'intégration continue : {values.intecontinue}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu as déjà déployé sur un store : {values.store}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu as des compétences en cybersécurité: {values.cybersecu_competences}
      </Typography>
    </>
  );
};

export default ResultDevWebBackNode;
