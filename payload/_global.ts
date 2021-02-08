import favicon from '../asset/favicon.ico';
import previewImage from '../asset/profile.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = 'Profile: Euiseo Cha';
const description = "This is Python Developer Euiseo Cha's Resume. Thank you";

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'OpenGraph Image profile.jpg',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Euiseo',
        lastName: 'Cha',
        username: 'zeroday0619',
        gender: 'male',
      },
    },
  },
};
