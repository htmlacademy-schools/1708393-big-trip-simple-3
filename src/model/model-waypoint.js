export default class ModelWaypoint {
  #arrWaypoints = null;

  constructor(arrWaypoints) {
    this.#arrWaypoints = arrWaypoints;
  }

  get getWaypoints() {
    return this.#arrWaypoints;
  }
}
