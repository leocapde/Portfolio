import todolist from '../assets/projects/todolist-icon.png';
import portfolio from '../assets/projects/portfolio-icon.png';

export const projectsList = [
  {
    title: 'ToDo List',
    image: `${todolist}`,
    alt: 'icon todolist',
    description: `Liste permettant de gérer ses tâches à faire / faites. Les tâches d'exemple sont récupérées depuis l'api "jsonplaceholder".`,
    url: 'https://leocapde.github.io/Todo-list/',
    github: 'https://github.com/leocapde/Todo-list',
    frameworks: ['HTML', 'CSS', 'JS', 'Bootstrap-5'],
  },
  {
    title: 'Portfolio',
    image: `${portfolio}`,
    alt: 'icon portfolio',
    description:
      `Création de mon portfolio afin d'y présenter mes projets. Le style est volontairement très inspiré de celui de Netflix.`,
      url: 'https://leocapde.github.io/Portfolio/',
      github: 'https://github.com/leocapde/Portfolio',
      frameworks: ['HTML', 'CSS', 'JS', 'Bootstrap-5', 'React', 'Sass'],
  },
  // {
  //   title: 'Test 1',
  //   image: '',
  //   alt: '',
  //   description:
  //     "Les projets tests sont là uniquements afin d'aider à visualiser le rendu (responsive) des différents composants",
  //   url: '',
  //   github: '',
  //   frameworks: [],
  // },
  // {
  //   title: 'Test 2',
  //   image: '',
  //   alt: '',
  //   description:
  //     "Les projets tests sont là uniquements afin d'aider à visualiser le rendu (responsive) des différents composants",
  //   url: '',
  //   github: '',
  //   frameworks: [],
  // },
];
