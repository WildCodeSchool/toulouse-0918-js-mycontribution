export const EVENTS_FETCH_REQUEST = 'EVENTS_FETCH_REQUEST'
export const EVENTS_FETCH_SUCCESS = 'EVENTS_FETCH_SUCCESS'
export const EVENTS_FETCH_ERROR = 'EVENTS_FETCH_ERROR'

export const eventsFetchRequest = () => {
  return {
    type: EVENTS_FETCH_REQUEST
  }
}

export const eventsFetchSuccess = (events) => {
  return {
    type: EVENTS_FETCH_SUCCESS,
    events
  }
}

export const eventsFetchError = (error) => {
  return {
    type: EVENTS_FETCH_ERROR,
    error
  }
}