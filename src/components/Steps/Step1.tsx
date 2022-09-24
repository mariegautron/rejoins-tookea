import { Box, Typography } from "@material-ui/core";
import { Field } from "formik";
import { CheckboxWithLabel } from "formik-material-ui";
import React, { useState } from "react";
import mockup from "../../assets/mockup.webp";
import teamPic from "../../assets/team.jpg";
import { team, teamLost } from "../../data/team";
import CardEquipe from "../CardTeam";
import CustomButton from "../CustomButton";
import { FormikStep } from "../FormikStep";

function Step1() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <FormikStep label="Tookea, c'est quoi ?">
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
          🌞 Tookea, c'est quoi ?
        </Typography>
        <img src={mockup} alt="logo" width={300} />
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          Tookea est une application de voyage qui s'adapte à ton budget. Tu
          entres ton budget, la ville de départ et le nombre de personnes et
          Tookea te trouve des destinations adaptées avec hébergement, trajet et
          activités comprises.
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          Pour en savoir un peu plus, tu peux aller voir ici : <br />
          <a href="https://Tookea-voyage.com/">Site Tookea</a> <br />
          <a href="https://www.instagram.com/Tookea.voyage/">
            Instragram @Tookea.voyage
          </a>{" "}
          <br />
          <a href="https://www.youtube.com/channel/UCtCIWh4mAL94llfGjAExuTA">
            Youtube Tookea Voyage
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
          <b>Les voyageurs</b> : Les personnes comme vous et moi, qui
          recherchent un voyage et qui ne demandent qu'à partir.
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          <b>Les hébergeurs</b> : Etablissements de voyage ou toute personne
          louant un hébergement (chambres d'hôtes, airbnb, hôtel, hébergements
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
          ajout d'une interface voyageur (NuxtJS/Firebase), une interface admin
          pour valider les hébergements publiés (pas décidé surement
          React/Firebase) et d'un centre d'aide (Strapi/NextJS) pour 2021-2022
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
          Tookea offre uniquement des voyages en France et en voiture
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          Beaucoup de points sont à retravailler et à rediscuter, nous sommes
          ouvert à toute proposition et pressés d'avoir ton regard neuf sur le
          projet
        </Typography>
        <Typography
          variant="subtitle2"
          align="center"
          style={{ marginBottom: 20, fontWeight: "bold" }}
          color="primary"
        >
          Tookea est une association à loi 1901 depuis le 8 janvier 2021.
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
          Tookea est un projet porté par une équipe formidable. 💕
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          Globalement, l'équipe est constituée d'étudiants d'Ynov Nantes de tous
          niveaux. Cependant, étant une association nous avons des membres "non
          Ynov" principalement des amis ou de la famille qui nous aident dans le
          projet mais qui sont moins présent. Nous prenons aussi des stagiaires
          que ce soit des personnes d'Ynov ou d'ailleurs.
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 20, fontWeight: "bold" }}
          color="textPrimary"
        >
          En 2020-2021, l'équipe était constituée de 15 personnes d'Ynov et
          environ 4 personnes hors-Ynov.
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 20 }}
          color="textPrimary"
        >
          Les membres du pôle audiovisuel Tookea vont créer leur propre équipe,
          Tookea Studio, on ne va donc pas vous les présenter ici, même si nous
          serons amenés à travailler régulièrement avec eux.
        </Typography>
        <CustomButton
          onClick={() => setShowDetails(true)}
          variant="outlined"
          color="primary"
          style={{ marginBottom: 20 }}
        >
          Découvrir l'équipe en détail
        </CustomButton>
        {showDetails && (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginTop={5}
          >
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
              Ces membres Tookea quittent le projet Ydays mais restent dans
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
              Fermer le détail
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
