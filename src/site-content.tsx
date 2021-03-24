import { Content } from './contentInterface'
import BLM from './assets/BLM1.webp'
import BLMFIST from './assets/BLMFIST.webp'
import LGBTFLAG from './assets/LGBT.jpg'
import LGBTFLAGWP from './assets/LGBT.webp'
import ARROWOVER from './assets/shortcut-24px.svg'
import SITELOGOWBG from './assets/CUSCwwhite.png'
import SITELOGO from './assets/CUSC500.png'
import EQFL from './assets/EQFL_STACK.png'
import HRC from './assets/HRC.svg'
// eventually i'd like for this content to be pulled from a server, but for now it's hard-coded.

export module SITECONTENT {
  export const SiteContent: Content[] = [
    {
      sharedId: 'Home',
      buttonContent: {
        key: 1,
        style: {
          backgroundImage: `url(${SITELOGOWBG})`,
          backgroundPosition: 'center',
          backgroundSize: 'contain',
        },
        tooltip: 'Home',
      },
      mainContent: {
        key: 1,
        styling: {},
        content: [
          {
            key: 1,
            image: {
              url: String(SITELOGO),
              placement: 'center',
              size: 'contain',
            },
            cardStyle: { backgroundColor: '' },
            title: 'Welcome to Concerned US Citizen',
            description: `On this site you will find resources where you can donate, sign petitions, find protests, vote, or otherwise support positve social change. I'm not here to reinvent the wheel, so some of the resources might be sites that link to other resources rather than direct links to resources.`,
          },
          {
            key: 2,
            image: {
              url: ARROWOVER,
              placement: 'center',
            },
            cardStyle: { backgroundColor: '' },
            description: `Select a category on the the right to view related resources.`,
          },
        ],
      },
    },
    {
      sharedId: 'BLM',
      buttonContent: {
        key: 1,
        style: {
          backgroundImage: `url(${BLM})`,
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundColor: 'black',
        },
        tooltip: 'Black Lives Matter',
      },
      mainContent: {
        key: 1,
        styling: {},
        content: [
          {
            key: 0,
            image: {
              url: BLMFIST,
              placement: 'top',
              size: 'contain',
            },
            title: 'Black Lives Matter',
            description: 'Fight for racial equity and justice.',
          },
          {
            key: 1,
            cardStyle: {
              backgroundColor: '#EDEDED',
            },
            btnStyling: {
              fontFamily: 'Abril Fatface, serif',
              fontSize: '1.5rem',
            },
            title: 'Black Lives Matter Carrd',
            description:
              'A resource for tons of petitions, places to donate, and much more.',
            buttonUrl: 'https://blacklivesmatters.carrd.co/',
          },
          {
            key: 2,
            image: {
              url: 'https://ritholtz.com/wp-content/uploads/2020/05/map.jpg',
              placement: 'right',
            },
            title: 'Mapping Police Violence',
            description:
              'Mapping Police Violence displays relevant information about police brutality in an accessible and easy to read manner.',
            buttonUrl: 'https://mappingpoliceviolence.org/',
          },
          {
            key: 3,
            image: {
              url:
                'https://www.blackgirlscode.com/uploads/1/5/8/2/15823664/published/1320916358.png?1485809428',
              placement: 'center',
              size: 'contain',
            },
            cardStyle: {
              backgroundColor: '#202020',
              color: 'white',
            },
            btnStyling: {
              border: 'none',
              backgroundColor: '#F64279',
              fontWeight: 'lighter',
              color: 'white',
              borderRadius: '3px',
            },
            title: 'Black Girls CODE',
            description:
              'Black Girls CODE is devoted to showing the world that black girls can code, and do so much more. Click the link to learn more and donate to their cause.',
            buttonUrl: 'https://www.blackgirlscode.com',
          },
        ],
      },
    },
    {
      sharedId: 'LGBT',
      buttonContent: {
        key: 1,
        style: {
          backgroundImage: `url(${LGBTFLAGWP})`,
          backgroundSize: 'cover',
          backgroundPosition: 'left',
        },
        tooltip: 'LGBT+',
      },
      mainContent: {
        key: 1,
        styling: {},
        content: [
          {
            key: 0,
            image: {
              url: LGBTFLAG,
              placement: 'left',
              size: 'cover',
            },
            title: 'LGBTQ+',
            description: 'Support the LGBTQ+ community.',
          },
          {
            key: 1,
            cardStyle: {
              backgroundColor: '#EDEDED',
            },
            btnStyling: {
              fontFamily: 'Abril Fatface, serif',
              fontSize: '1.5rem',
            },
            title: 'LGBTQ+ Carrd',
            description:
              'A resource for tons of petitions, places to donate, and much more.',
            buttonUrl: 'https://helpinglgbt.carrd.co/',
          },
          {
            key: 2,
            image: {
              url: EQFL,
              placement: 'left',
              size: 'cover',
            },
            btnStyling: {
              backgroundColor: '#88C540',
              color: 'white',
              border: 'none',
              padding: '.9rem',
              textTransform: 'uppercase',
            },
            title: 'Equality Florida',
            description:
              "Equality Florida is the largest civil rights organization dedicated to securing full equality for Florida's lesbian, gay, bisexual, transgender and queer (LGBTQ) community.",
            buttonUrl: 'https://www.eqfl.org/',
          },
          {
            key: 3,
            image: {
              url: HRC,
              placement: 'center',
              size: 'contain',
            },
            cardStyle: {
              backgroundColor: '#000066',
              color: 'white',
            },
            btnStyling: {
              backgroundColor: '#ffdf1b',
              color: 'black',
              border: 'none',
              textTransform: 'uppercase',
            },
            title: 'Human Rights Campaign',
            description:
              'The Human Rights Campaign envisions a world where every member of the LGBTQ family has the freedom to live their truth without fear, and with equality under the law.',
            buttonUrl: 'https://www.hrc.org/',
          },
        ],
      },
    },
  ]
}
