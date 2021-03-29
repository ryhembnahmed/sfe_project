import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Menu',
    group: true,
  },
  {
    title: 'Dashboards',
    icon: 'home-outline',
    link: '/pages/dashboards',
    home: true,
  },
  {
    title: 'Add Dashboard',
    icon: 'plus-circle-outline',
    link: '/pages/add',
  },
  /*{
    title: 'Management',
    group: true,
  },*/
  /*{
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },*/
];
