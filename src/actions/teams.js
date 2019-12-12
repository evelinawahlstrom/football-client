import request from 'superagent'

export const TEAMS_FETCHED = 'TEAMS_FETCHED'

export const TEAM_CREATE_SUCCESS = 'TEAM_CREATE_SUCCESS'

export const FETCH_TEAM_SUCCESS = 'FETCH_TEAM_SUCCESS'

export const DELETE_TEAM_SUCCESS = "DELETE_TEAM_SUCCESS";

const baseUrl = 'http://localhost:4000'

const teamsFetched = teams => ({
  type: TEAMS_FETCHED,
  payload: teams
})

export const loadTeams = () => (dispatch, getState) => {
  // when the state already contains teams, we don't fetch them again
  console.log("Hi", getState())
  if (getState().teams.length !== 0) return
  
  // a GET /TEAMS request
  request(`${baseUrl}/teams/`)
    .then(response => {
      // dispatch an TEAMS_FETCHED action that contains the TEAMS
      dispatch(teamsFetched(response.body))
    })
    .catch(console.error)
}

const teamCreateSuccess = team => ({
  type: TEAM_CREATE_SUCCESS,
  payload: team
})

export const createTeam = (data) => (dispatch, getState) => {
  const token = getState().auth;
  // .send(data) is only here because of superagent 
  // we want to send back the created team, in the body
  request
    .post(`${baseUrl}/teams`)
    .set("Authorization", `Bearer ${token}`)
    .send(data)
    .then(response => {
      dispatch(teamCreateSuccess(response.body))
    })
    .catch(console.error)
}


const fetchTeamSuccess = team => ({
    type: FETCH_TEAM_SUCCESS,
    payload: team
})

export const loadTeam = id => (dispatch, getState) => {
    console.log('CAN WE GET THE STATE??', getState())
    request(`${baseUrl}/teams/${id}`)
        .then(response => {
            console.log(response)
            dispatch(fetchTeamSuccess(response.body))
        })
}

const deleteTeamSuccess = teamId => ({
  type: DELETE_TEAM_SUCCESS,
  payload: teamId
});


/// OBSOBSOBS: When deleting a team, we don't need a getState, because we're 
//  not returning a state, just deleting an (id)
export const deleteTeam = (id) => (dispatch, getState) => {
const token = getState().auth;
  request
    .delete(`${baseUrl}/teams/${id}`)
    .set("Authorization", `Bearer ${token}`)
    .then(response => {
      dispatch(deleteTeamSuccess(id))
    })
    .catch(console.error)
  }