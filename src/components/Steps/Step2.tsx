import { Box, CardMedia, Typography } from "@material-ui/core";
import { Field } from "formik";
import { CheckboxWithLabel } from "formik-material-ui";
import React from "react";
import teamPic from "../../assets/team.jpg";
import teamWork from "../../assets/teamwork.jpg";
import video from "../../assets/video.mp4";
import { FormikStep } from "../FormikStep";

function Step2() {
  return (
    <FormikStep label="Pourquoi nous rejoindre ?">
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
          style={{ marginBottom: 50 }}
          color="textPrimary"
        >
          Pourquoi nous rejoindre ?
        </Typography>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/XS3BAMxHkAk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ marginBottom: 20 }}
        ></iframe>
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 20 }}
          color="textPrimary"
        >
          Nous utilisons la méthode SCRUM pour la gestion de projet, dans le but
          d'une amélioration continue du produit et du travail d'équipe.
        </Typography>
        <Typography
          variant="h6"
          align="center"
          style={{ marginBottom: 20 }}
          color="primary"
        >
          Les points d'honneurs
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          style={{ marginBottom: 20, fontWeight: "bold" }}
          color="textPrimary"
        >
          L'ambiance
        </Typography>
        <CardMedia
          component="video"
          image={video}
          controls
          style={{ marginBottom: 20 }}
        />
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 20 }}
          color="textPrimary"
        >
          Tu as envie de travailler dans une bonne ambiance, avec des personnes
          qui deviendront sûrement des amis ? Pour une bonne ambiance, rien de
          mieux qu'un icebreaker le matin, un peu de présentiel si possible et
          un moment de convivialité à chaque fin de Ydays.
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          style={{ marginBottom: 20, fontWeight: "bold" }}
          color="textPrimary"
        >
          Enseignement et montée en compétences
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 20 }}
          color="textPrimary"
        >
          Chez Tookea, nous aimons apprendre et surtout nous avons une soif
          d'excellence. Nous sommes constamment à vouloir nous améliorer, c'est
          pourquoi nous pensons que les différences de niveaux nous
          enrichissent. Il nous tient à cœur d'avoir des personnes de tous
          niveaux pour que chacun monte en compétences et apprenne aussi à
          transmettre ses connaissances. Le manque de connaissances nous importe
          peu. L'important c'est la motivation et l'implication dans le projet.
          Ce que nous voulons c'est une personne qui, quand elle ne sait pas, va
          poser des questions, va chercher de son côté etc.
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          style={{ marginBottom: 20, fontWeight: "bold" }}
          color="textPrimary"
        >
          Le travail d'équipe
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
          style={{ marginBottom: 20 }}
          color="textPrimary"
        >
          Chez Tookea, nous voulons connaître chaque membre afin d'intégrer tout
          le monde au groupe. En connaissant la personnalité et la manière de
          travailler de chacun, nous pouvons adapter notre travail de groupe.
          C'est pourquoi dès le début n’hésite pas à faire savoir si tu
          travailles plutôt le matin ou l'après-midi, si tu préfères travailler
          seul etc. Chaque personne est considérée à part entière et est libre
          de travailler comme il le souhaite, tant que cela n'impacte pas les
          autres, le planning. L'important est que le résultat (de qualité) soit
          présent à la fin.
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          style={{ marginBottom: 20, fontWeight: "bold" }}
          color="textPrimary"
        >
          La pluridisciplinarité
        </Typography>
        <img
          src={teamWork}
          alt="logo"
          width={300}
          style={{ marginBottom: 20 }}
        />
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 20 }}
          color="textPrimary"
        >
          Tu es en info mais tu veux découvrir le design ? Bienvenue ! Nous
          mettons un point d'honneur à ne pas mettre d’étiquettes sur les
          membres de l'équipe. Chaque personne est libre de réaliser le métier
          qu'il souhaite. Cela peut être seulement de découvrir ou de pratiquer
          ou bien, en entendre parler de loin. Cela nous tient à cœur, car dans
          le monde du travail il est important de comprendre les métiers avec
          lesquels on travaille, et c'est toujours apprécié d'avoir plusieurs
          domaines de compétences. C'est pourquoi, chez Tookea, nous avons mis en
          place une journée de Switch ! Qu'est ce que c'est ? Pendant une
          demi-journée, tu travailleras avec le pôle que tu souhaites mais qui
          n'est pas celui dont tu as l'habitude. Et pour le reste de la journée,
          ce sera à toi d'accueillir des membres dans ton domaine et de leur
          présenter ton corps de métier.
        </Typography>
        <Typography
          variant="h6"
          align="center"
          style={{ marginBottom: 20 }}
          color="primary"
        >
          Pour mieux comprendre et pour un peu de culture
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 20, fontWeight: "bold" }}
          color="textPrimary"
        >
          Connais-tu les 4 accords toltèques ?
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginBottom: 20 }}
          color="textPrimary"
        >
          Les 4 accords toltèques ont été expliqué en détail dans un livre de
          Don Miguel Ruiz. Mais comme chez Tookea, on est pas des flèches, voici
          une vidéo qui explique les accords toltèques aux enfants :
          <a href="https://youtu.be/9AmEbXcbPGE">
            Apprends à devenir un chevalier !
          </a>
        </Typography>

        <Field
          component={CheckboxWithLabel}
          type="checkbox"
          name="teamOK"
          Label={{ label: "Oui, je veux rejoindre l'équipe" }}
          required
        />
      </Box>
    </FormikStep>
  );
}

export default Step2;
