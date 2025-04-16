// import React from 'react';
const ua = {
  forWrapper: {
    content: {
      main: {
        header: 'Виготовлення форм для лиття',
        description:
          'Форми для лиття — це важливий інструмент у серійному виробництві. Ми пропонуємо два найбільш поширені типи форм — силіконові та поліуретанові. Кожен із них має свої переваги, сферу застосування та особливості виготовлення.',
      },
      img: {
        img: '/services/molds.jpeg',
        webp: '/services/molds.webp',
        alt: 'Форми для лиття на столі.',
      },
    },

    backgroundStyle: 4,
  },

  silicone: {
    header: 'Силіконові форми',
    paragraphs: [
      'Силікон є популярним матеріалом для виготовлення форм завдяки своїй гнучкості, довговічності та стійкості до температурних змін. Силіконові форми підходять для виготовлення деталей з різних матеріалів, таких як епоксидні смоли, гіпс, віск, мило та навіть харчові продукти (шоколад, желе).',
    ],
    // eslint-disable-next-line @typescript-eslint/prefer-as-const
    nestedListIcon: 'pouring' as 'pouring',
    nestedList: [
      {
        header: 'Процес виготовлення',
        list: [
          '1. Вибирається або створюється майстер-модель, яка служитиме основою для форми. Її поверхню обробляють розділовими засобами для легшого зняття.',
          '2. Виробляється опалубка, в неї вкладають майстер-модель, встановлюють трубки, якими подаватиметься маса.',
          '3. Двокомпонентний силікон змішується та заливається в контейнер із моделлю, забезпечуючи відсутність бульбашок (застосовують вакуумування, якщо це необхідно). ',
          '4. Силікон застигає при кімнатній температурі (6-24 години) або під дією нагріву для прискорення процесу. Готову форму акуратно знімають з майстер-моделі.',
        ],
      },
      {
        header: 'Переваги',
        list: [
          '- Висока деталізація.',
          '- Гнучкість і легкість у використанні.',
          '- Стійкість до різних матеріалів (хімічна інертність).',
          '- Безпечність для харчових продуктів (у разі використання харчового силікону).',
        ],
      },
      {
        header: 'Кількість циклів використання',
        paragraphs: [
          'Силіконові форми можуть витримати від 30 до 200+ циклів залежно від умов експлуатації та матеріалу, що заливається.',
        ],
      },

      {
        header: 'Сфера застосування',
        paragraphs: [
          'Декоративні вироби (фігурки, прикраси), створення прототипів, дрібних деталей,  кондитерські вироби тощо',
        ],
      },
    ],
  },

  polyurethane: {
    header: 'Поліуретанові форми',
    paragraphs: [
      'Поліуретан — це жорсткіший матеріал у порівнянні з силіконом. Поліуретанові форми відомі своєю міцністю, тому їх використовують для виготовлення деталей зі складними формами та в умовах високого навантаження.',
    ],
    // eslint-disable-next-line @typescript-eslint/prefer-as-const
    nestedListIcon: 'pouring' as 'pouring',
    nestedList: [
      {
        header: 'Процес виготовлення',
        list: [
          '1. Як і в випадку з силіконом, готується майстер-модель та опалубка.',
          '2. Змішування компонентів. Поліуретан зазвичай також двокомпонентний (смола та затверджувач).',
          '3. Рідкий поліуретан заливається в контейнер із моделлю. Час роботи з матеріалом обмежений (5-20 хвилин), тому потрібна швидкість і точність. Процес затвердіння може проходити як при кімнатній температурі, так і з використанням нагріву для пришвидшення.',
          '4. Після полімеризації форму виймають, при необхідності обрізають надлишки та шліфують.',
        ],
      },
      {
        header: 'Переваги',
        list: [
          '- Висока міцність.',
          '- Стійкість до зношування.',
          '- Довший термін служби у порівнянні із силіконовими формами.',
          '- Підходить для роботи з великою кількістю жорстких матеріалів (бетон, пластик).',
        ],
      },
      {
        header: 'Кількість циклів використання',
        paragraphs: [
          'Поліуретанові форми витримують від 100 до 500 циклів, залежно від умов і матеріалу.',
        ],
      },

      {
        header: 'Сфера застосування',
        paragraphs: [
          'Виготовлення бетонних деталей (плитка, архітектурні елементи), промислове лиття з пластику, створення масивних і механічно навантажених виробів.',
        ],
      },
    ],
  },

  orderOptions: {
    header: 'Для яких виробів ви можете замовити форми',
    paragraphs: [
      'Наші фахівці докладно проконсультують вас і порадять, який матеріал краще підійде саме у вашому випадку, залежно від кількості запланованих заливок, технічної складності виробу та його функцій.',
    ],
    list: [
      'Мило',
      'Свічки',
      'Гіпс',
      'Фігурний бетон чи плитка',
      'Декоративні прикраси',
      'Епоксидна смола',
    ],
  },

  table: {
    headers: ['Характеристика', 'Силіконові форми', 'Поліуретанові форми'],
    rows: [
      ['Гнучкість', 'Висока', 'Низька'],
      ['Міцність', 'Середня', 'Висока'],
      ['Деталізація', 'Висока', 'Середня'],
      ['Вартість', 'Дещо нижча', 'Вища'],
      ['Кількість циклів', '30-200+', '100-500'],
      [
        'Підходять для',
        'Декор, прототипи, харчові вироби',
        'Бетон, пластик, масивні вироби',
      ],
    ],
    title: 'Порівняння силіконових та поліуретанових форм',
  },
};

