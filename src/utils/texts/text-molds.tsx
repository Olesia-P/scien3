// import React from 'react';

export const textMolds = {
  forWrapper: {
    content: {
      main: {
        header: 'Виготовлення форм для лиття',
        description:
          'Форми для лиття — це важливий інструмент у серійному виробництві. Ми пропонуємо два найбільш поширені типи форм — силіконові та поліуретанові. Кожен із них має свої переваги, сферу застосування та особливості виготовлення.',
      },
      img: {
        link: '/services/molds.jpeg',
        alt: 'Різні форми для лиття на столі',
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
      ['Вартість', 'Вища', 'Дещо нижча'],
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