import React from 'react';

const ua = {
  forWrapper: {
    content: {
      main: {
        header: '3D-друк',
        description:
          '3D-друк - це технологія створення фізичних об’єктів шляхом пошарового додавання матеріалу відповідно до цифрової моделі. Цей метод дозволяє швидко виготовляти прототипи, складні конструкції та навіть кінцеві продукти з різних матеріалів. ',
      },
      img: {
        img: '/services/3D_printer_products.jpeg',
        webp: '/services/3D_printer_products.webp',
        alt: '3D-принтер та вироблені ним вироби на столі.',
      },
    },

    backgroundStyle: 3,
  },

  howItWorks: {
    header: 'Як працює 3D-принтер?',
    list: [
      'Процес починається зі створення 3D-моделі за допомогою програмного забезпечення для 3D-дизайну (наприклад, CAD-програм).',
      'Модель віртуально розбивається на шари.',
      'Принтер виконує друк, додаючи шар за шаром матеріал. Кожен шар з’єднується з попереднім, поки не формується готовий предмет.',
    ],
  },

  useCases: {
    header: 'У яких випадках 3D-друк буде корисним?',
    list: [
      <>
        <strong>Створення прототипів.</strong> Якщо потрібно швидко отримати
        прототип нового продукту або деталі, 3D-друк — це ідеальний варіант. Він
        дозволяє протестувати ідеї, не витрачаючи великі суми на традиційні
        методи виробництва.
      </>,
      <>
        <strong>Створення майстер-моделі.</strong> Прототип можна доопрацювати
        до рівня майстер-моделі, за допомогою якої виготовляється силіконова
        форма для серійного лиття пластика у вакуумі.
      </>,
      <>
        <strong>Індивідуальні предмети.</strong> Якщо вам потрібно зробити
        унікальний предмет, наприклад, подарунок чи запчастину, яка більше ніде
        не продається, 3D-друк може стати вигідним рішенням.
      </>,
      <>
        <strong>Складні конструкції.</strong> Створення об’єктів зі складною
        геометрією, які неможливо або дорого зробити традиційними методами.
      </>,
    ],
  },

  mainOptions: {
    header: 'Основні технології 3D-друку',
    paragraphs: [
      <>
        Існують різні види 3D-друку. Наша компанія використовує два найбільш
        поширених: <strong>FDM</strong> та <strong>SLA</strong>.
      </>,

      '3D-друк FDM і SLA не взаємозаперечні — часто їх використовують разом для різних етапів одного проєкту.',
    ],
  },

  fdm: {
    header: 'FDM',
    paragraphs: [
      <>
        <strong>Fused Deposition Modeling,</strong> або моделювання методом
        пошарового наплавлення - ця технологія використовує нитку термопластика,
        яка плавиться і наноситься шар за шаром.
      </>,
    ],
    // eslint-disable-next-line @typescript-eslint/prefer-as-const
    nestedListIcon: 'rocket' as 'rocket',
    nestedList: [
      {
        header: 'Переваги',
        list: [
          '- Матеріали порівняно дешеві, їх асортимент досить великий.',
          '- Варіативність постобробки.',
          '- Підходить для створення функціональних прототипів і деталей.',
          '- Друковані вироби можуть бути міцними й зносостійкими.',
        ],
      },
      {
        header: 'Недоліки',
        list: [
          '- Менша деталізація в порівнянні з іншими методами.',
          '- Помітні шари друку на поверхні моделі.',
        ],
      },
      {
        header: 'Що друкувати?',
        paragraphs: [
          'Досить великі вироби, які необхідно отримати швидко, без жорстких вимог до якості отриманого прототипу.',
          'Наприклад:',
          'Створення прототипу корпусу електронного пристрою для перевірки розмірів і функціональності; виробництво кріплень, інструментів, деталей для обладнання чи меблів тощо.',
        ],
      },

      {
        header: 'Важливо:',
        paragraphs: [
          'Побудова виробу за цією технологією залежить від товщини друкованого шару. Вона може змінюватись від 0,1 мм до 0,3 мм.',
          'Поверхня готового виробу найчастіше має низьку ребристість, що обумовлено круглою формою розплавленої нитки. Подібний недолік легко виправити на етапі постобробки.',
        ],
      },
    ],
  },

  sla: {
    header: 'SLA',
    paragraphs: [
      <>
        <strong>Stereolithography,</strong> або лазерна стереолітографія - ця
        технологія використовує рідку фотополімерну смолу, яка твердне під
        впливом лазера або джерела ультрафіолетового світла. Податливість
        фотополімеру у звичайному стані та затвердінні його під ультрафіолетовим
        світлом дозволяють досягти дуже широкого спектра характеристик
        майбутнього виробу.
      </>,
    ],
    // eslint-disable-next-line @typescript-eslint/prefer-as-const
    nestedListIcon: 'ball' as 'ball',
    nestedList: [
      {
        header: 'Переваги',
        list: [
          '- Висока деталізація та гладкість поверхонь.',
          '- Підходить для складних і дрібних моделей, наприклад, у ювелірній справі або стоматології.',
          '- Дозволяє друкувати вироби з прозорих чи спеціальних фотополімерів.',
          '- Варіативність властивостей дозволяють використовувати вирощений зразок як  повноцінний виріб.',
        ],
      },
      {
        header: 'Недоліки',
        list: ['- Дорожчі матеріали.', '- Триваліше виробництво.'],
      },
      {
        header: 'Що друкувати?',
        paragraphs: [
          'SLA дозволяє створювати моделі з високою точністю та гладкою поверхнею, що робить цю технологію ідеальною для естетично значущих деталей.',
          'Наприклад:',
          'Виготовлення ювелірних виробів, архітектурних макетів, точних анатомічних моделей, ортодонтичних апаратів або коронок для зубів, частин годинників, мініатюрних моделей тощо.',
        ],
      },
    ],
  },

  important: {
    header: 'Майте на увазі',
    paragraphs: [
      'Попри чималі переваги 3D друку, для виготовлення невеликої партії деталей значно дешевше й швидше  використовувати вакуумне лиття в силіконових формах. ',
    ],
  },

  linkToSerialProduction: {
    text: 'Дрібносерійне лиття пластмас у вакуумі',
  },

  table: {
    headers: ['Характеристика', 'FDM', 'SLA'],
    rows: [
      ['Точність', 'Середня', 'Висока'],
      ['Швидкість', 'Вища для великих об’єктів', 'Повільніший процес'],
      ['Вартість', 'Дешевше', 'Дорожче'],
      ['Матеріали', 'Термопластики', 'Фотополімерні смоли'],
      ['Призначення', 'Функціональні прототипи', 'Високоточні деталі'],
    ],
    title: 'Порівняння FDM та SLA',
  },
};

