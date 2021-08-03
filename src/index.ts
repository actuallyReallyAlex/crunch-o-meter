import cheerio from 'cheerio';
import { Options } from './types';

/**
 * Checks the Crunch-O-Meter at a particular Crunch Fitness location.
 * @param {Options} options -> Options object. 
 * @returns {Number} -> A percentage representing the current occupancy at that location.
 */
const crunchOMeter = async (options: Options = { corsProxy: false, location: 'unknown' }): Promise<number | void> => {
  try {
    const { corsProxy, location } = options;

    let url = `https://www.crunch.com/locations/${location}`;

    if (corsProxy) {
      url = 'https://cors-anywhere.herokuapp.com/' + url;
    }

    const response = await fetch(url);
    const data = await response.text();
    const $ = cheerio.load(data);

    const percentage = $('#occupancy-info .progress-bar-wrapper .progress-background div').attr('style')?.split(' ')[1];

    if (!percentage) {
      throw new Error('Error parsing document');
    }

    const occupancy = parseFloat(percentage) / 100;
    return occupancy;
  } catch (error) {
    console.error(error);
    return;
  }
}

export default crunchOMeter;
