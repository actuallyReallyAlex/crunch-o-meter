/**
 * Checks the Crunch-O-Meter at a particular Crunch Fitness location.
 * @param {String} location -> Location to check. This can be found by visiting https://www.crunch.com/locations/
 * @returns {Number} -> A percentage representing the current occupancy at that location.
 */
declare const crunchOMeter: (location: string) => Promise<number | void>;
export default crunchOMeter;
