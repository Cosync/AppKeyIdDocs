import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/AppKeyIdDocs/__docusaurus/debug',
    component: ComponentCreator('/AppKeyIdDocs/__docusaurus/debug', '6e9'),
    exact: true
  },
  {
    path: '/AppKeyIdDocs/__docusaurus/debug/config',
    component: ComponentCreator('/AppKeyIdDocs/__docusaurus/debug/config', 'c42'),
    exact: true
  },
  {
    path: '/AppKeyIdDocs/__docusaurus/debug/content',
    component: ComponentCreator('/AppKeyIdDocs/__docusaurus/debug/content', '34e'),
    exact: true
  },
  {
    path: '/AppKeyIdDocs/__docusaurus/debug/globalData',
    component: ComponentCreator('/AppKeyIdDocs/__docusaurus/debug/globalData', '44f'),
    exact: true
  },
  {
    path: '/AppKeyIdDocs/__docusaurus/debug/metadata',
    component: ComponentCreator('/AppKeyIdDocs/__docusaurus/debug/metadata', 'f8c'),
    exact: true
  },
  {
    path: '/AppKeyIdDocs/__docusaurus/debug/registry',
    component: ComponentCreator('/AppKeyIdDocs/__docusaurus/debug/registry', 'fd7'),
    exact: true
  },
  {
    path: '/AppKeyIdDocs/__docusaurus/debug/routes',
    component: ComponentCreator('/AppKeyIdDocs/__docusaurus/debug/routes', '71a'),
    exact: true
  },
  {
    path: '/AppKeyIdDocs/blog',
    component: ComponentCreator('/AppKeyIdDocs/blog', '7d4'),
    exact: true
  },
  {
    path: '/AppKeyIdDocs/blog/archive',
    component: ComponentCreator('/AppKeyIdDocs/blog/archive', 'da5'),
    exact: true
  },
  {
    path: '/AppKeyIdDocs/blog/authors',
    component: ComponentCreator('/AppKeyIdDocs/blog/authors', '10a'),
    exact: true
  },
  {
    path: '/AppKeyIdDocs/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/AppKeyIdDocs/blog/authors/all-sebastien-lorber-articles', 'c73'),
    exact: true
  },
  {
    path: '/AppKeyIdDocs/blog/authors/yangshun',
    component: ComponentCreator('/AppKeyIdDocs/blog/authors/yangshun', '55c'),
    exact: true
  },
  {
    path: '/AppKeyIdDocs/blog/first-blog-post',
    component: ComponentCreator('/AppKeyIdDocs/blog/first-blog-post', '38e'),
    exact: true
  },
  {
    path: '/AppKeyIdDocs/blog/long-blog-post',
    component: ComponentCreator('/AppKeyIdDocs/blog/long-blog-post', '106'),
    exact: true
  },
  {
    path: '/AppKeyIdDocs/blog/mdx-blog-post',
    component: ComponentCreator('/AppKeyIdDocs/blog/mdx-blog-post', '7ce'),
    exact: true
  },
  {
    path: '/AppKeyIdDocs/blog/tags',
    component: ComponentCreator('/AppKeyIdDocs/blog/tags', '651'),
    exact: true
  },
  {
    path: '/AppKeyIdDocs/blog/tags/docusaurus',
    component: ComponentCreator('/AppKeyIdDocs/blog/tags/docusaurus', 'a9a'),
    exact: true
  },
  {
    path: '/AppKeyIdDocs/blog/tags/facebook',
    component: ComponentCreator('/AppKeyIdDocs/blog/tags/facebook', 'e13'),
    exact: true
  },
  {
    path: '/AppKeyIdDocs/blog/tags/hello',
    component: ComponentCreator('/AppKeyIdDocs/blog/tags/hello', 'af3'),
    exact: true
  },
  {
    path: '/AppKeyIdDocs/blog/tags/hola',
    component: ComponentCreator('/AppKeyIdDocs/blog/tags/hola', '8a0'),
    exact: true
  },
  {
    path: '/AppKeyIdDocs/blog/welcome',
    component: ComponentCreator('/AppKeyIdDocs/blog/welcome', 'e03'),
    exact: true
  },
  {
    path: '/AppKeyIdDocs/markdown-page',
    component: ComponentCreator('/AppKeyIdDocs/markdown-page', '812'),
    exact: true
  },
  {
    path: '/AppKeyIdDocs/docs',
    component: ComponentCreator('/AppKeyIdDocs/docs', 'bdc'),
    routes: [
      {
        path: '/AppKeyIdDocs/docs',
        component: ComponentCreator('/AppKeyIdDocs/docs', '372'),
        routes: [
          {
            path: '/AppKeyIdDocs/docs',
            component: ComponentCreator('/AppKeyIdDocs/docs', '940'),
            routes: [
              {
                path: '/AppKeyIdDocs/docs/category/attested-communication',
                component: ComponentCreator('/AppKeyIdDocs/docs/category/attested-communication', '992'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/category/card-types',
                component: ComponentCreator('/AppKeyIdDocs/docs/category/card-types', '5ce'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/category/cards',
                component: ComponentCreator('/AppKeyIdDocs/docs/category/cards', '5d5'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/category/contacts',
                component: ComponentCreator('/AppKeyIdDocs/docs/category/contacts', '72d'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/category/foundation',
                component: ComponentCreator('/AppKeyIdDocs/docs/category/foundation', '4be'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/category/profile-menu',
                component: ComponentCreator('/AppKeyIdDocs/docs/category/profile-menu', 'afb'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/category/teams',
                component: ComponentCreator('/AppKeyIdDocs/docs/category/teams', 'f75'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/category/tutorial---basics',
                component: ComponentCreator('/AppKeyIdDocs/docs/category/tutorial---basics', '77d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/category/tutorial---extras',
                component: ComponentCreator('/AppKeyIdDocs/docs/category/tutorial---extras', 'd1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/category/use-cases',
                component: ComponentCreator('/AppKeyIdDocs/docs/category/use-cases', 'b17'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/concepts/attested-communication/chain-of-custody',
                component: ComponentCreator('/AppKeyIdDocs/docs/concepts/attested-communication/chain-of-custody', 'f66'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/concepts/attested-communication/what-is-a-card',
                component: ComponentCreator('/AppKeyIdDocs/docs/concepts/attested-communication/what-is-a-card', '185'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/concepts/attested-communication/what-is-attested-communication',
                component: ComponentCreator('/AppKeyIdDocs/docs/concepts/attested-communication/what-is-attested-communication', 'abe'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/concepts/attested-communication/why-acknowlegement',
                component: ComponentCreator('/AppKeyIdDocs/docs/concepts/attested-communication/why-acknowlegement', '914'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/concepts/foundation/passkeys-explained',
                component: ComponentCreator('/AppKeyIdDocs/docs/concepts/foundation/passkeys-explained', 'b61'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/concepts/foundation/zero-trust-identity',
                component: ComponentCreator('/AppKeyIdDocs/docs/concepts/foundation/zero-trust-identity', '5bf'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/concepts/intro',
                component: ComponentCreator('/AppKeyIdDocs/docs/concepts/intro', 'f82'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/concepts/use-cases/appkeyid-solution',
                component: ComponentCreator('/AppKeyIdDocs/docs/concepts/use-cases/appkeyid-solution', 'a41'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/concepts/use-cases/who-is-the-person',
                component: ComponentCreator('/AppKeyIdDocs/docs/concepts/use-cases/who-is-the-person', '208'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/concepts/use-cases/why-ai-breaks-digital',
                component: ComponentCreator('/AppKeyIdDocs/docs/concepts/use-cases/why-ai-breaks-digital', '0ce'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/concepts/use-cases/why-email-and-messaging',
                component: ComponentCreator('/AppKeyIdDocs/docs/concepts/use-cases/why-email-and-messaging', 'a92'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/manual/cards/inbox',
                component: ComponentCreator('/AppKeyIdDocs/docs/manual/cards/inbox', 'c52'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/manual/cards/outbox',
                component: ComponentCreator('/AppKeyIdDocs/docs/manual/cards/outbox', '33e'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/manual/cardtypes/capture',
                component: ComponentCreator('/AppKeyIdDocs/docs/manual/cardtypes/capture', '162'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/manual/cardtypes/deck',
                component: ComponentCreator('/AppKeyIdDocs/docs/manual/cardtypes/deck', 'a11'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/manual/cardtypes/message',
                component: ComponentCreator('/AppKeyIdDocs/docs/manual/cardtypes/message', 'bc2'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/manual/cardtypes/public',
                component: ComponentCreator('/AppKeyIdDocs/docs/manual/cardtypes/public', '319'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/manual/contacts/',
                component: ComponentCreator('/AppKeyIdDocs/docs/manual/contacts/', '6e9'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/manual/contacts/blocking',
                component: ComponentCreator('/AppKeyIdDocs/docs/manual/contacts/blocking', '3ad'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/manual/contacts/chatting',
                component: ComponentCreator('/AppKeyIdDocs/docs/manual/contacts/chatting', 'f95'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/manual/contacts/export',
                component: ComponentCreator('/AppKeyIdDocs/docs/manual/contacts/export', 'e13'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/manual/contacts/finding',
                component: ComponentCreator('/AppKeyIdDocs/docs/manual/contacts/finding', 'd8d'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/manual/contacts/inviting',
                component: ComponentCreator('/AppKeyIdDocs/docs/manual/contacts/inviting', '617'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/manual/intro',
                component: ComponentCreator('/AppKeyIdDocs/docs/manual/intro', '964'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/manual/profilemenu/logs',
                component: ComponentCreator('/AppKeyIdDocs/docs/manual/profilemenu/logs', 'bcd'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/manual/profilemenu/passkeys',
                component: ComponentCreator('/AppKeyIdDocs/docs/manual/profilemenu/passkeys', '615'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/manual/profilemenu/profile',
                component: ComponentCreator('/AppKeyIdDocs/docs/manual/profilemenu/profile', 'd14'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/manual/profilemenu/settings',
                component: ComponentCreator('/AppKeyIdDocs/docs/manual/profilemenu/settings', '659'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/manual/teams/addmembers',
                component: ComponentCreator('/AppKeyIdDocs/docs/manual/teams/addmembers', '978'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/manual/teams/belongteam',
                component: ComponentCreator('/AppKeyIdDocs/docs/manual/teams/belongteam', '8f8'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/manual/teams/capture',
                component: ComponentCreator('/AppKeyIdDocs/docs/manual/teams/capture', '169'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/manual/teams/createteam',
                component: ComponentCreator('/AppKeyIdDocs/docs/manual/teams/createteam', '6de'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/manual/teams/export',
                component: ComponentCreator('/AppKeyIdDocs/docs/manual/teams/export', '4e6'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/manual/teams/properties',
                component: ComponentCreator('/AppKeyIdDocs/docs/manual/teams/properties', 'ec0'),
                exact: true,
                sidebar: "manualSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/tutorial/intro',
                component: ComponentCreator('/AppKeyIdDocs/docs/tutorial/intro', '0ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/tutorial/tutorial-basics/create-first-card',
                component: ComponentCreator('/AppKeyIdDocs/docs/tutorial/tutorial-basics/create-first-card', 'ca7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/tutorial/tutorial-basics/signup-to-appkeyid',
                component: ComponentCreator('/AppKeyIdDocs/docs/tutorial/tutorial-basics/signup-to-appkeyid', '64b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/tutorial/tutorial-basics/signup-using-apple',
                component: ComponentCreator('/AppKeyIdDocs/docs/tutorial/tutorial-basics/signup-using-apple', 'dd2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/tutorial/tutorial-basics/signup-using-google',
                component: ComponentCreator('/AppKeyIdDocs/docs/tutorial/tutorial-basics/signup-using-google', 'b8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/tutorial/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/AppKeyIdDocs/docs/tutorial/tutorial-extras/manage-docs-versions', '1ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AppKeyIdDocs/docs/tutorial/tutorial-extras/translate-your-site',
                component: ComponentCreator('/AppKeyIdDocs/docs/tutorial/tutorial-extras/translate-your-site', '08b'),
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
    path: '/AppKeyIdDocs/',
    component: ComponentCreator('/AppKeyIdDocs/', '884'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