const en = {
  forWrapper: {
    content: {
      main: {
        header: '3D printing',
        description:
          '3D printing is a technology for creating physical objects by adding material layer by layer according to a digital model. This method allows for quickly producing prototypes, complex structures, and even final products from various materials.',
      },
      img: {
        img: '/services/3D_printer_products.jpeg',
        webp: '/services/3D_printer_products.webp',
        alt: '3D printer and products made by it on a table.',
      },
    },

    backgroundStyle: 3,
  },

  howItWorks: {
    header: 'How does a 3D printer work?',
    list: [
      'The process begins with creating a 3D model using 3D design software (e.g., CAD programs).',
      'The model is virtually divided into layers.',
      'The printer performs the printing by adding one layer of material at a time. Each layer bonds with the previous one until the finished object is formed.',
    ],
  },

  useCases: {
    header: 'When will 3D printing be useful?',
    list: [
      <>
        <strong>Prototype creation.</strong> If you need to quickly obtain a
        prototype of a new product or part, 3D printing is the ideal option. It
        allows you to test ideas without spending large sums on traditional
        manufacturing methods.
      </>,
      <>
        <strong>Master model creation.</strong> A prototype can be refined into
        a master model, which can then be used to create a silicone mold for
        small-batch plastic casting in a vacuum.
      </>,
      <>
        <strong>Custom items.</strong> If you need to make a unique item, such
        as a gift or a part that is no longer available for purchase, 3D
        printing can be a cost-effective solution.
      </>,
      <>
        <strong>Complex structures.</strong> Creating objects with complex
        geometry that would be impossible or expensive to make using traditional
        methods.
      </>,
    ],
  },

  mainOptions: {
    header: 'Main 3D printing technologies',
    paragraphs: [
      <>
        There are different types of 3D printing. Our company uses two of the
        most common ones: <strong>FDM</strong> and <strong>SLA</strong>.
      </>,

      'FDM and SLA 3D printing are not mutually exclusive — they are often used together for different stages of the same project.',
    ],
  },

  fdm: {
    header: 'FDM',
    paragraphs: [
      <>
        <strong>Fused Deposition Modeling</strong> is a technology that uses
        thermoplastic filament, which is melted and applied layer by layer.
      </>,
    ],
    // eslint-disable-next-line @typescript-eslint/prefer-as-const
    nestedListIcon: 'rocket' as 'rocket',
    nestedList: [
      {
        header: 'Advantages',
        list: [
          '- Materials are relatively inexpensive, and there is a wide selection.',
          '- Variety of post-processing options.',
          '- Suitable for creating functional prototypes and parts.',
          '- Printed items can be durable and wear-resistant.',
        ],
      },
      {
        header: 'Disadvantages',
        list: [
          '- Lower level of detail compared to other methods.',
          '- Visible print layers on the surface of the model.',
        ],
      },
      {
        header: 'What to print?',
        paragraphs: [
          'Quite large objects that need to be made quickly without strict quality requirements for the prototype.',
          'For example:',
          'Prototyping an electronic device housing (case) to check dimensions and functionality; manufacturing fasteners, tools, parts for equipment or furniture, etc.',
        ],
      },

      {
        header: 'Important:',
        paragraphs: [
          'The construction of the object using this technology depends on the thickness of the printed layer. This can vary from 0.1 mm to 0.3 mm.',
          'The surface of the finished product often has slight ribbing due to the round shape of the melted filament. This drawback can easily be corrected during post-processing.',
        ],
      },
    ],
  },

  sla: {
    header: 'SLA',
    paragraphs: [
      <>
        <strong>Stereolithography,</strong> or laser stereolithography, is a
        technology that uses liquid photopolymer resin, which hardens under the
        influence of a laser or ultraviolet light source. The susceptibility of
        the photopolymer in its normal state and its hardening under UV light
        allow for achieving a wide range of characteristics for the future
        product.
      </>,
    ],
    // eslint-disable-next-line @typescript-eslint/prefer-as-const
    nestedListIcon: 'ball' as 'ball',
    nestedList: [
      {
        header: 'Advantages',
        list: [
          '- High detail and smooth surfaces.',
          '- Suitable for complex and small models, such as in jewelry making or dentistry.',
          '- Allows for printing with transparent or specialized photopolymers.',
          '- The variability of properties allows for using the printed sample as a fully functional product.',
        ],
      },
      {
        header: 'Disadvantages',
        list: ['- More expensive materials.', '- Longer production time.'],
      },
      {
        header: 'What to print?',
        paragraphs: [
          'SLA allows for creating models with high precision and smooth surfaces, making it ideal for aesthetic and detailed parts.',
          'For example:',
          'Manufacturing jewelry, architectural models, precise anatomical models, orthodontic devices or crowns for teeth, watch parts, miniature models, etc.',
        ],
      },
    ],
  },

  important: {
    header: 'Keep in mind',
    paragraphs: [
      'Despite the many advantages of 3D printing, for producing small batches of parts, vacuum casting in silicone molds is significantly cheaper and faster.',
    ],
  },

  linkToSerialProduction: {
    text: 'Small-batch vacuum plastic casting',
  },

  table: {
    headers: ['Characteristic', 'FDM', 'SLA'],
    rows: [
      ['Precision', 'Medium', 'High'],
      ['Speed', 'Faster for larger objects', 'Slower process'],
      ['Cost', 'Cheaper', 'More expensive'],
      ['Materials', 'Thermoplastics', 'Photopolymer resins'],
      ['Best for', 'Functional prototypes', 'High-detail parts'],
    ],
    title: 'FDM vs SLA Comparison',
  },
};

export const textPrinting3D = {
  ua,
  en,
};
