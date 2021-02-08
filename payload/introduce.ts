import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '프로그래밍에 관심이 많은 고등학생입니다.',
    '특히 asynchronous / object oriented programming 에 관심이 많은 편입니다.',
    'I am a high school student, interested in programming.',
    'particularly interested in asynchronous and object oriented programming.',
  ],
  sign: 'EuiSeo Cha',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
