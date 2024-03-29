import { Box, Typography } from "@material-ui/core";
import React from "react";
import { FormikStep } from "../FormikStep";
import FormikField from "../FormsControls/FormikField";
import FormikSelect from "../FormsControls/FormikSelect";

function Step10() {
  return (
    <FormikStep label="Chef de projet">
      <Box paddingBottom={4} style={{ marginTop: 20, marginBottom: 50 }}>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          👑 Chef.fe de projet
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          align="center"
          style={{ marginBottom: 50 }}
        >
          Ne paniques pas si tu as l'impression de ne pas tout connaitre. Nous
          aurons l'occasion de discuter pendant les entretiens.
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          align="center"
          style={{ marginBottom: 50 }}
        >
          Détailles bien tes réponses aux questions avec tes avis, expériences,
          solutions ... Montre nous le leader qui est en toi !
        </Typography>
        <FormikSelect
          label="As-tu déjà été chef.fe de projet ?"
          items={[
            { label: "Oui", value: "oui" },
            { label: "Non", value: "non" },
          ]}
          name="chef"
        />

        <FormikSelect
          label="Es-tu à l'aise avec les méthodes agiles ? (en particulier SCRUM)"
          items={[
            { label: "Oui, j'en ai déjà mis une en place", value: "oui" },
            {
              label: "Oui, j'ai déjà fait partie d'une équipe agile",
              value: "ouiPartie",
            },
            { label: "J'ai eu des cours théoriques", value: "theorie" },
            { label: "Je ne connais pas", value: "non" },
          ]}
          name="chefAgile"
        />
        <FormikSelect
          label="Sais-tu utiliser Jira ?"
          items={[
            { label: "Oui", value: "oui" },
            { label: "Non", value: "non" },
          ]}
          name="chefJira"
        />
        <FormikSelect
          label="AS-tu déjà réalisé un cahier des charges ?"
          items={[
            { label: "Oui", value: "oui" },
            { label: "Non", value: "non" },
          ]}
          name="chefCDC"
        />
        <FormikField
          label="Que mettrais-tu en place pour améliorer la communication entre les équipes Tookea ?"
          name="chefComm"
        />
        <FormikField
          label="Comment favoriserais-tu la montée en compétences des membres de Tookea ?"
          name="chefMontee"
        />
        <FormikField
          label="Qu'est-ce qu'il te plait dans le rôle de chef de projet ?"
          name="chefLike"
        />
        <FormikField
          label="Que fais-tu si un membre n'est pas investi dans le projet ?"
          name="chefInvest"
        />
        <FormikField
          label="Te sens-tu capable de t'adapter et t'intégrer dans une équipe et un projet déjà en place depuis deux ans ?"
          name="chefAdapt"
        />
        <FormikField
          label="Comment réagis-tu si un membre n'a rien fait depuis 1 semaine ?"
          name="chefPiege"
        />
        <FormikField
          label="As-tu connaissance des différents postes chez Tookea ? Cite-les :"
          name="chefPosts"
        />
        <FormikField
          label="Comment favoriser l'implication des membres ?"
          name="chefImpl"
        />
        <FormikField
          label="Est-ce que tu aimes fixer des deadlines aux membres ? Exemple : 'Il faut que cette tâche soit finie pour telle date.'"
          name="chefDeadlines"
        />
      </Box>
    </FormikStep>
  );
}

export default Step10;
