const pointTypes = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const offersByType = [
  {
    type: 'taxi',
    offers: [{
      id: 1,
      title: 'Upgrade a business class',
      price: 120
    }, {
      id: 3,
      title: 'Switch to comfort',
      price: 50
    }]
  },
  {
    type: 'bus',
    offers: [{
      id: 7,
      title: 'Choose seats',
      price: 10
    }]
  },
  {
    type: 'train',
    offers: [{
      id: 1,
      title: 'Food order',
      price: 70
    }, {
      id: 5,
      title: 'Choose seats',
      price: 20
    }, {
      id: 7,
      title: 'Drinks order',
      price: 50
    }]
  },
  {
    type: 'ship',
    offers: [{
      id: 3,
      title: 'Bring a blanket',
      price: 12
    }, {
      id: 8,
      title: 'Change cabin',
      price: 76
    }, {
      id: 2,
      title: 'Add alcohol',
      price: 100
    }]
  },
  {
    type: 'drive',
    offers: [{
      id: 9,
      title: 'Upgrade a car',
      price: 150
    }]
  },
  {
    type: 'flight',
    offers: [{
      id: 1,
      title: 'Food order',
      price: 70
    }, {
      id: 7,
      title: 'Drinks order',
      price: 50
    }, {
      id: 5,
      title: 'Choose seats',
      price: 70
    }, {
      id: 6,
      title: 'Travel by ship',
      price: 100
    }]
  },
  {
    type: 'check-in',
    offers: [{
      id: 6,
      title: 'Online',
      price: 15
    }]
  },
  {
    type: 'sightseeing',
    offers: [{
      id: 6,
      title: 'Online',
      price: 15
    }]
  },
  {
    type: 'restaurant',
    offers: []
  },];


const getOffersByType = (type) => offersByType.find((currentTypeOffers) => currentTypeOffers.type === type).offers;
const getOfferName = (offerId) => offersByType.find((offer) => offer.id === offerId).title;
const getOfferPrice = (offerId) => offersByType.find((offer) => offer.id === offerId).price;

const descrText = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra.', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.', 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.', 'Aliquam erat volutpat.', 'Nunc fermentum tortor ac porta dapibus.', 'In rutrum ac purus sit amet tempus.'
];

const cities = [
  'Chamonix', 'Amsterdam', 'Geneva', 'Copenhagen', 'Murmansk', 'Liepaja'
];

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future'
};

const variousDates = [
  {
    dateFrom: '2023-01-17T18:12:13.375Z',
    dateTo: '2023-01-17T21:00:00.375Z'
  },
  {
    dateFrom: '2023-01-21T12:00:17.375Z',
    dateTo: '2023-01-21T15:30:17.375Z'
  },
  {
    dateFrom: '2023-01-25T06:30:15.375Z',
    dateTo: '2023-01-25T09:40:30.375Z'
  },
  {
    dateFrom: '2023-05-17T18:12:13.375Z',
    dateTo: '2023-05-17T21:00:00.375Z'
  },
  {
    dateFrom: '2023-05-21T12:00:17.375Z',
    dateTo: '2023-05-21T15:30:17.375Z'
  },
  {
    dateFrom: '2023-05-25T06:30:15.375Z',
    dateTo: '2023-05-25T09:40:30.375Z'
  },
  {
    dateFrom: '2023-07-17T18:12:13.375Z',
    dateTo: '2023-07-17T21:00:00.375Z'
  },
  {
    dateFrom: '2023-07-21T12:00:17.375Z',
    dateTo: '2023-07-21T15:30:17.375Z'
  },
  {
    dateFrom: '2023-07-25T06:30:15.375Z',
    dateTo: '2023-07-25T09:40:30.375Z'
  },
  {
    dateFrom: '2023-07-30T17:15:15.375Z',
    dateTo: '2023-07-30T18:15:18.375Z'
  }
];

const SortType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFERS: 'offers'
};

export {pointTypes, variousDates, offersByType, getOffersByType, descrText, cities, FilterType, SortType, getOfferName, getOfferPrice};
