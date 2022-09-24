import { FormikValues } from "formik";
import {
  transformDomain,
  valueMissionToTab,
  valuesChefAgileToString,
  valuesGitToString,
  valuesJSToString,
  valueslinkDesignDevToString,
  valuesOrthoToString,
} from "./valuesToString";

const resultDevWebBackNode = (values: FormikValues) => {
  if (values.old === "oui" || !values.missionDevWebBackNode) {
    return "";
  }
  return `**Développeur.se mobile / cybersécurité**
    Tu as déjà fait du Flutter : ${values.flutter} ${values.flutterTime}
    Tu as déjà utilisé Firebase : ${values.firebase}
    D'après toi, ton niveau de git : ${valuesGitToString(values.git)}
    Tu as déjà travailler avec jira : ${values.jira}
    Tu as l'habitude de documenter ton code : ${values.doc}
    Tu as déjà fait de l'intégration continue : ${values.intecontinue}
    Tu as déjà déployé sur un store : ${values.store}
    Tu as des compétences en cybersécurité: ${values.cybersecu_competences}
    `;
};

const resultDevWeb = (values: FormikValues) => {
  if (
    values.old === "oui" ||
    (!values.missionDevWebFrontSite && !values.missionDevWebFrontApp)
  ) {
    return "";
  }
  return `**Développeur.se web Vue/React**
    D'après toi, ton niveau en javascript : ${valuesJSToString(
      values.javascript
    )}
    Tu as l'habitude de découper ton code en composants : ${values.composants}
    Tu as déjà utilisé VueJS : ${values.vueJS} ${values.vueJSTime}
    Tu as déjà utilisé React : ${values.react} ${values.reactTime}
    Tu as déjà utilisé NuxtJS ou NextJS : ${values.nuxtORnext}
    Tu as déjà utilisé Strapi ou un autre CMS Headless: ${values.strapi} ${
    values.otherStrapi
  }
    Tu as déjà utilisé Firebase : ${values.firebase}
    D'après toi, ton niveau de git : ${valuesGitToString(values.git)}
    Tu as déjà travaillé avec jira : ${values.jira}
    Tu as l'habitude de documenter ton code : ${values.doc}
    Tu as déjà utilisé des librairies de composants UI : ${values.libWeb}
    Tu connais les StoryBook : ${values.storyBook}
    `;
};
const resultChef = (values: FormikValues) => {
  if (!values.missionCDP) {
    return "";
  }
  return `**Chef de projet**
  Tu as déjà été Chef de projet : ${values.chef}
  Tu es à l'aise avec les méthodes agiles : ${valuesChefAgileToString(
    values.chefAgile
  )}
  Tu sais utiliser Jira : ${values.chefJira}
  Tu sais utiliser AirTable : ${values.chefAirtable}
  Tu as déjà réalisé un cahier des charges : ${values.chefCDC}
  Tes idées pour la communication entre équipes : ${values.chefComm}
  Tes idées pour la montée en compétences : ${values.chefMontee}
  Ce qui te plait dans le rôle de chef de projet : ${values.chefLike}
  Tes actions si un membre n'est pas investi : ${values.chefInvest}
  Ton adaptation dans l'équipe : ${values.chefAdapt}
  Ton action si un membre n'a rien fait en 1 semaine : ${values.chefPiege}
  Les posts que tu connais chez Tookea : ${values.chefPosts}
  Ton action pour l'implication des membres : ${values.chefImpl}
  Ton avis sur les deadlines : ${values.chefDeadlines}
  `;
};
const resultDesign = (values: FormikValues) => {
  if (values.old === "oui" || !values.missionUXUI) {
    return "";
  }
  return `**Design**
  D'après toi, ton niveau en javascript : ${valuesJSToString(values.javascript)}
  Team XD ou team Figma : ${values.xdORfigma}
  Tu as déjà realisé des prototypes avec Figma : ${values.proto}
  Tu connais la différence entre UX et UI : ${values.diffUXUI}
  Tes outils de veille graphique : ${values.veille}
  Les developpeurs pour toi : ${valueslinkDesignDevToString(
    values.linkDesignDev
  )}
  Ton avis sur l'identité visuelle de Tookea : ${values.idVisuelle}
  Tu travailles avec des grilles : ${values.grilles}
  Tu connais l'Atomic Design : ${values.atomicDesign}
  Tu as déjà utilisé le design System : ${values.designSystem}
  Tu utilises les variants sur Figma : ${values.variantsFigma}
  Tu réalises tes illustrations : ${values.illuDesign}
  Le lien vers tes travaux : ${values.lienDesign}
  `;
};

