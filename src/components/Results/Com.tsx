import { Typography } from "@material-ui/core";
import { FormikValues } from "formik";
import { valuesOrthoToString } from "../../utils/valuesToString";

const ComResult = ({ values }: FormikValues) => {
  return (
    <>
      <Typography
        variant="body1"
        style={{ marginBottom: 20, fontWeight: "bold" }}
        color="textPrimary"
      >
        SEO Manager
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Rigoureux.euse en orthographe : {valuesOrthoToString(values.ortho)}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Pour toi, c'est important de planifier ses publications ? :
        {values.planningRS}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Sur quel réseau social es-tu le plus à l'aise ? : {values.RSfav}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Qu'est ce que tu penses de notre feed insta (posts, stories) :{" "}
        {values.avisInsta}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Donne nous 3 hashtag que tu peux utiliser sous une publication Tara :
        {values.hashtag}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu as déjà utilisé la suite Adobe ? (surtout InDesign et Illustrator) :{" "}
        {values.suiteAdobe}
      </Typography>

      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Pour toi quelles sont les cibles (le type d'utilisateurs visé) de Tara ?
        : {values.target}
      </Typography>
    </>
  );
};

export default ComResult;
