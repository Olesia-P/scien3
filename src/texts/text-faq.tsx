import React from 'react';

const uk = {
  mainHeader: 'Поширені запитання',
  questionCards: [
    {
      question: 'Яка вартість ваших виробів?',
      text: [
        'У нас немає універсальної ціни на всі вироби. Розрахунок ціни для дрібносерійного лиття пластмас у вакуумі залежить від кількох основних факторів: ',
        <>
          <strong>Вартість виготовлення майстер-моделі.</strong> Якщо
          майстер-модель створюється спеціально для вашого проєкту (наприклад,
          3D-друком або ручною обробкою), її виготовлення додає значну частку до
          загальної вартості, особливо для малих партій.
        </>,
        <>
          <strong>Ціна форми для лиття.</strong> Вартість залежить від розміру,
          складності деталі та якості силікону або поліуретану. Форми мають
          обмежений термін служби, тому на більші партії може знадобитися кілька
          форм.
        </>,
        <>
          <strong>Матеріали для лиття.</strong> Тип пластику (прозорий, гнучкий,
          термостійкий чи ударостійкий пластик має різну ціну). Кількість
          потрібного матеріалу також має значення.
        </>,
        <>
          <strong>Кількість виробів.</strong> Ціна за одну деталь зменшується зі
          зростанням тиражу, оскільки витрати на форму та підготовку
          розподіляються на більшу кількість виробів.
        </>,
        <>
          <strong>Складність деталей.</strong> Деталі зі складною геометрією
          можуть потребувати додаткової ручної роботи для обробки або навіть
          створення роздільних форм, що збільшує витрати.
        </>,
        <>
          <strong>Обробка готових виробів.</strong> Якщо потрібна додаткова
          обробка (шліфування, фарбування, полірування), це додає до загальної
          вартості. Спеціальні покриття або тести на якість також впливають на
          кінцеву ціну.
        </>,
        <>
          <strong>Час виконання замовлення.</strong> Термінове замовлення може
          коштувати дорожче через необхідність пришвидшити процеси.
        </>,
        <em>
          {' '}
          Для більш точного розрахунку вам необхідно, разом із заявкою на пошту
          відправити фотографії, ескізи або креслення виробу. Швидше і точніше
          за все ми зможемо зробити розрахунок по 3D-моделі.
        </em>,
      ],
    },
    {
      question: 'Що таке прототип і для чого він потрібен?',
      text: [
        'Дослідний зразок (прототип, майстер-модель) – це повноцінна модель виробу, що запускається в серію. Усі параметри подібного зразка відповідають натуральним величинам та характеристикам майбутнього продукту.',
        'Подібні зразки необхідні для проведення якісних випробувань – наприклад, на збирання або тестування функцій. Саме завдяки подібному прототипу ми можемо заздалегідь виявити та відкоригувати всі недоліки, перед тим як ніж запускати виріб у серію.',
        'Крім того, дослідний зразок знадобиться вам для створення гнучких форм у випадку виготовлення виробу вакуумним литтям.',
      ],
    },
    {
      question: 'Як ви обробляєте готові вироби після лиття?',
      text: [
        'За допомогою зрізання та фрезерування проводиться зачистка від технологічних елементів, литників та грату. За потреби виріб фарбується.',
      ],
    },
    {
      question: 'Яку мінімальну кількість деталей можна замовити?',
      text: [
        'Ми спеціалізуємося на дрібносерійному литті, але можемо виготовити виріб і в одиничному екземплярі. Але чим менше буде партія, тим вище буде вартість одного виробу.',
      ],
    },
  ],
};

const en = {
  mainHeader: 'Frequently asked questions',
  questionCards: [
    {
      question: 'What is the cost of your products?',
      text: [
        'We do not have a universal price for all products. The pricing for small-batch plastic vacuum casting depends on several key factors:',
        <>
          <strong>Cost of creating the master model.</strong> If the master
          model is specially created for your project (e.g., through 3D printing
          or manual crafting), its production adds a significant portion to the
          total cost, especially for small batches.
        </>,
        <>
          <strong>Cost of the casting mold.</strong> The price depends on the
          size, complexity of the part, and the quality of the silicone or
          polyurethane used. Molds have a limited service life, so multiple
          molds may be required for larger batches.
        </>,
        <>
          <strong>Materials for casting.</strong> The type of plastic (clear,
          flexible, heat-resistant, or impact-resistant plastic comes at
          different prices) and the amount of material required matter.
        </>,
        <>
          <strong>Quantity of products.</strong> The cost per part decreases as
          the batch size increases, since mold and preparation costs are spread
          across a larger number of products.
        </>,
        <>
          <strong>Complexity of parts.</strong> Parts with complex geometries
          may require additional manual work for finishing or even the creation
          of separate molds, which increases the costs.
        </>,
        <>
          <strong>Post-processing of finished products.</strong> If additional
          processing is required (sanding, painting, polishing), this adds to
          the overall cost. Special coatings or quality tests also affect the
          final price.
        </>,
        <>
          <strong>Lead time.</strong> Expedited orders may cost more due to the
          need to accelerate the processes.
        </>,
        <em>
          {' '}
          For a more accurate estimate, please send us photographs, sketches, or
          drawings of the product along with your inquiry. We will be able to
          provide the most precise calculation with a 3D model.
        </em>,
      ],
    },
    {
      question: 'What is a prototype and why is it necessary?',
      text: [
        'A prototype (master model) is a fully functional model of the product that will go into serial production. All parameters of such a sample correspond to the real dimensions and characteristics of the final product.',
        'Prototypes are needed for thorough testing, such as assembly or function testing. Thanks to the prototype, we can identify and correct any issues before launching the product into full-scale production.',
        'In addition, the prototype is essential for creating flexible molds when manufacturing a product using vacuum casting.',
      ],
    },
    {
      question: 'How do you process the finished products after casting?',
      text: [
        'Technological elements, sprues, and flash are removed through cutting and milling. If necessary, the product is painted.',
      ],
    },
    {
      question: 'What is the minimum quantity of parts I can order?',
      text: [
        'We specialize in small-batch casting but can also produce a single unit. However, the smaller the batch, the higher the cost per piece.',
      ],
    },
  ],
};

export const textFaq = {
  uk,
  en,
};
