import { Content } from './contentInterface'
import BLMFIST from './assets/BLM1.png'
import LGBTFLAG from './assets/LGBT.jpg'

export module SITECONTENT {
    export const SiteContent: Content[] = [
        {
            sharedId: 'Home',
            buttonContent: { key: 1 },
            mainContent: {
                key: 1, styling: {},
                content: [
                    {
                        // image: './',
                        key: 1,
                        cardStyle: { backgroundColor: '' },
                        title: 'Welcome to Concered US Citizen',
                        description: `On this site you will find resources where you can donate, sign petitions, find protests, vote, or otherwise support positve social change. I'm not here to reinvent the wheel, so some of the resources might be sites that link to other resources rather than direct links to resources.`,
                    },
                    {
                        key: 2,
                        cardStyle: { backgroundColor: '' },
                        description: `Select a category on the the right to view related resources.`
                    }
                ]
            }
        },
        {
            sharedId: 'BLM',
            buttonContent: {
                key: 1,
                style: {
                    backgroundImage: `url(${BLMFIST})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundColor: 'black'
                }
            },
            mainContent: {
                key: 1, styling: {},
                content: [
                    {
                        key: 1,
                        image: {
                            url: 'https://houseofkaizen.com/wp-content/uploads/2020/06/BLM.png',
                            placement: 'top'
                        },
                        title: 'Black Lives Matter Carrd',
                        description: 'A resource for tons of petitions, places to donate, and much more.',
                        buttonUrl: 'https://blacklivesmatters.carrd.co/'
                    },
                    {
                        key: 2,
                        cardStyle: { backgroundColor: 'white' },
                        title: 'This Is A Test',
                        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, odio quidem. Cupiditate sed rerum doloremque mollitia eveniet, autem inventore fuga eligendi necessitatibus doloribus dolore quibusdam.",
                        buttonUrl: 'https://blacklivesmatters.carrd.co/'
                    },
                    {
                        key: 3,
                        cardStyle: { backgroundColor: 'white' },
                        title: 'This Is A Test',
                        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, odio quidem. Cupiditate sed rerum doloremque mollitia eveniet, autem inventore fuga eligendi necessitatibus doloribus dolore quibusdam.",
                        buttonUrl: 'https://blacklivesmatters.carrd.co/'
                    },
                    {
                        key: 4,
                        cardStyle: { backgroundColor: 'white' },
                        title: 'This Is A Test',
                        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, odio quidem. Cupiditate sed rerum doloremque mollitia eveniet, autem inventore fuga eligendi necessitatibus doloribus dolore quibusdam.",
                        buttonUrl: 'https://blacklivesmatters.carrd.co/'
                    }
                ]
            }
        },
        {
            sharedId: 'LGBT',
            buttonContent: { key: 1, style: {
                backgroundImage: `url(${LGBTFLAG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'left'
            } },
            mainContent: {
                key: 1, styling: {},
                content: [
                    {
                        key: 1,
                        title: 'THIS IS A TEST',
                        description: 'A resource for tons of petitions, places to donate, and much more.',
                        buttonUrl: 'https://blacklivesmatters.carrd.co/'
                    },
                    {
                        key: 2,
                        cardStyle: { backgroundColor: 'white' },
                        title: 'This Is A Test',
                        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, odio quidem. Cupiditate sed rerum doloremque mollitia eveniet, autem inventore fuga eligendi necessitatibus doloribus dolore quibusdam.",
                        buttonUrl: 'https://blacklivesmatters.carrd.co/'
                    },
                    {
                        key: 3,
                        cardStyle: { backgroundColor: 'white' },
                        title: 'This Is A Test',
                        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, odio quidem. Cupiditate sed rerum doloremque mollitia eveniet, autem inventore fuga eligendi necessitatibus doloribus dolore quibusdam.",
                        buttonUrl: 'https://blacklivesmatters.carrd.co/'
                    },
                    {
                        key: 4,
                        cardStyle: { backgroundColor: 'white' },
                        title: 'This Is A Test',
                        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, odio quidem. Cupiditate sed rerum doloremque mollitia eveniet, autem inventore fuga eligendi necessitatibus doloribus dolore quibusdam.",
                        buttonUrl: 'https://blacklivesmatters.carrd.co/'
                    }
                ]
            }
        },
    ]
}