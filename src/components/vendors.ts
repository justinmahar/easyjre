export interface IVendor {
  organization: string;
  product: string;
  jdkDownloadLink: string;
}

const VENDORS: IVendor[] = [
  {
    organization: 'Oracle',
    product: 'HotSpot',
    jdkDownloadLink: 'https://adoptopenjdk.net/releases.html?jvmVariant=hotspot',
  },
  {
    organization: 'IBM/Eclipse',
    product: 'OpenJ9',
    jdkDownloadLink: 'https://adoptopenjdk.net/releases.html?jvmVariant=openj9',
  },
  {
    organization: 'Amazon',
    product: 'Corretto',
    jdkDownloadLink: 'https://aws.amazon.com/corretto/',
  },
];

export default VENDORS;
