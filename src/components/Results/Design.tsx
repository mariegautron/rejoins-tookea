import { Typography } from "@material-ui/core";
import { FormikValues } from "formik";
import { valueslinkDesignDevToString } from "../../utils/valuesToString";

const ResultDesign = ({ values }: FormikValues) => {
  return (
    <>
      <Typography
        variant="body1"
        style={{ marginBottom: 20, fontWeight: "bold" }}
        color="textPrimary"
      >
        Design
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Team XD ou team Figma :{values.xdORfigma}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu as déjà realisé des prototypes avec Figma : {values.proto}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu connais la différence entre UX et UI : {values.diffUXUI}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tes outils de veille graphique : {values.veille}
      </Typography>

      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Les developpeurs pour toi :
        {valueslinkDesignDevToString(values.linkDesignDev)}
      </Typography>
    </>
  );
};

export default ResultDesign;
