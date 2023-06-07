import {getRandomItemFromItems, getRandomPrice, createIDgenerator} from '../utils.js';
import {variousDates, pointTypes, getOffersByType} from './data.js';
import { generateDestinations } from './destination.js';

const pointsId = [];

const getRandomPoint = () => {
  let id = createIDgenerator();
  while (pointsId.indexOf(id) >= 0) {
    id = createIDgenerator();
  }
  pointsId.push(id);
  const basePrice = getRandomPrice();
  const dates = getRandomItemFromItems(variousDates);
  const dateFrom = dates.dateFrom;
  const dateTo = dates.dateTo;
  const destination = generateDestinations();
  const type = getRandomItemFromItems(pointTypes);
  const offers = getOffersByType(type);

  return {
    basePrice, dateFrom, dateTo, destination, id, offers, type
  };
};

export {getRandomPoint};
