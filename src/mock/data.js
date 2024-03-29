import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Wade Barrie | Web Development, Design and Hosting',
  lang: 'en',
  description: "I'm a Vancouver-based Web Developer with a focus on small business and e-commerce.",
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm",
  name: 'Wade.',
  subtitle: 'A Vancouver-based web developer focusing on small business and e-commerce.',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'wade-01.jpg',
  paragraphOne:
    'My name is Wade, a former long-haul trucker turned web developer. I have a passion for solving problems and building websites, and I am always looking for new experiences and opportunities.',
  paragraphTwo:
    'I offer a full suite of services from web hosting, maintenance, web design, and development.',
  paragraphThree: 'Feel free to contact me for a free quote or to discuss your project.',
  btn: 'Email Me',
  email: 'wade@wbdesigns.ca',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'nsc-01.jpg',
    title: 'North Shore Commissary',
    info:
      'Ryan approached me when he was in the process of opening his Commissary Kitchen in North Vancouver. He needed a website to showcase his space and inform potential customers. He needed something solid and reliable to make his startup a success.',
    info2:
      'This project is ReactJS based and deployed to Netlify which makes for clean and reliable site.',
    url: 'https://northshorecommissary.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'am-01.jpg',
    title: 'AshleyMcCloud.com',
    info:
      "Ashley wasn't happy with the limitations of Squarespace so she approached me to design and deploy something that would feel clean and modern, but allow for more customizations.",
    info2: 'This site was built using Gatsby with Contentful CMS.',
    url: 'https://ashley-mccloud.netlify.app',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'nsc-togo.jpg',
    title: 'NSC Cafe',
    info: 'Current work in progress. North Shore Commissary is opening a cafe!',
    info2: 'Check back for updates, estimated launch is Jan 2022.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'westbound.jpg',
    title: 'Westbound and Down Property Services',
    info:
      'A local startup needed a website that would showcase their services and completed projects.',
    info2: 'This is a Wordpress site deployed to the clients hosting server.',
    url: 'https://www.westboundanddown.ca',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Questions? Shoot me a message!',
  btn: 'Email Me',
  email: 'wade@wbdesigns.ca',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/wadebarrie/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/wadebarrie',
    },
  ],
};
// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
