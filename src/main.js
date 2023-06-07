import Filters from './view/filters.js';
import BoardPresenter from './presenter/board-presenter';
import ModelWaypoint from './model/model-waypoint';
import {getRandomPoint} from './mock/point';
import {render} from './framework/render';
import { generateFilter } from './mock/filter.js';

const POINT_COUNT = 3;
const pageContainer = document.querySelector('.trip-events');
const points = Array.from({length: POINT_COUNT}, getRandomPoint);
const pointsModel = new ModelWaypoint(points);
const boardPresenter = new BoardPresenter({boardContainer: pageContainer, pointsModel});

const filterContainer = document.querySelector('.trip-controls__filters');
const filters = generateFilter(pointsModel.points);
render (new Filters(filters), filterContainer);
boardPresenter.init();
