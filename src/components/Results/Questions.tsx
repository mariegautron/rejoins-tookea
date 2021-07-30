import { Typography } from "@material-ui/core";
import { FormikValues } from "formik";

const ResultQuestions = ({ values }: FormikValues) => {
  return (
    <>
      <Typography
        variant="body1"
        style={{ marginBottom: 20, fontWeight: "bold" }}
        color="textPrimary"
      >
        Questions
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tes points forts : {values.strongPoints}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu veux venir chez Tara pour : {values.why}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu préfères travailler plutôt : {values.workWhen}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu as une alternance ou un job étudiant ? : {values.jobAlt}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Gérer ton temps ou deadlines ? : {values.deadlines}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Autonome ou tu as besoin de qqn pour t'aider et te motiver ? :{" "}
        {values.autonome}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Travailler seul.le ou en équipe ? : {values.workInTeam}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu connais déjà qqn dans l'équipe ? : {values.knowTeam}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Chercher de son côté ou demander de l'aide ? : {values.needHelp}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Ce que tu attends des chef.fe.s de projet : {values.attendesCDP}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Ce que tu veux apprendre chez Tara : {values.learn}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu connais ou pratique SCRUM : {values.knowScrum}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu connais des hébergeurs : {values.knowHebergeur}
      </Typography>
    </>
  );
};

export default ResultQuestions;
