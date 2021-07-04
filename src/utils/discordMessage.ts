import { FormikValues } from "formik";
import {
  transformDomain,
  valueMissionToTab,
  valuesGitToString,
  valuesJSToString,
  valueslinkDesignDevToString,
} from "./valuesToString";

const markdown = (values: FormikValues) => `
  *${values.prom} ${transformDomain(values.domain)}*

  Les missions que tu veux faire : 
  ${valueMissionToTab(values).map(
    (mission) => `- ${mission}   
  `
  )}
  ${
    values.old === "non" &&
    (values.missionDevMobile || values.missionDevMobileSecu) &&
    `**Développeur.se mobile / cybersécurité**
    Tu as déjà fait du Flutter : ${values.flutter} ${values.flutterTime}
    Tu as déjà utilisé Firebase : ${values.firebase}
    D'après toi, ton niveau de git : ${valuesGitToString(values.git)}
    Tu as déjà travailler avec jira : ${values.jira}
    Tu as l'habitude de documenter ton code : ${values.doc}
    `
  }
  ${
    values.old === "non" &&
    (values.missionDevWebVue || values.missionDevWebReact) &&
    `**Développeur.se web Vue/React**
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
    `
  }
  ${
    values.old === "non" &&
    values.missionUXUI &&
    `**Design**
    D'après toi, ton niveau en javascript : ${valuesJSToString(
      values.javascript
    )}
    Team XD ou team Figma : ${values.xdORfigma}
    Tu as déjà realisé des prototypes avec Figma : ${values.proto}
    Tu connais la différence entre UX et UI : ${values.diffUXUI}
    Tes outils de veille graphique : ${values.veille}
    Les developpeurs pour toi : ${valueslinkDesignDevToString(
      values.linkDesignDev
    )}
    `
  }
`;

export default markdown;
