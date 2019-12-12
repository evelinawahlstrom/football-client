import { TEAMS_FETCHED } from '../actions/teams'
import { TEAM_CREATE_SUCCESS } from '../actions/teams'
import { DELETE_TEAM_SUCCESS } from '../actions/teams'

const reducer = (state = [], action = {}
) => {
    // console.log("STATE", state, "ACTION", action);
    switch (action.type) {
        case TEAMS_FETCHED:
            return [...state, ...action.payload]

        case TEAM_CREATE_SUCCESS:
            return [...state, { ...action.payload }]


        case DELETE_TEAM_SUCCESS:
            // filter out the team that you deleted
            return state.filter(team => team.id !== action.payload);

        default:
            return state
    }
}

export default reducer