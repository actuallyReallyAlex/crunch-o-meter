import { Options } from './types';
/**
 * Checks the Crunch-O-Meter at a particular Crunch Fitness location.
 * @param {Options} options -> Options object.
 * @returns {Number} -> A percentage representing the current occupancy at that location.
 */
declare const crunchOMeter: (options: Options) => Promise<number | void>;
export default crunchOMeter;
