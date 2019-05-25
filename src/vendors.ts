export interface IVendor {
  organization: string;
  product: string;
  jdkDownloadLink: string;
}

const VENDORS: IVendor[] = [
  {
    organization: "Oracle",
    product: "HotSpot",
    jdkDownloadLink:
      "https://adoptopenjdk.net/releases.html?variant=openjdk11&jvmVariant=hotspot"
  },
  {
    organization: "IBM/Eclipse",
    product: "OpenJ9",
    jdkDownloadLink:
      "https://adoptopenjdk.net/releases.html?variant=openjdk11&jvmVariant=openj9"
  },
  {
    organization: "Amazon",
    product: "Corretto",
    jdkDownloadLink: "https://aws.amazon.com/corretto/"
  }
];

export default VENDORS;
