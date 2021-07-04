import { Box, Typography } from "@material-ui/core";
import { Field } from "formik";
import { CheckboxWithLabel } from "formik-material-ui";
import React, { useState } from "react";
import CardEquipe from "../CardTeam";
import CustomButton from "../CustomButton";
import { FormikStep } from "../FormikStep";
import { team, teamLost } from "../../data/team";
import mockup from "../../assets/mockup.webp";

import teamPic from "../../assets/team.jpg";

function Step1() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <FormikStep label="Tara, c'est quoi ?">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        style={{ marginTop: 20, marginBottom: 50 }}
      >
        <Typography
          variant="h3"
          component="h1"
          align="center"
          style={{ marginBottom: 50, marginTop: 50 }}
          color="textPrimary"
        >
          🌞 Tara, c'est quoi ?
        </Typography>
        <img src={mockup} alt="logo" width={300} />
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          Tara, est une application de voyage qui s'adapte à ton budget. Tu
          entres ton budget, la ville de départ et le nombre de personne et Tara
          te trouve des destinations adaptées avec hébergements, trajet et
          activités comprises.
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          Pour en savoir un peu plus, tu peux aller voir ici : <br />
          <a href="https://tara-voyage.com/">Site Tara</a> <br />
          <a href="https://www.instagram.com/tara.voyage/">
            Instragram @tara.voyage
          </a>{" "}
          <br />
          <a href="https://www.youtube.com/channel/UCtCIWh4mAL94llfGjAExuTA">
            Youtube Tara Voyage
          </a>
        </Typography>
        <Typography
          variant="subtitle2"
          align="center"
          style={{ marginBottom: 20, fontWeight: "bold" }}
          color="primary"
        >
          Deux types d'utilisateurs
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 20 }}
          color="textPrimary"
        >
          <b>Les voyageurs</b> : Les personnes comme vous et moi, qui recherche
          un voyage et qui ne demande qu'a partir.
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          <b>Les hébergeurs</b> : Etablissements de voyage ou toute personne
          louant un hébergement (chambres d'hôtes, airbnb, hôtel, hébergement
          insolites...) qui publient/gèrent leurs hébergements proposés sur
          l'application.
        </Typography>
        <Typography
          variant="subtitle2"
          align="center"
          style={{ marginBottom: 20, fontWeight: "bold" }}
          color="primary"
        >
          Les applications
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 20 }}
          color="textPrimary"
        >
          <b> Application mobile </b> : Une partie voyageur / Une partie
          hébergeur (Flutter/Firebase)
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 20 }}
          color="textPrimary"
        >
          <b> Landing page </b> : présentation de l'application et promotion
          (NuxtJS/Firebase)
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          <b> Application web </b> : Interface hébergeur (NuxtJS/Firebase) +
          ajouter d'une interface voyageur (NuxtJS/Firebase) et d'un centre
          d'aide (Strapi/NextJS) pour 2021-2022
        </Typography>
        <Typography
          variant="subtitle2"
          align="center"
          style={{ marginBottom: 20, fontWeight: "bold" }}
          color="primary"
        >
          Cadrage - Périmètre
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 20, fontWeight: "bold" }}
          color="textPrimary"
        >
          Tara offre uniquement des voyages en France et en voiture
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          Beaucoup de points sont à retravailler et à rediscuter, nous sommes
          ouvert à toute proposition et pressé de tu regardes le projet avec un
          regard neuf
        </Typography>
        <Typography
          variant="subtitle2"
          align="center"
          style={{ marginBottom: 20, fontWeight: "bold" }}
          color="primary"
        >
          Tara est une association à loi 1901 depuis le 8 janvier 2021.
        </Typography>
      </Box>
      <Box
        paddingBottom={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
        style={{ marginTop: 20, marginBottom: 50 }}
      >
        <Typography
          variant="h3"
          component="h1"
          align="center"
          style={{ marginBottom: 50, marginTop: 50 }}
          color="textPrimary"
        >
          ✨ L'équipe
        </Typography>
        <img
          src={teamPic}
          alt="logo"
          width={300}
          style={{ marginBottom: 20 }}
        />
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 20, fontWeight: "bold" }}
          color="textPrimary"
        >
          Tara est un projet porté par une équipe formidable. 💕
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          Globalement, l'équipe est constitué d'étudiants d'Ynov Nantes de tout
          niveaux. Cependant, étant une association nous avons des membres "non
          Ynov" principalement des amis ou de la famille qui nous aide dans le
          projet mais qui sont moins présent. Nous prenons aussi des stagiaires
          que ce soit de personnes d'Ynov ou d'ailleurs.
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 20, fontWeight: "bold" }}
          color="textPrimary"
        >
          En 2020-2021, l'équipe était constitué de 15 personnes d'Ynov et
          environ 4 personnes hors-Ynov.
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 20 }}
          color="textPrimary"
        >
          Les membres du pôle audiovisuel Tara vont créer leur propre équipe
          Tara Studio, on ne va donc pas vous les présenter ici, même si on sera
          amener à régulièrement travailler avec eux.
        </Typography>
        <CustomButton
          onClick={() => setShowDetails(true)}
          variant="outlined"
          color="primary"
        >
          Découvrir l'équipe en détail
        </CustomButton>
        {showDetails && (
          <Box display="flex" flexDirection="column" alignItems="center">
            {team.map(({ img, name, jobs, cursus, description }) => (
              <CardEquipe
                img={img}
                name={name}
                jobs={jobs}
                cursus={cursus}
                description={description}
              />
            ))}
            <Typography
              variant="body2"
              align="center"
              style={{ marginBottom: 20, fontWeight: "bold" }}
              color="textPrimary"
            >
              Il vont nous manquer 💕
            </Typography>
            <Typography
              variant="body2"
              align="center"
              style={{ marginBottom: 20 }}
              color="textPrimary"
            >
              Ces membres Tara quittent le projet Ydays mais reste dans
              l'association. Dans nos coeurs ils sont de la team !
            </Typography>
            {teamLost.map(({ img, name, jobs, cursus, description }) => (
              <CardEquipe
                img={img}
                name={name}
                jobs={jobs}
                cursus={cursus}
                description={description}
              />
            ))}
            <CustomButton
              onClick={() => setShowDetails(false)}
              variant="outlined"
              color="primary"
            >
              Fermer le détails
            </CustomButton>
          </Box>
        )}
        <Field
          component={CheckboxWithLabel}
          type="checkbox"
          name="projectOK"
          Label={{ label: "Ok, j'ai compris le projet" }}
          required
        />
      </Box>
    </FormikStep>
  );
}

export default Step1;
