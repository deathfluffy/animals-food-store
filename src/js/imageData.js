const imageData = [
  {
    _id: '1',
    name: 'Складна дорожня миска',
    img: 'https://i.imgur.com/0tqdZ5z.jpg',
    category: 'Аксесуари для собак',
    price: 127,
    isInStock: true,
    artukyl: 46782,
    brend: '1ST Choice',
  },
  {
    _id: '2',
    name: 'Пляшка подвійна',
    img: 'https://i.imgur.com/UZKG6lm.jpg',
    category: 'Аксесуари для собак',
    price: 241,
    isInStock: true,
    artukyl: 52569,
    brend: 'DEXAS H-DuOs',
  },
  {
    _id: '3',
    name: 'Пластикова миска 500 мл',
    img: 'https://i.imgur.com/8V8iVxW.png',
    category: 'Аксесуари для собак',
    price: 501,
    isInStock: true,
    artukyl: 66264,
    brend: 'AnimAll',
  },
  {
    _id: '4',
    name: 'Візок-переноска',
    img: 'https://i.imgur.com/aHksCh2.jpg',
    category: 'Аксесуари для собак',
    price: 1025,
    isInStock: true,
    artukyl: 51173,
    brend: 'Trixie Tbag Trolley',
  },
  {
    _id: '5',
    name: 'Двосторонній лежак',
    img: 'https://i.imgur.com/PnkCwkO.jpg',
    category: 'Аксесуари для собак',
    price: 623,
    isInStock: true,
    artukyl: 93246,
    brend: 'Savic',
  },
  {
    _id: '6',
    name: 'Силіконовий килимок',
    img: 'https://i.imgur.com/4LApYtp.jpg',
    category: 'Аксесуари для собак',
    price: 500,
    isInStock: false,
    artukyl: 31563,
    brend: 'WahoPet',
  },
  {
    _id: '7',
    name: 'Джутовий апорт',
    img: 'https://i.imgur.com/wCpAHzN.jpg',
    category: 'Аксесуари для собак',
    price: 253,
    isInStock: true,
    artukyl: 75449,
    brend: 'Sprenger',
  },
  {
    _id: '8',
    name: 'Cвисток ультразвуковий',
    img: 'https://i.imgur.com/3WTSHnH.jpg',
    category: 'Аксесуари для собак',
    price: 210,
    isInStock: true,
    artukyl: 524528,
    brend: 'Sprenger',
  },
  {
    _id: '9',
    name: 'Поїлка дорожня',
    img: 'https://i.imgur.com/XLUS4Rf.jpg',
    category: 'Аксесуари для собак',
    price: 420,
    isInStock: true,
    artukyl: 15379,
    brend: 'TRIXIE',
  },
  {
    _id: '10',
    name: 'Гумовий повідець',
    img: 'https://i.imgur.com/mTi3MrG.jpg',
    category: 'Аксесуари для собак',
    price: 710,
    isInStock: true,
    artukyl: 25857,
    brend: 'Sprenger',
  },
  {
    _id: '11',
    name: 'Гребінець',
    img: 'https://i.imgur.com/c2rq7Ls.jpg',
    category: 'Аксесуари для котів',
    price: 300,
    isInStock: true,
    artukyl: 43157,
    brend: 'TRIXIE',
  },
  {
    _id: '12',
    name: 'Іграшка для кота',
    img: 'https://i.imgur.com/6WxqJYh.jpg',
    category: 'Аксесуари для котів',
    price: 175,
    isInStock: false,
    artukyl: 84352,
    brend: 'GimCat',
  },
  {
    _id: '13',
    name: 'Пінцет',
    img: 'https://i.imgur.com/Rlc8E3w.jpg',
    category: 'Аксесуари для котів',
    price: 300,
    isInStock: true,
    artukyl: 41947,
    brend: 'Trixie',
  },
  {
    _id: '14',
    name: 'Шлейка з повідцем',
    img: 'https://i.imgur.com/1TkZ45A.jpg',
    category: 'Аксесуари для котів',
    price: 515,
    isInStock: true,
    artukyl: 43157,
    brend: 'Trixie',
  },
  {
    _id: '15',
    name: 'Лопатка з підставкою',
    img: 'https://i.imgur.com/hzhUCpT.jpg',
    category: 'Аксесуари для котів',
    price: 239,
    isInStock: false,
    artukyl: 21156,
    brend: 'Trixie',
  },
  {
    _id: '16',
    name: 'Рукавиця масажна',
    img: 'https://i.imgur.com/gZoE5Yu.png',
    category: 'Аксесуари для котів',
    price: 160,
    isInStock: true,
    artukyl: 74297,
    brend: 'Trixie',
  },
  {
    _id: '17',
    name: 'Лопатка з отворами',
    img: 'https://i.imgur.com/RDcKqtT.png',
    category: 'Аксесуари для котів',
    price: 50,
    isInStock: true,
    artukyl: 95657,
    brend: 'Trixie',
  },
  {
    _id: '18',
    name: 'Колтуноріз-стріппінг',
    img: 'https://i.imgur.com/yW11Ydx.png',
    category: 'Аксесуари для котів',
    price: 574,
    isInStock: true,
    artukyl: 43157,
    brend: 'Trixie',
  },
  {
    _id: '19',
    name: 'Контейнер-переноска',
    img: 'https://i.imgur.com/VpwqW4E.png',
    category: 'Аксесуари для котів',
    price: 950,
    isInStock: true,
    artukyl: 12485,
    brend: 'Trixie',
  },
  {
    _id: '20',
    name: 'Дряпка похила',
    img: 'https://i.imgur.com/xTza1L5.png',
    category: 'Аксесуари для котів',
    price: 945,
    isInStock: true,
    artukyl: 21458,
    brend: 'Trixie',
  },
  {
    _id: '21',
    name: 'Сухий корм для котів',
    img: 'https://i.imgur.com/1vGgijk.png',
    category: 'Корм для котів/собак',
    price: 1067,
    isInStock: true,
    artukyl: 14532,
    brend: 'ProPlan Sterilised',
  },
  {
    _id: '22',
    name: 'Вологий корм для котів',
    img: 'https://i.imgur.com/8bX7pKL.png',
    category: 'Корм для котів/собак',
    price: 574,
    isInStock: true,
    artukyl: 35216,
    brend: 'ProPlan Kitten',
  },
  {
    _id: '23',
    name: 'Вологий корм делюкс',
    img: 'https://i.imgur.com/rUwiifR.png',
    category: 'Корм для котів/собак',
    price: 27,
    isInStock: true,
    artukyl: 89735,
    brend: 'Gourmet Gold',
  },
  {
    _id: '24',
    name: 'Вологий корм 2 кг',
    img: 'https://i.imgur.com/CIJlupA.png',
    category: 'Корм для котів/собак',
    price: 850,
    isInStock: false,
    artukyl: 17658,
    brend: 'Royal Canin Kitten',
  },
  {
    _id: '25',
    name: 'Вологий корм для котів',
    img: 'https://i.imgur.com/TdGKCyE.png',
    category: 'Корм для котів/собак',
    price: 48,
    isInStock: true,
    artukyl: 95615,
    brend: 'Royal Canin Urinary',
  },
  {
    _id: '26',
    name: 'Вологий корм для котів',
    img: 'https://i.imgur.com/FNNbFQZ.png',
    category: 'Корм для котів/собак',
    price: 750,
    isInStock: true,
    artukyl: 86458,
    brend: 'Purina Pro Plan',
  },
  {
    _id: '27',
    name: 'Сухий корм для собак',
    img: 'https://i.imgur.com/0wGZkau.png',
    category: 'Корм для котів/собак',
    price: 1830,
    isInStock: true,
    artukyl: 35216,
    brend: 'Dog Chow',
  },
  {
    _id: '28',
    name: 'Сухий корм для собак 3кг',
    img: 'https://i.imgur.com/NMP8ZhX.png',
    category: 'Корм для котів/собак',
    price: 820,
    isInStock: true,
    artukyl: 83154,
    brend: 'Savory Medium Breed',
  },
  {
    _id: '29',
    name: 'Паштет для собак 195г',
    img: 'https://i.imgur.com/g8He1TV.png',
    category: 'Корм для котів/собак',
    price: 90,
    isInStock: false,
    artukyl: 73269,
    brend: 'Royal Starter Mousse',
  },
  {
    _id: '30',
    name: 'Сухий корм для чихуахуа',
    img: 'https://i.imgur.com/5RHbCw4.png',
    category: 'Корм для котів/собак',
    price: 566,
    isInStock: true,
    artukyl: 16470,
    brend: 'Royal Canin',
  },
];
export default imageData;