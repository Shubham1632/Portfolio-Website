// Single source of truth for project data.

export type FilterKey = 'all' | 'web' | 'browser' | 'blockchain';

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
];

export const PROJECT_COUNT = PROJECTS.length;
