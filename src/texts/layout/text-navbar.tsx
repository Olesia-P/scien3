const ua = {
  navlinks: [
    {
      name: 'про нас',
      link: '/ua',
      hasDropdown: false,
    },
    {
      name: 'послуги',
      link: '/ua/services',
      hasDropdown: true,
    },
    {
      name: 'роботи',
      link: '/ua/works',
      hasDropdown: false,
    },
    {
      name: 'FAQ',
      link: '/ua/faq',
      hasDropdown: false,
    },
    {
      name: 'контакти',
      link: '/ua/contacts',
      hasDropdown: false,
    },
  ],

  dropdownLinks: [
    {
      name: '3D моделювання',
      link: '/ua/services/modeling-3D',
    },
    {
      name: 'Серійне лиття',
      link: '/ua/services/serial-production',
    },
    {
      name: '3D друк',
      link: '/ua/services/printing-3D',
    },
    {
      name: 'Форми для лиття',
      link: '/ua/services/molds',
    },
  ],
};

const en = {
  navlinks: [
    {
      name: 'about us',
      link: '/en',
      hasDropdown: false,
    },
    {
      name: 'services',
      link: '/en/services',
      hasDropdown: true,
    },
    {
      name: 'works',
      link: '/en/works',
      hasDropdown: false,
    },
    {
      name: 'FAQ',
      link: '/en/faq',
      hasDropdown: false,
    },
    {
      name: 'contacts',
      link: '/en/contacts',
      hasDropdown: false,
    },
  ],

  dropdownLinks: [
    {
      name: '3D modeling',
      link: '/en/services/modeling-3D',
    },
    {
      name: 'Serial production',
      link: '/en/services/serial-production',
    },
    {
      name: '3D printing',
      link: '/en/services/printing-3D',
    },
    {
      name: 'Casting molds',
      link: '/en/services/molds',
    },
  ],
};

export const textNavbar = {
  ua,
  en,
};
