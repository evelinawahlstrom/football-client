import { combineReducers } from 'redux'
import teams from './teams'
import team from './team'
import auth from './auth'


export default combineReducers({
  teams,
  team,
  auth
})