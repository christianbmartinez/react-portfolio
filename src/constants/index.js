const socialLinks = {
  github: 'https://github.com/christianbmartinez',
  linkedin: 'https://www.linkedin.com/in/cmartinez1089/',
  tiktok: 'https://www.tiktok.com/@coderchris',
  twitter: 'https://twitter.com/_coderchris',
  codepen: 'https://codepen.io/_coderchris',
}

const svgPathVariant1 = {
  open: { d: 'M3.06061 2.99999L21.0606 21' },
  closed: { d: 'M0 9.5L24 9.5' },
}

const svgPathVariant2 = {
  open: { d: 'M3.00006 21.0607L21 3.06064' },
  moving: { d: 'M0 14.5L24 14.5' },
  closed: { d: 'M0 14.5L15 14.5' },
}

const firstVariant = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      delay: 0.5,
    },
  },
  closed: { y: -300, opacity: 0 },
}
const secondVariant = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      delay: 0.5,
    },
  },
  closed: { x: -100, opacity: 0 },
}

const thirdVariant = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      delay: 0.75,
    },
  },
  closed: { x: -100, opacity: 0 },
}

const fourthVariant = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      delay: 1,
    },
  },
  closed: { x: -100, opacity: 0 },
}

const fifthVariant = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      delay: 1.25,
    },
  },
  closed: { x: -100, opacity: 0 },
}

const sixthVariant = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      delay: 1.5,
    },
  },
  closed: { y: 300, opacity: 0 },
}

const portfolioData = [
  {
    title: 'Portfolio Site',
    imgUrl:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    alt: 'Image for christians portfolio site project',
    description:
      'My old portfolio site built with react, bootstrap, and threejs.',
    repo: 'https://github.com/christianbmartinez/cbm_2022',
    href: 'https://preeminent-raindrop-7e0d9e.netlify.app/',
    tags: ['#REACT', '#BOOTSTRAP'],
    id: 1,
  },
  {
    title: 'Colorfill App',
    imgUrl:
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    alt: 'Image for christians colorfill app project',
    description:
      'A css tool that configures text fill animations. Also available on npm.',
    repo: 'https://github.com/christianbmartinez/colorfill',
    href: 'https://codepen.io/_coderchris/pen/KKgyywR',
    tags: ['#CSS VARIABLES', '#JS'],
    id: 2,
  },
  {
    title: 'Full Stack Blog',
    imgUrl:
      'https://plus.unsplash.com/premium_photo-1686041335799-a140e5b3b35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    alt: 'Image for christians full stack blog project',
    description: 'A full stack tech blog written with MVC architecture',
    repo: 'https://github.com/christianbmartinez/tech-blog',
    href: 'https://guarded-ocean-61686-3600ffdf6cf0.herokuapp.com/',
    tags: ['#EXPRESS', '#HANDLEBARS'],
    id: 3,
  },
  {
    title: 'Consulting Site',
    imgUrl:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
    alt: 'Image for christians mmbc website project',
    description:
      "A single page application built with react and tailwind for MMBC's business consulting and tax services.",
    repo: 'https://github.com/christianbmartinez/mmbc',
    href: 'https://www.mmbc.llc/',
    tags: ['#TAILWIND', '#REACT'],
    id: 4,
  },
  {
    title: 'Chattr App',
    imgUrl:
      'https://images.unsplash.com/photo-1679083216051-aa510a1a2c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    alt: 'Image for christians chattrapp project',
    description:
      'A full stack app that lets users chat anonymously, in anonymous chatrooms',
    repo: 'https://github.com/christianbmartinez/chattrapp',
    href: 'https://chattrapp.netlify.app/',
    tags: ['#EXPRESS', '#SOCKETIO'],
    id: 5,
  },
  {
    title: 'Mysteryboard',
    imgUrl:
      'https://images.unsplash.com/photo-1615185990778-a15d7015b41d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
    alt: 'Image for christians mysteryboard project',
    description:
      'A full stack anonymous sharing application that uses mongo db and express for fetching and storing user data.',
    repo: 'https://github.com/christianbmartinez/mysteryboard',
    href: 'https://mysteryboard.herokuapp.com/',
    tags: ['#EXPRESS', '#MONGODB'],
    id: 6,
  },
]

export {
  socialLinks,
  svgPathVariant1,
  svgPathVariant2,
  firstVariant,
  secondVariant,
  thirdVariant,
  fourthVariant,
  fifthVariant,
  sixthVariant,
  portfolioData,
}
