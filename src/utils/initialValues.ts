export interface ValuesType {
  firstName: string;
  lastName: string;
  prom: "B1" | "B2" | "B3" | "M1" | "M2" | "";
  domain: "info" | "market-com" | "audio" | "design" | "";
  old: "oui" | "non";
  teamOK: boolean;
  projectOK: boolean;
  missionDevMobile: boolean;
  missionAutre: string;
  missionDevMobileSecu: boolean;
  missionDevWebVue: boolean;
  missionDevWebReact: boolean;
  missionSEO: boolean;
  missionComManager: boolean;
  missionUXUI: boolean;
  missionCommercial: boolean;
  missionCDP: boolean;
  why: string;
  flutter: "oui" | "non";
  flutterTime: string;
  firebase: "oui" | "non";
  vueJS: "oui" | "non";
  react: "oui" | "non";
  javascript: "0" | "1" | "2" | "3";
  nuxtORnext: "oui" | "non";
  strapi: "oui" | "non";
  vueJSTime: string;
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
}

export const initialValues: ValuesType = {
  firstName: "",
  lastName: "",
  prom: "",
  domain: "",
  old: "non",
  teamOK: false,
  projectOK: false,
  missionDevMobile: false,
  missionAutre: "",
  missionDevMobileSecu: false,
  missionDevWebVue: false,
  missionDevWebReact: false,
  missionSEO: false,
  missionComManager: false,
  missionUXUI: false,
  missionCommercial: false,
  missionCDP: false,
  why: "",
  flutter: "non",
  flutterTime: "",
  firebase: "non",
  vueJS: "non",
  react: "non",
  javascript: "0",
  nuxtORnext: "non",
  strapi: "non",
  vueJSTime: "",
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
};

export default initialValues;
