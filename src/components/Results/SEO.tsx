import { Typography } from "@material-ui/core";
import { FormikValues } from "formik";

const SEOResult = ({ values }: FormikValues) => {
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
        Tu as de l'expérience en SEO : {values.seoXP}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Les outils utilisés pour le SEO : {values.toolsSEO}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu sais ce qu'est une balise title et une meta description ? :{" "}
        {values.meta}
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        Tu sais à quoi sert un robots.txt et un sitemap : {values.sitemap}
      </Typography>

      <Typography
        variant="body1"
        style={{ marginBottom: 20 }}
        color="textPrimary"
      >
        3 mots qui permettraient de bien référencer Tara : {values.keywords}
      </Typography>
    </>
  );
};

export default SEOResult;
