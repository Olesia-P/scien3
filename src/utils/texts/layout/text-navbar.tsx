const ua = {
  navlinks: [
    {
      name: 'про нас',
      link: '/',
      hasDropdown: false,
    },
    {
      name: 'послуги',
      link: '/services',
      hasDropdown: true,
    },
    {
      name: 'роботи',
      link: '/works',
      hasDropdown: false,
    },
    {
      name: 'FAQ',
      link: '/faq',
      hasDropdown: false,
    },
    {
      name: 'контакти',
      link: '/contacts',
      hasDropdown: false,
    },
  ],

  dropdownLinks: [
    {
      name: '3D моделювання',
      link: '/services/modeling-3D',
    },
    {
      name: 'Серійне лиття',
      link: '/services/mass-production',
    },
    {
      name: '3D друк',
      link: '/services/printing-3D',
    },
    {
      name: 'Форми для лиття',
      link: '/services/molds',
    },
  ],
};

export const textNavbar = {
  ua,
};
