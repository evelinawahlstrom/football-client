import { TEAMS_FETCHED } from '../actions/teams'
import { TEAM_CREATE_SUCCESS } from '../actions/teams'


const reducer = (state = [], action = {}
    ) => {
    switch (action.type) {
    case TEAMS_FETCHED:
        return [...state, ...action.payload]
    
    case TEAM_CREATE_SUCCESS:
            return [...state, {...action.payload}]

    default:
        return state
    }
}

export default reducer