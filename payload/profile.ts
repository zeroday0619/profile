import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/profile.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '차의서',
    small: '(zeroday0619)',
  },
  contact: [
    {
      title: 'euiseocha@zeroday0619.dev',
      link: 'mailto:euiseocha@zeroday0619.dev',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'github.com/zeroday0619',
      link: 'https://github.com/zeroday0619',
      icon: faGithub,
    },
    {
      title: 'fb.com/zeroday0619',
      link: 'https://www.facebook.com/zeroday0619',
      icon: faFacebook,
    },
    {
      title: '@zeroday_0619',
      link: 'https://twitter.com/zeroday_0619',
      // icon: faRss,
      icon: faTwitter,
    },
  ],
  notice: {
    title: '휴대전화나 페이스북 메시지 아닌 이메일로 연락 부탁드립니다.',
    icon: faBell,
  },
};

export default profile;
