import React from 'react';

const ua = {
  forWrapper: {
    content: {
      main: {
        header: 'Дрібносерійне лиття пластмас у вакуумі',
        description: (
          <>
            Дрібносерійне лиття пластмас у вакуумі – це сучасна технологія, яка
            дозволяє створювати невелику кількість пластикових деталей{' '}
            <strong>(від 1 до 1000 штук)</strong> швидко, якісно та з
            мінімальними витратами.
          </>
        ),
      },
      img: {
        link: '/services/buttons.jpg',
        alt: "Кнопки комп'ютерної клавіатури, розсипані на столі.",
      },
    },

    backgroundStyle: 2,
  },

  howItWorks: {
    header: 'Як це працює',
    paragraphs: [
      'Рідким багатокомпонентним поліуретаном заповнюють гнучкі форми (з силікону чи поліуретану), без застосування високого тиску, оскільки технологія лиття в вакуумі здатне забезпечити ідеальне заповнення форми. Виріб буде майже повністю відповідати моделям, виготовленим штампуванням під тиском з традиційних матеріалів.',
    ],
  },

  benefits: {
    header: 'Переваги',
    list: [
      <>
        <strong>Швидкість.</strong> Виготовлення форми та деталей займає
        набагато менше часу, ніж у технології з використанням штампування під
        тиском.
      </>,
      <>
        <strong>Гнучкість.</strong> Можна використовувати різні види пластику з
        різними властивостями – від прозорих до ударостійких, з різними
        текстурами поверхонь, можливе армування заставними елементами (болти,
        різьбові втулки, гайки).
      </>,
      <>
        <strong>Деталізація.</strong> Ця технологія дозволяє відтворити навіть
        найдрібніші елементи.
      </>,
      <>
        <strong>Економія.</strong> Процес значно дешевший, ніж створення
        металевих форм для масового виробництва.
      </>,
    ],
  },

  useCases: {
    header: 'У яких випадках дрібносерійне лиття буде корисним?',
    list: [
      'Створення прототипів, наприклад, для тестування, доопрацювання або презентації нових продуктів перед запуском у масове виробництво.',
      'Невеликі серії товарів для продажу.',
      'Запчастини та аксесуари, особливо коли виробництво оригінальних деталей уже припинено.',
      'У разі непередбачених обставин, пов’язаних з терміном поставок необхідних деталей (затримки у виробництві, проблеми перетину кордонів, занадто віддалена локація виробника).',
    ],
  },

  stages: {
    header: 'Етапи виробництва:',
    // eslint-disable-next-line @typescript-eslint/prefer-as-const
    nestedListIcon: 'cup' as 'cup',
    nestedList: [
      {
        header: '1. Створення майстер-моделі',
        paragraphs: [
          "Спочатку виготовляється 'майстер-модель' – це еталонний зразок деталі, який може бути створеним вручну або за допомогою 3D-друку. Ця модель визначає форму та деталі майбутніх виробів.",
        ],
      },
      {
        header: '2. Силіконова форма',
        paragraphs: [
          'Майстер-модель поміщають у спеціальну рамку, після чого заливають рідким силіконом. Коли силікон твердне, його розрізають і виймають майстер-модель – так утворюється точна копія форми.',
        ],
      },
      {
        header: '3. Заливка пластику у вакуумі',
        paragraphs: [
          'У готову силіконову форму заливають рідкий пластик. Вакуумація видаляє повітря, щоб пластик рівномірно заповнив всі дрібні деталі форми. Це дозволяє отримати точні, якісні копії без бульбашок чи дефектів.',
        ],
      },
      {
        header: '4. Затвердіння та фінальні роботи',
        paragraphs: [
          'Пластик твердне всередині форми (час залежить від матеріалу). Після цього форму розбирають, і деталь готова. Її можна обробити, пофарбувати чи відшліфувати для досягнення потрібного вигляду.',
        ],
      },
    ],
  },

  importantMoments: {
    header: 'На що звернути увагу?',
    list: [
      <>
        <strong>Матеріал деталей.</strong> Вибір пластику залежить від того, як
        і де ви будете використовувати виріб. Наприклад, для функціональних
        елементів важливо врахувати міцність і стійкість до температур.
      </>,
      <>
        <strong>Обмеження форм.</strong> Силіконові форми мають певний термін
        служби – чим більше копій, тим швидше форма зношується.
      </>,
      <>
        <strong>Розмір виробів.</strong> Технологія підходить для деталей
        середнього та малого розміру, але не для дуже великих об’єктів.
      </>,
    ],
  },

  whyNot3Dprinting: {
    header: 'Чому 3D-друку недостатньо?',
    paragraphs: [
      'На жаль, у наш час створення виробів за допомогою 3D принтера недостатньо, щоб задовольнити технологічні запити сучасної промисловості. Ці обмеження роблять 3D-друк менш ефективним для серійного виробництва в порівнянні з литтям у вакуумі.',
      <strong>З ключових недоліків 3D-друку виділяють:</strong>,
    ],
    list: [
      'Вузький асортимент матеріалів та палітри. Не всі матеріали для 3D-друку мають властивості, які потрібні для складних або функціональних виробів (наприклад, міцність, термостійкість).',
      'Спрощену деталізацію (підвищення якості поверхні різко підвищує вартість друку).',
      "Друк кожної деталі займає багато часу, особливо для великих або складних об'єктів.",
      'Для великої кількості деталей 3D-друк дорожчий, ніж лиття.',
    ],
  },
};

