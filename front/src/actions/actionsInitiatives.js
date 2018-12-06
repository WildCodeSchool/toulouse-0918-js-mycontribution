export const INITIATIVES_FETCH_REQUEST = 'INITIATIVES_FETCH_REQUEST'
export const INITIATIVES_FETCH_SUCCESS = 'INITIATIVES_FETCH_SUCCESS'
export const INITIATIVES_FETCH_ERROR = 'INITIATIVES_FETCH_ERROR'

export const initiativesFetchRequest = () => {
  return {
    type: INITIATIVES_FETCH_REQUEST
  }
}

export const initiativesFetchSuccess = (initiative) => {
  return {
    type: INITIATIVES_FETCH_SUCCESS,
    initiative
  }
}

export const initiativesFetchError = (error) => {
  return {
    type: INITIATIVES_FETCH_ERROR,
    error
  }
}
