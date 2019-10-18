import request from 'superagent'

export const TEAMS_FETCHED = 'TEAMS_FETCHED'

export const TEAM_CREATE_SUCCESS = 'TEAM_CREATE_SUCCESS'

export const FETCH_TEAM_SUCCESS = 'FETCH_TEAM_SUCCESS'

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

export const createTeam = (data) => dispatch => {
  request
    .post(`${baseUrl}/teams`)
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

export const loadTeam = (id) => (dispatch, getState) => {
    console.log('CAN WE GET THE STATE??', getState())
    request(`${baseUrl}/teams/${id}`)
        .then(response => {
            console.log(response)
            dispatch(fetchTeamSuccess(response.body))
        })
}