import { FormikValues } from "formik";
import {
  transformDomain,
  valueMissionToTab,
  valuesGitToString,
  valuesJSToString,
  valueslinkDesignDevToString,
} from "./valuesToString";

const resultDevMobile = (values: FormikValues) => {
  if (
    values.old === "oui" ||
    (!values.missionDevMobile && !values.missionDevMobileSecu)
  ) {
    return "";
  }
  return `**Développeur.se mobile / cybersécurité**
    Tu as déjà fait du Flutter : ${values.flutter} ${values.flutterTime}
    Tu as déjà utilisé Firebase : ${values.firebase}
    D'après toi, ton niveau de git : ${valuesGitToString(values.git)}
    Tu as déjà travailler avec jira : ${values.jira}
    Tu as l'habitude de documenter ton code : ${values.doc}
    `;
};

const resultDevWeb = (values: FormikValues) => {
  if (
    values.old === "oui" ||
    (!values.missionDevWebVue && !values.missionDevWebReact)
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
    Tu as déjà travailler avec jira : ${values.jira}
    Tu as l'habitude de documenter ton code : ${values.doc}
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
  `;
};

const resultQuestions = (values: FormikValues) => {
  if (values.old === "oui") {
    return "";
  }
  return `**Questions**
    T'es points forts : ${values.strongPoints}
    Tu veux venir chez Tara pour : ${values.why}
    Tu préfères travailler plutot : ${values.workWhen}
    Tu as une alternance ou un job étudiant ? : ${values.jobAlt}
    Gérer ton temps ou deadlines ? : ${values.deadlines}
    Autonome ou tu as besoin de qqn pour t'aider et te motiver ? : ${values.autonome}
    Travailler seul.le ou en équipe ? : ${values.workInTeam}
    Tu connais déjà qqn dans l'équipe ? : ${values.knowTeam}
    Chercher de son coté ou demander de l'aide ? : ${values.needHelp}
    Ce que tu attends des chef.fe.s de projet : ${values.attendesCDP}
    Ce que tu veux apprendre chez Tara : ${values.learn}
    Tu connais ou pratique SCRUM : ${values.knowScrum}
    Tu connais des hébergeurs : ${values.knowHebergeur}
    `;
};

const markdown = (values: FormikValues) => `
  *${values.prom} ${transformDomain(values.domain)}*

  Les missions que tu veux faire : 
  ${valueMissionToTab(values).map(
    (mission) => `- ${mission}
  `
  )}
  ${resultDevMobile(values)}
  ${resultDevWeb(values)}
  ${resultDesign(values)}
  ${resultQuestions(values)}
`;

export default markdown;
