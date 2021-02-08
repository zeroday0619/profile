import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: 'Team NetChoice',
      position: 'Java (Kotlin) & DevOps Developer',
      startedAt: '2020-10',
      descriptions: ['Systems Engineering and DevOps', 'Minecraft Plugin 개발'],
      skillKeywords: ['Java', 'Kotlin', 'Ubuntu', 'DevOps', 'Git'],
    },
    {
      title: 'Stella IT (Team)',
      position: 'Python Developer',
      startedAt: '2020-07',
      endedAt: '2021-01',
      descriptions: ['Xen API over RESTfull API 개발'],
      skillKeywords: ['Python', 'FastAPI', 'Git'],
    },
  ],
};

export default experience;
