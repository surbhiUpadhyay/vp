import { defineConfig } from "vuepress/config";

export default defineConfig({
    locales: {
        '/': {
            lang: "en-US",
            title: 'DEVOPS PAGES',
            description: 'The home of DevOps guidelines applicable at EEAS.',
        }
    },
    
  themeConfig: {
    repo: "vuejs/vuepress",
    editLinks: true,
    docsDir: "packages/docs/docs",
    nav: [
        { text: 'Home', link: '/' },
        // { text: 'Getting Started', link: '/getting-started.html' },
        {  text: 'Guide', link: '/guide/' }
    ],
    sidebar: [
        {
          // required, title of group
          title: "Side menu 1",
          // optional, icon of group
          icon: "bar",
          // optional, link of group title
          path: "/sideMenu/",
          // optional, will be appended to each item link
          prefix: "/sideMenu/",
          // optional, defaults to true
          collapsable: false,
          // optional, defaults to 2
          sidebarDepth: 2,
          // required, items of group
          children: ["/"],
        },
        {
          title: "Group 2",
          children: [
            /* ... */
          ],
        },
        { text: 'Home', link: '/' },
      ]
  },
    // theme: themeConfig({
    //     navbar: [
    //         { text: 'Home', link: '/' },
    //         { text: 'Getting Started', link: '/getting-started.html' },
    //         {  text: 'Guide', link: '/guide/' }
    //     ],
    //     // sidebar: {

    //     //     '/': [

    //     //         { text: 'Guide',

    //     //             children: [

    //     //                 '/guide/README.md',

    //     //                 '/guide/dependabot.md',

    //     //                 '/guide/helm.md',

    //     //                 '/guide/continuous-integration.md',

    //     //                 '/guide/continuous-deployment.md'

    //     //             ]

    //     //         }

    //     //     ]

    //     // }
    // })
})
