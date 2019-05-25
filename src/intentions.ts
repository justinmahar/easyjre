export interface IIntention {
  name: string;
  display: string;
}

export const STANDARD_JAVA_SE: IIntention = {
  name: "standard-java-se",
  display:
    "I just want a lightweight (~40-60 MB) standard Java SE JRE for a particular JDK. Quick and painless."
};
export const CHOOSE_JDK_MODULES: IIntention = {
  name: "choose-jdk-modules",
  display:
    "Let me pick and choose from a list which JDK modules are included in my JRE."
};
export const MANUAL_MODULES: IIntention = {
  name: "manual-modules",
  display:
    "I know exactly which modules I need to include in my JRE. I don't need to see a list."
};
export const ALL_OPTIONS: IIntention = {
  name: "all-options",
  display: "I want total control. Show me all the options!"
};

const INTENTIONS: IIntention[] = [
  STANDARD_JAVA_SE,
  CHOOSE_JDK_MODULES,
  MANUAL_MODULES,
  ALL_OPTIONS
];

export default INTENTIONS;
