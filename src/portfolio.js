const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'TauGroup.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'TauGroup',
  role: '@ Texas A&M University',
  description:
    'We are a dynamic, diverse, and interdisciplinary research group from the Visual Computing and Computational Media Section in the School of Performance, Visualization & Fine Arts at Texas A&M University. Our group develops numerical and machine learning algorithms and tools to enable and accelerate digital transformation (DX) for a sustainable society.',
  resume: 'https://taugroup.github.io/',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Digital Twin',
  'Data Curation', 'Internet of Things (IoT)',
  'Scientific Machine Learning (SciML)', 'Machine Learning (ML)', 'Deep Learning (DL)',
  'Scientific Visualization (SciViz)', '3D Modeling', 'VR/AR',
  'Geospatial Analysis', 'Signal Processing',
  'Natural Language Processing (NLP)',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'taugroup@tamu.edu',
}

export { header, about, projects, skills, contact }
