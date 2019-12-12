import { FETCH_TEAM_SUCCESS } from '../actions/teams'
import { PLAYER_CREATE_SUCCESS } from "../actions/players";

export default (state = {}, action = {}) => {
    switch (action.type) {
        case FETCH_TEAM_SUCCESS:
            return { ...action.payload }

        case PLAYER_CREATE_SUCCESS:
            return {
                ...state,
                players: [...state.players, action.payload]
            }

        case "DELETE_TEAM":
            return {};

        default:
            return state
    }
}