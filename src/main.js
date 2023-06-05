import {render} from './render.js';
import Filters from './view/filters.js';
import BoardPresenter from './presenter/board-presenter.js';
import ModelWaypoint from './model/model-waypoint';
import {mockInit} from './mock/point';

const filterConteiner = document.querySelector('.trip-controls__filters');

const pageContainer = document.querySelector('.trip-events');

mockInit(6, 10);
const modelWaypoints = new ModelWaypoint();
const boardPresenter = new BoardPresenter({boardContainer: pageContainer, waypointsModel: modelWaypoints});

render(new Filters,filterConteiner);
boardPresenter.init();
