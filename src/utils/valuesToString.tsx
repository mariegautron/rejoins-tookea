import { FormikValues } from "formik";
import missionsTab from "../data/missions";

export const transformDomain = (
  domain: "info" | "market-com" | "audio" | "design" | ""
) => {
  switch (domain) {
    case "info":
      return "Informatique";
    case "market-com":
      return "Marketing & Communication";
    case "audio":
      return "Audiovisuel";
    default:
      return "";
  }
};

export const valueMissionToTab = (values: FormikValues) => {
  let tabMisson: String[] = [];
  missionsTab.map((mission) => {
    if (values[`mission${mission.id}`]) {
      tabMisson.push(mission.title);
    }
  });
  if (values.missionAutre) {
    tabMisson.push(values.missionAutre);
  }
  return tabMisson;
};

export const valuesGitToString = (level: "0" | "1" | "2" | "3") => {
  switch (level) {
    case "0":
      return "0, jamais utilisé";
    case "1":
      return "1, je l'ai déjà utilisé mais seul (pas de travail de groupe)";
    case "2":
      return "2, je connais la base (add, commit, push)";
    case "3":
      return `3, je n'ai pas peur des conflits et je sais les résoudre aisement`;
  }
};

export const valuesJSToString = (level: "0" | "1" | "2" | "3") => {
  switch (level) {
    case "0":
      return "0, jamais utilisé";
    case "1":
      return "1, j'ai eu quelques cours";
    case "2":
      return "2, je suis à l'aise";
    case "3":
      return `3, je l'utilise régulierement (alternance ou stage)`;
  }
};

export const valueslinkDesignDevToString = (
  linkDesignDev: "berk" | "com" | "html" | ""
) => {
  switch (linkDesignDev) {
    case "berk":
      return "Je ne m'interesse pas au développement";
    case "com":
      return "La communication avec eux est indispensable";
    case "html":
      return "En tant que designer, il faut savoir un peu développer et je connais les bases (html, css)";
    default:
      return "";
  }
};
