import { Typography } from "@material-ui/core";
import { FormikValues } from "formik";
import { valuesChefAgileToString } from "../../utils/valuesToString";

const ResultChef = ({ values }: FormikValues) => {
  return (
    <>
      <Typography
        variant="body1"
        style={{ marginBottom: 20, fontWeight: "bold" }}
        color="textPrimary"
      >
        Chef de projet
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu as déjà été Chef de projet: {values.chef}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu es à l'aise avec les méthodes Agiles :{" "}
        {valuesChefAgileToString(values.chefAgile)}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu sais utiliser Jira : {values.chefJira}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu sais utiliser AirTable : {values.chefAirtable}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu as déjà réalisé un cahier des charges : {values.chefCDC}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tes idées pour la communication entre équipes : {values.chefComm}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tes idées pour la montée en compétences : {values.chefMontee}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Ce qui te plait dans le rôle de chef de projet : {values.chefLike}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tes actions si un membre n'est pas investi : {values.chefInvest}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Ton adaptation dans l'équipe : {values.chefAdapt}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Ton action si un membre n'a rien fait en 1 semaine : {values.chefPiege}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Les posts que tu connais chez Tookea : {values.chefPosts}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Ton action pour l'implication des membres : {values.chefImpl}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Ton avis sur les deadlines : {values.chefDeadlines}
      </Typography>
    </>
  );
};

export default ResultChef;