const en = {
  forWrapper: {
    content: {
      main: {
        header: 'Small-Batch vacuum plastic casting',
        description: (
          <>
            Small-batch vacuum plastic casting is a modern technology that
            allows the creation of a small number of plastic parts{' '}
            <strong>(from 1 to 1000 pieces)</strong> quickly, with high quality,
            and minimal costs.
          </>
        ),
      },
      img: {
        link: '/services/buttons.jpg',
        alt: 'Computer keyboard buttons scattered on a desk.',
      },
    },

    backgroundStyle: 2,
  },

  howItWorks: {
    header: 'How it works',
    paragraphs: [
      'Liquid multi-component polyurethane fills flexible molds (made of silicone or polyurethane) without using high pressure, as vacuum casting technology ensures perfect filling of the mold. The product will be nearly identical to those made using the technology of stamping under pressure with traditional materials.',
    ],
  },

  benefits: {
    header: 'Benefits',
    list: [
      <>
        <strong>Speed.</strong> Creating molds and parts takes much less time
        than stamping under pressure technology.
      </>,
      <>
        <strong>Flexibility.</strong> Various types of plastics with different
        properties can be used – from transparent to impact-resistant, with
        various surface textures. Reinforcement elements (bolts, threaded
        bushings, nuts) can be included.
      </>,
      <>
        <strong>Detailing.</strong> This technology allows for even the smallest
        elements to be replicated.
      </>,
      <>
        <strong>Cost efficiency.</strong> The process is significantly cheaper
        than creating metal molds for mass production.
      </>,
    ],
  },

  useCases: {
    header: 'When will small-batch casting be useful?',
    list: [
      'Creating prototypes for testing, refinement, or presentation of new products before launching them into mass production.',
      'Small batches of products for sale.',
      'Spare parts and accessories, especially when the production of original parts has already been discontinued.',
      'In case of unforeseen circumstances related to delivery times of necessary parts (production delays, border crossing issues, or the remote location of the manufacturer).',
    ],
  },

  stages: {
    header: 'Production stages:',
    // eslint-disable-next-line @typescript-eslint/prefer-as-const
    nestedListIcon: 'cup' as 'cup',
    nestedList: [
      {
        header: '1. Creation of the Master Model',
        paragraphs: [
          "First, a 'master model' is created – this is the reference sample of the part, which can be made manually or using 3D printing. This model defines the shape and details of the future products.",
        ],
      },
      {
        header: '2. Silicone mold',
        paragraphs: [
          'The master model is placed in a special frame, and liquid silicone is poured over it. Once the silicone hardens, it is cut open and the master model is removed, creating an exact mold replica.',
        ],
      },
      {
        header: '3. Plastic casting in vacuum',
        paragraphs: [
          'Liquid plastic is poured into the prepared silicone mold. The vacuum removes the air to ensure the plastic evenly fills all the fine details of the mold. This allows for precise, high-quality copies without bubbles or defects.',
        ],
      },
      {
        header: '4. Hardening and final work',
        paragraphs: [
          'The plastic hardens inside the mold (time depends on the material). Afterward, the mold is disassembled, and the part is ready. It can be processed, painted, or polished to achieve the desired appearance.',
        ],
      },
    ],
  },

  importantMoments: {
    header: 'Key considerations',
    list: [
      <>
        <strong>Material of the parts.</strong> The choice of plastic depends on
        how and where the product will be used. For functional elements, it is
        important to consider strength and temperature resistance.
      </>,
      <>
        <strong>Form limitations.</strong> Silicone molds have a certain
        lifespan – the more copies are made, the faster the mold wears out.
      </>,
      <>
        <strong>Product size.</strong> The technology is suitable for medium and
        small-sized parts, but not for very large objects.
      </>,
    ],
  },

  whyNot3Dprinting: {
    header: 'Why is 3D printing not enough?',
    paragraphs: [
      'Unfortunately, nowadays creating products using 3D printers is not sufficient to meet the technological demands of modern industry. These limitations make 3D printing less effective for mass production compared to vacuum casting.',
      <strong>Key drawbacks of 3D printing include:</strong>,
    ],
    list: [
      'Limited range of materials and colors. Not all materials for 3D printing have the properties needed for complex or functional products (e.g., strength, heat resistance).',
      'Simplified detailing (enhancing surface quality significantly increases the cost of printing).',
      'Printing each part takes a long time, especially for large or complex objects.',
      'For large quantities of parts, 3D printing is more expensive than casting.',
    ],
  },
};

export const textSerialProduction = {
  ua,
  en,
};
