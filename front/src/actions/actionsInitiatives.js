export const INITIATIVES_FETCH_REQUEST = 'INITIATIVES_FETCH_REQUEST'
export const INITIATIVES_FETCH_SUCCESS = 'INITIATIVES_FETCH_SUCCESS'
export const INITIATIVES_FETCH_ERROR = 'INITIATIVES_FETCH_ERROR'

export const initiativesFetchRequest = () => {
  return {
    type: INITIATIVES_FETCH_REQUEST
  }
}

export const initiativesFetchSuccess = (events) => {
  return {
    type: INITIATIVES_FETCH_SUCCESS,
    events
  }
}

export const initiativesFetchError = (error) => {
  return {
    type: INITIATIVES_FETCH_ERROR,
    error
  }
}