const resultSEO = (values: FormikValues) => {
  if (values.old === "oui" || !values.missionSEO) {
    return "";
  }
  return `**SEO**
    Expérience en SEO : ${values.seoXP}
    Les outils que tu utilises en SEO : ${values.toolsSEO}
    Tu sais ce qu'est une balise title et une meta description ? : ${values.meta}
    Tu sais ce qu'est une et à quoi sert un robots.txt et un sitemap : ${values.sitemap}
    3 mots qui permettrait de bien référencer Tookea : ${values.keywords}
    Pour toi quelles sont les cibles (le type d'utilisateur visé) de Tookea ?
    : ${values.target}
    `;
};

const resultCom = (values: FormikValues) => {
  if (values.old === "oui" || !values.missionComManager) {
    return "";
  }
  return `**Comunity Manager**
    Rigoureux.euse en orthographe : ${valuesOrthoToString(values.ortho)}
    Pour toi, c'est important de planifier ses publications ? : ${
      values.planningRS
    }
    Sur quel réseau social es-tu le plus à l'aise ? : ${values.RSfav}
    Qu'est ce que tu penses de notre feed insta (posts, stories) : ${
      values.avisInsta
    }
    Donne nous 3 hashtag que tu peux utiliser sous une publication Tookea : ${
      values.hashtag
    }
    Tu as déjà utilisé la suite Adobe ? (surtout InDesign et Illustrator) : ${
      values.suiteAdobe
    }
    Pour toi quelles sont les cibles (le type d'utilisateur visé) de Tookea ?
    : ${values.target}
  `;
};

const resultQuestions = (values: FormikValues) => {
  return `**Questions**
    Tes points forts : ${values.strongPoints}
    Tu veux venir chez Tookea pour : ${values.why}
    Tu préfères travailler plutot : ${values.workWhen}
    Tu as une alternance ou un job étudiant ? : ${values.jobAlt}
    Gérer ton temps ou deadlines ? : ${values.deadlines}
    Autonome ou tu as besoin de qqn pour t'aider et te motiver ? : ${values.autonome}
    Travailler seul.le ou en équipe ? : ${values.workInTeam}
    Tu connais déjà qqn dans l'équipe ? : ${values.knowTeam}
    Chercher de son coté ou demander de l'aide ? : ${values.needHelp}
    Ce que tu attends des chef.fe.s de projet : ${values.attendesCDP}
    Ce que tu veux apprendre chez Tookea : ${values.learn}
    Tu connais ou pratique SCRUM : ${values.knowScrum}
    Tu connais des hébergeurs : ${values.knowHebergeur}
    `;
};

const resultChanges = (values: FormikValues) => {
  if (values.old === "non") {
    return "";
  }
  return `**Changements**
      Quels sont les changements que tu souhaites pour cette année ? : ${values.changes}
    `;
};

const markdown = (values: FormikValues) => `
  *${values.prom} ${transformDomain(values.domain)}*

  Les missions que tu veux faire : 
  ${valueMissionToTab(values).map(
    (mission) => `- ${mission}
  `
  )}
  ${resultDevWebBackNode(values)}
  ${resultDevWeb(values)}
  ${resultDesign(values)}
  ${resultSEO(values)}
  ${resultCom(values)}
  ${resultChef(values)}
  ${resultQuestions(values)}
    ${resultChanges(values)}
`;

export default markdown;
