import { 
  FORM_NEW_PROJECT,
  FORM_CHANGE_FIELD,
  FORM_CHANGE_EVENT_FIELD
} from '../actions';

const newEvent = {
  eventDate: '',
  eventHour: '',
  eventPlace: '',
  eventName: '',
  eventDesc: ''
}

const newProject = {
  logo: '',
  name: '',
  summary: '',
  description: '',
  skills: [],
  contact: '',
  team: '',
  price: '',
  sponsors: '',
  events: [{...newEvent}],
  eventDate: '',
  eventHour: '',
  eventPlace: '',
  eventName: '',
  eventDesc: ''
}


const reducer = (state = null, action) => {
  switch(action.type) {
    case FORM_NEW_PROJECT:
      return {...newProject, projectType: action.projectType}
    case FORM_CHANGE_FIELD:
      return {...state, [action.key]: action.value}
    case FORM_CHANGE_EVENT_FIELD: {
      const events = state.events.map(
        (event, index) => 
          index === action.index 
          ? {...event, [action.key]: action.value}
          : {...event}
        )
        return {...state, events}
      }
    default:
      return state
  }
}

export default reducer;