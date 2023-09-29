import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default';


export default defineUserConfig ({
    lang: 'en-US',
    title: 'DEVOPS PAGES',
    description: 'The home of DevOps guidelines applicable at EEAS.',
    theme: defaultTheme({
        navbar: [
            { text: 'Home', link: '/' },
            { text: 'Getting Started', link: '/getting-started.html' },
            {  text: 'Guide', link: '/guide/' }
        ],
        // sidebar: {

        //     '/': [

        //         { text: 'Guide',

        //             children: [

        //                 '/guide/README.md',

        //                 '/guide/dependabot.md',

        //                 '/guide/helm.md',

        //                 '/guide/continuous-integration.md',

        //                 '/guide/continuous-deployment.md'

        //             ]

        //         }

        //     ]

        // }
    })
})