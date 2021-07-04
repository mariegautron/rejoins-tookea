import { Typography } from "@material-ui/core";
import { FormikValues } from "formik";
import { valuesGitToString } from "../../utils/valuesToString";

const ResultDevMobile = ({ values }: FormikValues) => {
  return (
    <>
      <Typography
        variant="body1"
        style={{ marginBottom: 20, fontWeight: "bold" }}
        color="textPrimary"
      >
        Développeur mobile / cybersécurité
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
        Tu as déjà travailler avec jira : {values.jira}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu as l'habitude de documenter ton code : {values.doc}
      </Typography>
    </>
  );
};

export default ResultDevMobile;
