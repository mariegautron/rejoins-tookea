import { Box, Typography } from "@material-ui/core";
import React from "react";
import { FormikStep } from "../FormikStep";
import FormikField from "../FormsControls/FormikField";
import FormikSelect from "../FormsControls/FormikSelect";

function Step9() {
  return (
    <FormikStep label="Market">
      <Box paddingBottom={4} style={{ marginTop: 20, marginBottom: 50 }}>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          📈 Community Manager
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
        <FormikSelect
          label="Es-tu rigoureux.euse en orthographe ?"
          items={[
            { label: "Oui, je fais rarement des fautes", value: "3" },
            { label: "Je fais un peu de fautes", value: "2" },
            { label: "Je fais beaucoup de fautes", value: "1" },
            { label: "Je ne sé pa ékrir", value: "0" },
          ]}
          name="ortho"
        />
        <FormikSelect
          label="Pour toi, est-ce important de planifier ses publications ?"
          items={[
            { label: "Oui, 2 semaines en avance", value: "oui2" },
            { label: "Oui, une semaine en avance", value: "oui1" },
            {
              label: "Oui, la veille je prépare la publication du lendemain",
              value: "oui",
            },
            { label: "Non, je publie sans avoir préparé", value: "non" },
          ]}
          name="planningRS"
        />
        <FormikField
          label="Sur quel réseau social es-tu le plus à l'aise ?"
          name="RSfav"
        />
        <FormikSelect
          label="Est-ce que tu as déjà utilisé la suite Adobe ? (surtout InDesign et Illustrator)"
          items={[
            { label: "Oui", value: "oui" },
            { label: "Non", value: "non" },
          ]}
          name="suiteAdobe"
        />
        <FormikField
          label="Qu'est ce que tu penses de notre feed insta (posts, stories)"
          name="avisInsta"
        />
        <FormikField
          label="Donne-nous 3 hashtags que tu peux utiliser sous une publication Tookea"
          name="hashtag"
        />
        <FormikField
          label="Pour toi quelles sont les cibles (le type d'utilisateurs visé) de Tookea ?"
          name="target"
        />
      </Box>
    </FormikStep>
  );
}

export default Step9;
