import { TEAMS_FETCHED } from '../actions/teams'



const reducer = (state = [], action = {}
    ) => {
    switch (action.type) {
    case TEAMS_FETCHED:
        return [...state, ...action.payload]

    default:
        return state
    }
}

export default reducer