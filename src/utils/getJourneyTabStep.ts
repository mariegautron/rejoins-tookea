import { FormikValues } from "formik";

const stepsTab = (values: FormikValues) => {
  console.log('values', values)
  let tab = [0];
  if (values.old === "oui") {
    tab.push(3);
    tab.push(4);
    if (values.missionCDP) {
      tab.push(10);
    }
    tab.push(11);
    tab.push(12);
    tab.push(13);
  } else {
    tab.push(1);
    tab.push(2);
    tab.push(3);
    tab.push(4);
    if (values.missionDevWebBackNode) {
      tab.push(5);
    }
    if (values.missionDevWebFrontSite || values.missionDevWebFrontApp) {
      tab.push(6);
    }
    if (values.missionUXUI) {
      tab.push(7);
    }
    if (values.missionSEO || values.missionComManager) {
      tab.push(8);
    }
    if (values.missionComManager) {
      tab.push(9);
    }
    if (values.missionCDP) {
      tab.push(10);
    }
    tab.push(11);
    tab.push(13);
  }
  console.log('tab', tab)
  return tab;
};

export default stepsTab;
