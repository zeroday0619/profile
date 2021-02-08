import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Net Choice 마인크래프트 서버 Plugin 개발',
      startedAt: '2020-10',
      where: 'Team Net Choice',
      descriptions: [
        { content: '핵심 플러그인 개발 및 DevOps' },
        {
          content: '[Net Choice 야생] 웹 지도 리버스 프록시 서버 구축',
        },
        {
          content: '[Net Choice 야생] Coordinates Alarm 플러그인 개발',
        },
      ],
    },
    {
      title: 'XenAPI over RESTfull API 개발 (XenXenXenSe)',
      startedAt: '2020-07',
      endedAt: '2021-01',
      where: 'Stella IT (Team)',
      descriptions: [
        { content: 'Python3.7+' },
        { content: 'FastAPI 도입 및 객체지향 프로그래밍 적용을 위한 Rewrite' },
        { content: '커스텀 로깅 적용 및 예외처리 강화' },
        { content: '(Github Action | CI) 유닛테스트 추가' },
      ],
    },
  ],
};

export default project;
