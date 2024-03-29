export interface ValuesType {
  firstName: string;
  lastName: string;
  prom: "B1" | "B2" | "B3" | "M1" | "M2" | "";
  domain: "info" | "market-com" | "audio" | "design" | "";
  old: "oui" | "non";
  teamOK: boolean;
  projectOK: boolean;
  missionDevWebBackNode: boolean;
  missionAutre: string;
  missionDevWebFrontSite: boolean;
  missionDevWebFrontApp: boolean;
  missionSEO: boolean;
  missionComManager: boolean;
  missionUXUI: boolean;
  missionCDP: boolean;
  why: string;
  node: "oui" | "non";
  nest: "oui" | "non";
  nodeTime: string;
  firebase: "oui" | "non";
  react: "oui" | "non";
  javascript: "0" | "1" | "2" | "3";
  nuxtORnext: "oui" | "non";
  strapi: "oui" | "non";
  reactTime: string;
  otherStrapi: string;
  git: "0" | "1" | "2" | "3";
  xdORfigma: "XD" | "figma" | "";
  proto: "oui" | "non";
  diffUXUI: "oui" | "non";
  veille: "";
  composants: "oui" | "non";
  jira: "oui" | "non";
  doc: "oui" | "non";
  linkDesignDev: "berk" | "com" | "html" | "";
  strongPoints: string;
  workWhen: string;
  jobAlt: string;
  deadlines: string;
  autonome: string;
  workInTeam: string;
  knowTeam: string;
  needHelp: string;
  attendesCDP: string;
  learn: string;
  knowScrum: string;
  knowHebergeur: "oui" | "non";
  intecontinue: "oui" | "non";
  cybersecu_competences: "oui" | "non";
  idVisuelle: string;
  toolsSEO: string;
  grilles: "oui" | "non";
  atomicDesign: string;
  seoXP: string;
  designSystem: "oui" | "non";
  variantsFigma: "oui" | "non";
  illuDesign: "oui" | "non";
  ortho: "0" | "1" | "2" | "3" | "";
  lienDesign: string;
  meta: "oui" | "non";
  sitemap: "oui" | "non";
  libWeb: "oui" | "non";
  storyBook: "oui" | "non";
  keywords: string;
  planningRS: "oui2" | "oui1" | "oui" | "non" | "";
  chefAgile: "oui" | "non" | "ouiPartie" | "theorie" | "";
  RSfav: string;
  avisInsta: string;
  hashtag: string;
  suiteAdobe: "oui" | "non";
  chefJira: "oui" | "non";
  target: "";
  chefAirtable: "oui" | "non";
  chef: "oui" | "non";
  chefCDC: "oui" | "non";
  chefComm: string;
  chefMontee: string;
  changes: string;
  chefLike: string;
  chefInvest: string;
  chefAdapt: string;
  chefPiege: string;
  chefPosts: string;
  chefImpl: string;
  chefDeadlines: string;
}

export const initialValues: ValuesType = {
  firstName: "",
  lastName: "",
  prom: "",
  domain: "",
  old: "non",
  teamOK: false,
  projectOK: false,
  missionDevWebBackNode: false,
  missionAutre: "",
  missionDevWebFrontSite: false,
  missionDevWebFrontApp: false,
  missionSEO: false,
  missionComManager: false,
  missionUXUI: false,
  missionCDP: false,
  why: "",
  node: "non",
  nodeTime: "",
  nest: "non",
  firebase: "non",
  react: "non",
  javascript: "0",
  nuxtORnext: "non",
  strapi: "non",
  reactTime: "",
  otherStrapi: "",
  git: "0",
  xdORfigma: "",
  proto: "non",
  diffUXUI: "non",
  veille: "",
  composants: "non",
  jira: "non",
  doc: "non",
  linkDesignDev: "",
  strongPoints: "",
  workWhen: "",
  jobAlt: "",
  deadlines: "",
  autonome: "",
  workInTeam: "",
  knowTeam: "",
  needHelp: "",
  attendesCDP: "",
  learn: "",
  knowScrum: "",
  knowHebergeur: "non",
  intecontinue: "non",
  cybersecu_competences: "non",
  idVisuelle: "",
  grilles: "non",
  atomicDesign: "",
  seoXP: "",
  designSystem: "non",
  toolsSEO: "",
  variantsFigma: "non",
  illuDesign: "non",
  ortho: "",
  lienDesign: "",
  meta: "non",
  libWeb: "non",
  sitemap: "non",
  storyBook: "non",
  keywords: "",
  planningRS: "",
  chefAgile: "",
  RSfav: "",
  avisInsta: "",
  hashtag: "",
  suiteAdobe: "non",
  chefJira: "non",
  target: "",
  chefAirtable: "non",
  chef: "non",
  chefCDC: "non",
  chefComm: "",
  chefMontee: "",
  changes: "",
  chefLike: "",
  chefInvest: "",
  chefAdapt: "",
  chefPiege: "",
  chefPosts: "",
  chefImpl: "",
  chefDeadlines: "",
};

export default initialValues;
