import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '경희고등학교',
      subTitle: '이과',
      startedAt: '2019-03',
      // endedAt: '2010-02',
    },
    {
      title: '고려대학교 사범대학 부속중학교',
      subTitle: '졸업',
      startedAt: '2016-03',
      endedAt: '2019-02',
    },
  ],
};

export default education;
