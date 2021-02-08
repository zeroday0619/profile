import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-End',
  items: [
    {
      title: 'Python',
      level: 3,
    },
    {
      title: 'Kotlin',
      level: 2,
    },
    {
      title: 'Go',
      level: 2,
    },
    {
      title: 'Node.js',
      level: 2,
    },
    {
      title: 'Typescript',
      level: 2,
    },
    {
      title: 'Dart',
      level: 1,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'Redis',
      level: 2,
    },
    {
      title: 'MongoDB',
      level: 2,
    },
    {
      title: 'MySQL',
      level: 1,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-End',
  items: [
    {
      title: 'javascript',
      level: 2,
    },
    {
      title: 'HTML/CSS',
      level: 1,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'IDE + Tools',
  items: [
    {
      title: 'Pycharm',
    },
    {
      title: 'IntelliJ',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'Vim',
    },
    {
      title: 'Git',
    },
    {
      title: 'Ubuntu',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
