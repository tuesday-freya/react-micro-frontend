/*
 * action types
 */
export const LOAD_SITE = 'LOAD_SITE';

  /*
   * action creators
*/

export function loadSite(config) {
  return { type: LOAD_SITE, config }
}
