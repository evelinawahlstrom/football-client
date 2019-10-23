import { FETCH_TEAM_SUCCESS } from '../actions/teams'

export default (state = {}, action = {}) => {
    switch (action.type) {
        case FETCH_TEAM_SUCCESS:
            return { ...action.payload }
    
        default:
            return state
    }
}