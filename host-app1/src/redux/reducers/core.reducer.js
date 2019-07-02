import {
  LOAD_SITE
} from '../actions/core.actions'

export function siteTemplates(lastState = {}, action) {
  switch (action.type) {
    case LOAD_SITE:
    return {
      ...lastState,
      ...action.config
      }
    default:
      return lastState
  }
}