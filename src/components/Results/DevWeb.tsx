import { Typography } from "@material-ui/core";
import { FormikValues } from "formik";
import {
  valuesGitToString,
  valuesJSToString,
} from "../../utils/valuesToString";

const ResultDevWeb = ({ values }: FormikValues) => {
  return (
    <>
      <Typography
        variant="body1"
        style={{ marginBottom: 20, fontWeight: "bold" }}
        color="textPrimary"
      >
        Développeur web Vue/React
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        D'après toi, ton niveau en javascript :
        {valuesJSToString(values.javascript)}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu as l'habitude de découper ton code en composants :{" "}
        {values.composants}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu as déjà utilisé VueJS : {values.vueJS} <br />{" "}
        {values.vueJS === "oui" && values.vueJSTime}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu as déjà utilisé React : {values.react} <br />{" "}
        {values.react === "oui" && values.reactTime}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu as déjà utilisé NuxtJS ou NextJS : {values.nuxtORnext}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu as déjà utilisé Strapi ou un autre CMS Headless: {values.strapi}
        {values.otherStrapi ? (
          <>
            <br /> {values.otherStrapi}
          </>
        ) : null}
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

export default ResultDevWeb;
