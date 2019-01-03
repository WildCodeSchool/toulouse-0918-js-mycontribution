export const PROJECTS_FETCH_REQUEST = 'PROJECTS_FETCH_REQUEST'
export const PROJECTS_FETCH_SUCCESS = 'PROJECTS_FETCH_SUCCESS'
export const PROJECTS_FETCH_ERROR = 'PROJECTS_FETCH_ERROR'

export const projectsFetchRequest = () => {
  return {
    type: PROJECTS_FETCH_REQUEST
  }
}

export const projectsFetchSuccess = (projecType,project) => {
  return {
    type: PROJECTS_FETCH_SUCCESS,
    projecType,
    project
  }
}

export const projectsFetchError = (error) => {
  return {
    type: PROJECTS_FETCH_ERROR,
    error
  }
}