import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'e21'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', 'ec3'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'b14'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '5c7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '4f6'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '096'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '394'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '731'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '4fa'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'dfe'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '53a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '176'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'a53'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'efe'),
            routes: [
              {
                path: '/docs/category/attested-communication',
                component: ComponentCreator('/docs/category/attested-communication', 'b56'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/docs/category/card-types',
                component: ComponentCreator('/docs/category/card-types', '288'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/docs/category/contacts',
                component: ComponentCreator('/docs/category/contacts', '81f'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/docs/category/foundation',
                component: ComponentCreator('/docs/category/foundation', 'c6a'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/docs/category/inbox-and-outbox',
                component: ComponentCreator('/docs/category/inbox-and-outbox', 'd34'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/docs/category/profile-menu',
                component: ComponentCreator('/docs/category/profile-menu', '10f'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/docs/category/teams',
                component: ComponentCreator('/docs/category/teams', '7b3'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/docs/category/tutorial---basics',
                component: ComponentCreator('/docs/category/tutorial---basics', '20e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---extras',
                component: ComponentCreator('/docs/category/tutorial---extras', '9ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/use-cases',
                component: ComponentCreator('/docs/category/use-cases', '08d'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/docs/concepts/attested-communication/chain-of-custody',
                component: ComponentCreator('/docs/concepts/attested-communication/chain-of-custody', '4b5'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/docs/concepts/attested-communication/what-is-a-card',
                component: ComponentCreator('/docs/concepts/attested-communication/what-is-a-card', '354'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/docs/concepts/attested-communication/what-is-attested-communication',
                component: ComponentCreator('/docs/concepts/attested-communication/what-is-attested-communication', '243'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/docs/concepts/attested-communication/why-acknowlegement',
                component: ComponentCreator('/docs/concepts/attested-communication/why-acknowlegement', '86a'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/docs/concepts/foundation/passkeys-explained',
                component: ComponentCreator('/docs/concepts/foundation/passkeys-explained', 'b01'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/docs/concepts/foundation/zero-trust-identity',
                component: ComponentCreator('/docs/concepts/foundation/zero-trust-identity', '8ee'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/docs/concepts/intro',
                component: ComponentCreator('/docs/concepts/intro', '154'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/docs/concepts/use-cases/appkeyid-solution',
                component: ComponentCreator('/docs/concepts/use-cases/appkeyid-solution', '72a'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/docs/concepts/use-cases/who-is-the-person',
                component: ComponentCreator('/docs/concepts/use-cases/who-is-the-person', '45e'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/docs/concepts/use-cases/why-ai-breaks-digital',
                component: ComponentCreator('/docs/concepts/use-cases/why-ai-breaks-digital', 'ec2'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/docs/concepts/use-cases/why-email-and-messaging',
                component: ComponentCreator('/docs/concepts/use-cases/why-email-and-messaging', '8ff'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/docs/manual/cards/inbox',
                component: ComponentCreator('/docs/manual/cards/inbox', '5f9'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/docs/manual/cards/outbox',
                component: ComponentCreator('/docs/manual/cards/outbox', '590'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/docs/manual/cardtypes/capture',
                component: ComponentCreator('/docs/manual/cardtypes/capture', 'b94'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/docs/manual/cardtypes/deck',
                component: ComponentCreator('/docs/manual/cardtypes/deck', '284'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/docs/manual/cardtypes/message',
                component: ComponentCreator('/docs/manual/cardtypes/message', '3d1'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/docs/manual/cardtypes/public',
                component: ComponentCreator('/docs/manual/cardtypes/public', '1c6'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/docs/manual/contacts/',
                component: ComponentCreator('/docs/manual/contacts/', 'acd'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/docs/manual/contacts/blocking',
                component: ComponentCreator('/docs/manual/contacts/blocking', 'ce4'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/docs/manual/contacts/chatting',
                component: ComponentCreator('/docs/manual/contacts/chatting', 'eec'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/docs/manual/contacts/export',
                component: ComponentCreator('/docs/manual/contacts/export', '564'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/docs/manual/contacts/finding',
                component: ComponentCreator('/docs/manual/contacts/finding', '28b'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/docs/manual/contacts/inviting',
                component: ComponentCreator('/docs/manual/contacts/inviting', '291'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/docs/manual/intro',
                component: ComponentCreator('/docs/manual/intro', '413'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/docs/manual/profilemenu/logs',
                component: ComponentCreator('/docs/manual/profilemenu/logs', '3a8'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/docs/manual/profilemenu/passkeys',
                component: ComponentCreator('/docs/manual/profilemenu/passkeys', '914'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/docs/manual/profilemenu/profile',
                component: ComponentCreator('/docs/manual/profilemenu/profile', '712'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/docs/manual/profilemenu/settings',
                component: ComponentCreator('/docs/manual/profilemenu/settings', 'e47'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/docs/manual/teams/addmembers',
                component: ComponentCreator('/docs/manual/teams/addmembers', 'c52'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/docs/manual/teams/belongteam',
                component: ComponentCreator('/docs/manual/teams/belongteam', '668'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/docs/manual/teams/capture',
                component: ComponentCreator('/docs/manual/teams/capture', 'bb9'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/docs/manual/teams/createteam',
                component: ComponentCreator('/docs/manual/teams/createteam', '3db'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/docs/manual/teams/export',
                component: ComponentCreator('/docs/manual/teams/export', 'aec'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/docs/manual/teams/properties',
                component: ComponentCreator('/docs/manual/teams/properties', '782'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/docs/tutorial/intro',
                component: ComponentCreator('/docs/tutorial/intro', 'f1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/tutorial-basics/create-first-card',
                component: ComponentCreator('/docs/tutorial/tutorial-basics/create-first-card', 'ea1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/tutorial-basics/signup-to-appkeyid',
                component: ComponentCreator('/docs/tutorial/tutorial-basics/signup-to-appkeyid', '614'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/tutorial-basics/signup-using-apple',
                component: ComponentCreator('/docs/tutorial/tutorial-basics/signup-using-apple', '338'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/tutorial-basics/signup-using-google',
                component: ComponentCreator('/docs/tutorial/tutorial-basics/signup-using-google', 'eb3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial/tutorial-extras/manage-docs-versions', '130'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial/tutorial-extras/translate-your-site', 'e69'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
