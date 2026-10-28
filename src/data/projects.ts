// Single source of truth for project data.

export type FilterKey =
  | 'all'
  | 'web'
  | 'browser'
  | 'blockchain'
  | 'android'
  | 'ios';

export interface Project {
  title: string;
  tagline?: string;
  description: string;
  tags: string[];
  categories: Exclude<FilterKey, 'all'>[];
  githubUrl: string;
  liveUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Casa Gurugu',
    tagline: 'Production resort website',
    description:
      'Built a production full-stack website as the primary digital presence for a resort, with booking, blog, house tour, and property history experiences. Integrated Stripe payments and Sanity CMS so staff could manage content independently.',
    tags: ['Next.js', 'TypeScript', 'Sanity', 'Stripe'],
    categories: ['web'],
    githubUrl: 'https://github.com/guruguhotel/gurugu-web',
    liveUrl: 'https://casagurugu.com/',
  },
  {
    title: 'Carbon Tracker',
    tagline: 'Browser carbon-footprint analytics',
    description:
      'Developed a Chrome extension that monitors web browsing and ChatGPT usage, provides comparative analytics, and generates daily, weekly, and monthly reports with CSV export. Reached 150+ active users.',
    tags: ['React', 'Tailwind CSS', 'Manifest V3', 'TypeScript'],
    categories: ['web', 'browser'],
    githubUrl: 'https://github.com/Shubham1632/CarbonTracker',
    liveUrl:
      'https://chromewebstore.google.com/detail/carbon-tracker/pnppibgcmfncfhjfjdkmibdmdhaadahc',
  },
  {
    title: 'Dauth',
    tagline: 'Blockchain SSO for Node.js',
    description:
      'Implemented an npm package that adds blockchain single sign-on to Node.js applications, reducing authentication development effort and providing a transparent alternative to traditional authentication. Received 200+ downloads in its first week.',
    tags: ['Hardhat', 'Solidity', 'npm', 'Node.js', 'JavaScript'],
    categories: ['blockchain'],
    githubUrl: 'https://github.com/Shubham1632/Dauth',
    liveUrl: 'https://www.npmjs.com/package/dauth-sso',
  },
  {
    title: 'PriceFeed',
    tagline: 'Real-time cryptocurrency prices',
    description:
      'Implemented a Manifest V3 Chrome extension that uses the CoinGecko API to provide a real-time price feed for the top 10 cryptocurrencies.',
    tags: ['Manifest V3', 'JavaScript', 'HTML', 'CSS', 'CoinGecko API'],
    categories: ['web', 'browser'],
    githubUrl: 'https://github.com/Shubham1632/FeedPrice',
    liveUrl:
      'https://chrome.google.com/webstore/detail/pricefeed/aohcnddhbappclckfieileicclbpadnk',
  },
  {
    title: 'VerdeBlock',
    tagline: 'Blockchain real estate platform POC',
    description:
      'Developed a proof of concept for a blockchain-based real estate platform. The idea was selected for TEF Ignition, exploring how decentralized technology could improve transparency and access in real estate.',
    tags: ['Blockchain', 'Real Estate', 'POC'],
    categories: ['blockchain'],
    githubUrl: 'https://github.com/Shubham1632/Verde-Block',
  },
  {
    title: 'SedutoSi',
    tagline: 'Centralized cinema booking mobile app',
    description:
      'Built a cross-platform mobile application for Android and iOS as part of a project at Politecnico di Milano. SedutoSi brings Milan’s fragmented cinema booking market into one centralized experience, making it easier for users to discover screenings and book tickets.',
    tags: ['React Native', 'Expo', 'NativeWind', 'TypeScript'],
    categories: ['android', 'ios'],
    githubUrl: 'https://github.com/Shubham1632/SedutoSi',
  },
];

export const PROJECT_COUNT = PROJECTS.length;
