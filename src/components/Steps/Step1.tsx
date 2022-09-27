/* eslint-disable jsx-a11y/iframe-has-title */
import { Box, Chip, Typography } from "@material-ui/core";
import { Field } from "formik";
import { CheckboxWithLabel } from "formik-material-ui";
import React, { useState } from "react";
import win from "../../assets/win.jpeg";
import teamPic from "../../assets/team.jpg";
import content from "../../data/content";
import { team, teamLost } from "../../data/team";
import CardEquipe from "../CardTeam";
import CustomButton from "../CustomButton";
import { FormikStep } from "../FormikStep";
import YoutubeVideo from "../YoutubeVideo";

function Step1() {
  const contentWhatIsTookea = content[1]
  const [showDetails, setShowDetails] = useState(false);

  return (
    <FormikStep label={contentWhatIsTookea.stepLabel}>
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
          {contentWhatIsTookea.title}
        </Typography>
        <Typography
          variant="h4"
          component="h1"
          align="center"
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          ✨ L'association
        </Typography>
        <YoutubeVideo youtubeId="Zxu7ASciwqU" />
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 50, marginTop: 50 }}
          color="textPrimary"
        >
          Tookea est une association à but non lucratif qui à pour objet le <strong>développement de plateformes numériques</strong> et l'organisation d'évenement mettant en relations des <strong> personnes souhaitant voyager en France</strong> avec des <strong> établissements de voyage français</strong>. Aujourd'hui Tookea possède 9 membres et nous avons besoin de toi pour développer enfin notre premier service de cartographie de bivouac de France et le promouvoir !
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          Tookea est né sous le nom de Tara en sein des projet Ydays en 2020. Nous avons d'ailleurs gagner le prix du projet Ydays coup de coeur 2020-2021.
        </Typography>
        <img src={win} alt="logo" style={{
          width: '100%'
        }} />



        <Typography
          variant="h5"
          component="h1"
          align="center"
          style={{ marginBottom: 20, marginTop: 50, fontWeight: "bold" }}
          color="primary"
        >
          Les applications Tookea
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 20 }}
          color="textPrimary"
        >
          <b> Application mobile </b> : Une partie voyageur pour réserver un voyage en France (en cours)
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          <b> Application web </b> : Interface pour les établissements de voyage afin d'ajouter leurs hébergements et suivre leurs réservations (en cours)
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 20 }}
          color="textPrimary"
        >
          <b> Landing page </b> : présentation de Tookea site web : <a href="https://www.tookea.fr/">Site Tookea</a> <br />
          <Chip style={{ marginTop: 10 }} label="Ici, on a besoin de toi !" color="primary" variant="outlined" />
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 20 }}
          color="textPrimary"
        >
          <b> Application bivouac </b>  : Cartoraghie des emplacements de bivouac autorisé en France : <a href="https://bivouac-app.vercel.app/">Application actuelle</a> <br />
          <Chip style={{ marginTop: 10 }} label="Ici, on a besoin de toi !" color="primary" variant="outlined" />
        </Typography>
        <Typography
          variant="subtitle2"
          align="center"
          style={{
            padding: 20,
            marginTop: 50,
            backgroundColor: "#FAF3F6",
          }}
          color="primary"
        >
          Pour en savoir un peu plus, tu peux aller voir ici : <br />
          <a href="https://www.tookea.fr//">Site Tookea</a> <br />
          <a href="https://www.instagram.com/tookea.voyage/">
            Instragram @tookea.voyage
          </a>
          <br />
          <a href="https://www.linkedin.com/company/tookea/mycompany/?viewAsMember=true">
            Linkedin Tookea
          </a>
          <br />
          <a href="https://www.youtube.com/channel/UC8NCWwjTmsrauc-ogHsDO5A">
            Youtube Tookea Studio
          </a>
        </Typography>


      </Box>
      <Box
        paddingBottom={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
        style={{ marginBottom: 50 }}
      >
        <Typography
          variant="h4"
          component="h1"
          align="center"
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          ✨ Les objectifs de cette année
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          Notre objectif est que Tookea soit connu et reconnu en tant qu’association présentant une cartographie des lieux de bivouac autorisés en France.
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          Nous souhaitons une équipe qui <strong> développe une application web et communique sur la sortie de cette application </strong> (remaniement du site web pour mettre en avant les bivouacs, rédaction de pages web / posts réseaux sociaux expliquant ce qu’est un bivouac, présentant l’application ou un lieu de bivouac etc.).
        </Typography>
        <Typography
          variant="body2"
          align="center"

          color="textPrimary"
        >
          L’équipe interne de l’association se charge d’appeler les mairies et d’alimenter la base de données de bivouac français autorisé. Cependant, il faudra dans l’application web une interface afin que l'équipe interne puisse compléter cette base de données.
        </Typography>

      </Box>
      <Box
        paddingBottom={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
        style={{ marginBottom: 50 }}
      >
        <Typography
          variant="h4"
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
          Globalement, l'équipe est constituée d'anciens étudiants d'Ynov Nantes de tous
          niveaux.
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 20, fontWeight: "bold" }}
          color="textPrimary"
        >
          Les deux années précédentes, l'équipe était constituée de 15 personnes (+ 8 personnes chez Tookea Studio en 2021-2022)
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
              Les autres membres de l'association que tu risques de croiser 💕
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