const en = {
  forWrapper: {
    content: {
      main: {
        header: 'Casting molds manufacturing',
        description:
          'Molds are essential tools in serial production. We offer two of the most common types of molds — silicone and polyurethane. Each has its own advantages, areas of application, and manufacturing characteristics.',
      },
      img: {
        img: '/services/molds.jpeg',
        webp: '/services/molds.webp',
        alt: 'Molds on a table.',
      },
    },

    backgroundStyle: 4,
  },

  silicone: {
    header: 'Silicone molds',
    paragraphs: [
      'Silicone is a popular material for mold making due to its flexibility, durability, and resistance to temperature changes. Silicone molds are suitable for producing parts from various materials such as epoxy resins, gypsum, wax, soap, and even food products (chocolate, jelly).',
    ],
    // eslint-disable-next-line @typescript-eslint/prefer-as-const
    nestedListIcon: 'pouring' as 'pouring',
    nestedList: [
      {
        header: 'Manufacturing Process',
        list: [
          '1. A master model is selected or created, which will serve as the base for the mold. Its surface is treated with release agents for easier removal.',
          '2. A mold frame is made, and the master model is placed inside. Tubes are added for the pouring process.',
          '3. The two-component silicone is mixed and poured into the mold container, ensuring no air bubbles (vacuuming is applied if necessary).',
          '4. The silicone sets at room temperature (6-24 hours) or can be accelerated with heat. The finished mold is carefully removed from the master model.',
        ],
      },
      {
        header: 'Advantages',
        list: [
          '- High detail accuracy.',
          '- Flexibility and ease of use.',
          '- Resistance to various materials (chemical inertness).',
          '- Safe for food products (when using food-grade silicone).',
        ],
      },
      {
        header: 'Number of use cycles',
        paragraphs: [
          'Silicone molds can withstand from 30 to 200+ cycles, depending on the operating conditions and the material being poured.',
        ],
      },

      {
        header: 'Applications',
        paragraphs: [
          'Decorative items (figurines, ornaments), prototype creation, small parts, confectionery products, etc.',
        ],
      },
    ],
  },

  polyurethane: {
    header: 'Polyurethane molds',
    paragraphs: [
      'Polyurethane is a stiffer material compared to silicone. Polyurethane molds are known for their strength, making them ideal for producing parts with complex shapes or those under high stress.',
    ],
    // eslint-disable-next-line @typescript-eslint/prefer-as-const
    nestedListIcon: 'pouring' as 'pouring',
    nestedList: [
      {
        header: 'Manufacturing process',
        list: [
          '1. As with silicone, a master model and a mold frame are prepared.',
          '2. The components are mixed. Polyurethane is usually a two-component system (resin and hardener).',
          '3. The liquid polyurethane is poured into the mold container. The material has a limited working time (5-20 minutes), so speed and precision are essential. Curing can occur at room temperature or with heat to speed up the process.',
          '4. After polymerization, the mold is removed, and any excess material is trimmed and polished as needed.',
        ],
      },
      {
        header: 'Advantages',
        list: [
          '- High strength.',
          '- Wear resistance.',
          '- Longer service life compared to silicone molds.',
          '- Suitable for working with a variety of rigid materials (concrete, plastic).',
        ],
      },
      {
        header: 'Number of Use Cycles',
        paragraphs: [
          'Polyurethane molds can withstand from 100 to 500 cycles, depending on the conditions and material used.',
        ],
      },

      {
        header: 'Applications',
        paragraphs: [
          'Production of concrete parts (tiles, architectural elements), industrial plastic casting, creating heavy-duty and mechanically demanding products.',
        ],
      },
    ],
  },

  orderOptions: {
    header: 'Which products can you order molds for?',
    paragraphs: [
      'Our specialists will provide detailed consultations and recommend the most suitable material for your specific case, depending on the number of planned pours, technical complexity of the product, and its functions.',
    ],
    list: [
      'Soap',
      'Candles',
      'Gypsum',
      'Figurative concrete or tiles',
      'Decorative ornaments',
      'Epoxy resin',
    ],
  },

  table: {
    headers: ['Characteristic', 'Silicone molds', 'Polyurethane molds'],
    rows: [
      ['Flexibility', 'High', 'Low'],
      ['Strength', 'Medium', 'High'],
      ['Detail accuracy', 'High', 'Medium'],
      ['Cost', 'Somewhat lower', 'Higher'],
      ['Number of Cycles', '30-200+', '100-500'],
      [
        'Suitable for',
        'Decor, prototypes, food products',
        'Concrete, plastic, heavy-duty products',
      ],
    ],
    title: 'Silicone vs Polyurethane molds comparison',
  },
};

export const textMolds = {
  ua,
  en,
};
