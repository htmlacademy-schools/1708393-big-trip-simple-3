import {createIDgenerator, getRandomItemFromItems, } from '../utils';
import {descrText, cities} from './data';

const destinations = [];
const generateDestinationId = createIDgenerator();

const generatePictures = () => {
  const pictures = [];
  for (let i = 0; i < 6; i++) {
    const picture = {
      src: 'img/photos/1.jpg',
      description: getRandomItemFromItems(descrText)
    };
    pictures.push(picture);
  }
  return pictures;
};

const generateDestinations = (n) => {
  for (let i = 0; i < n; i++) {
    const destination = {
      id: generateDestinationId(),
      description: getRandomItemFromItems(descrText),
      name: getRandomItemFromItems(cities),
      pictures: generatePictures()
    };
    destinations.push(destination);
  }
};

const getDestinationByID = (id) => destinations.find((item) => item.id === id);

export {generateDestinations, destinations, getDestinationByID};
