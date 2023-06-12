import dayjs from 'dayjs';
import {SortType} from './data';

const sorts = {
  [SortType.DAY]: undefined,
  [SortType.EVENT]: undefined,
  [SortType.OFFER]: undefined,
  [SortType.PRICE]: (point1, point2) => point2.basePrice - point1.basePrice,
  [SortType.TIME]: (point1, point2) => dayjs(point1.dateFrom).diff(dayjs(point2.dateFrom)),
};

const offOptions = ['event', 'offer'];
const isSelectedOption = (sortType) => (offOptions.includes(sortType) ? 'disabled' : '');

const updateItem = (items, update) => items.map((item) => item.id === update.id ? update : item);

function sortByDay(pointA, pointB) {
  return dayjs(pointA.dateFrom).diff(dayjs(pointB.dateFrom));
}

function sortByPrice(pointA, pointB) {
  return pointB.basePrice - pointA.basePrice;
}

export {isSelectedOption, sorts, updateItem, sortByDay, sortByPrice};
