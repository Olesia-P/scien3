// import React from 'react';
const ua = {
  forWrapper: {
    content: {
      main: {
        header: 'Промисловий 3D-дизайн',
        description:
          "Створення 3D-моделі (або 3D-дизайн) - це процес розробки за допомогою комп'ютерної графіки комплексної цифрової тривимірної моделі майбутнього виробу. ",
      },
      img: {
        img: '/services/3D_modeling_process.jpeg',
        webp: '/services/3D_modeling_process.webp',
        alt: "Монітор комп'ютера із зображенням 3D моделі дрона.",
      },
    },

    backgroundStyle: 1,
  },

  useCases: {
    header: 'У яких випадках 3D-модель буде корисною?',
    list: [
      'Друк прототипів на 3D-принтері.',
      'Візуалізація майбутнього виробу.',
      'Виготовлення жорстких ливарних форм.',
    ],
  },
  stages: {
    header: 'Етапи створення 3D-моделі',
    // eslint-disable-next-line @typescript-eslint/prefer-as-const
    nestedListIcon: 'laptop' as 'laptop',
    nestedList: [
      {
        header: '1. Формування технічного завдання (ТЗ):',
        paragraphs: [
          'Визначення мети створення моделі (виробництво, візуалізація, симуляція), аналіз документації (креслення, ескізи, технічні характеристики), вибір матеріалів, визначення необхідного рівня деталізації та масштабування.',
        ],
      },
      {
        header: '2. Розробка концепції та попередня візуалізація',
        paragraphs: [
          'Створення ручних або цифрових ескізів, створення початкової концептуальної моделі з використанням базових форм, узгодження концепції з замовником.',
        ],
      },
      {
        header: '3. 3D-моделювання',
        paragraphs: [
          'Розробка базової геометрії моделі, додавання дрібних елементів (отвори, ребра, канавки), створення текстур для візуалізації.',
        ],
      },
      {
        header: '4. Фінальна валідація',
        paragraphs: [
          'Погодження кінцевої моделі з замовником, надання всіх необхідних файлів (в форматі .stl), планування подальшого виробництва.',
        ],
      },
      {
        header: '5. Адаптація моделі до обраного способу виробництва',
        paragraphs: [
          'Поділ моделі на сегменти для виробничих потреб, створення креслень, схем складання, специфікацій, експорт файлів у необхідному форматі для 3D-друку.',
        ],
      },
    ],
  },

  product: {
    header: 'Що ви отримуєте?',
    list: [
      'Готову 3D-модель в STL форматі.',
      'Можливість виготовлення прототипу виробу на базі створеної цифрової моделі.',
    ],
  },
};

const en = {
  forWrapper: {
    content: {
      main: {
        header: 'Industrial 3D design',
        description:
          'Creating a 3D model (or 3D design) is the process of developing a complex digital three-dimensional model of a future product using computer graphics.',
      },
      img: {
        img: '/services/3D_modeling_process.jpeg',
        webp: '/services/3D_modeling_process.webp',
        alt: 'Computer monitor with an image of a 3D model of a drone.',
      },
    },

    backgroundStyle: 1,
  },

  useCases: {
    header: 'When will a 3D model be useful?',
    list: [
      '3D printing of prototypes.',
      'Visualization of the future product.',
      'Manufacturing of rigid casting molds.',
    ],
  },
  stages: {
    header: 'Stages of Creating a 3D Model',
    // eslint-disable-next-line @typescript-eslint/prefer-as-const
    nestedListIcon: 'laptop' as 'laptop',
    nestedList: [
      {
        header: '1. Defining the Technical Assignment (TA):',
        paragraphs: [
          'Determining the purpose of the model (production, visualization, simulation), analyzing documentation (drawings, sketches, technical specifications), choosing materials, defining the required level of detail and scaling.',
        ],
      },
      {
        header: '2. Concept vevelopment and preliminary visualization',
        paragraphs: [
          'Creating hand or digital sketches, developing an initial conceptual model using basic shapes, coordinating the concept with the client.',
        ],
      },
      {
        header: '3. 3D modeling',
        paragraphs: [
          'Developing the basic geometry of the model, adding small elements (holes, ribs, grooves), creating textures for visualization.',
        ],
      },
      {
        header: '4. Final validation',
        paragraphs: [
          'Agreeing on the final model with the client, providing all necessary files (in .stl format), planning further production.',
        ],
      },
      {
        header: '5. Adapting the model to the chosen production method',
        paragraphs: [
          'Dividing the model into segments for manufacturing purposes, creating drawings, assembly diagrams, specifications, exporting files in the appropriate format for 3D printing.',
        ],
      },
    ],
  },

  product: {
    header: 'What do you get?',
    list: [
      'A finished 3D model in STL format.',
      'The possibility to produce a prototype based on the created digital model.',
    ],
  },
};

export const textModeling3D = {
  ua,
  en,
};
