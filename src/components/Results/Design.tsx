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
        Tu as déjà réalisé des prototypes avec Figma : {values.proto}
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
        Les développeurs pour toi :
        {valueslinkDesignDevToString(values.linkDesignDev)}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Ton avis sur l'identité visuelle de Tara : {values.idVisuelle}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu travailles avec des grilles : {values.grilles}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu connais l'Atomic Design : {values.atomicDesign}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu as déjà utilisé le design System : {values.designSystem}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu utilises les variants sur Figma : {values.variantsFigma}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu réalises tes illustrations : {values.illuDesign}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Le lien vers tes travaux : {values.lienDesign}
      </Typography>
    </>
  );
};

export default ResultDesign;
