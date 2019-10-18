import request from 'superagent'

export const TEAMS_FETCHED = 'TEAMS_FETCHED'

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
  request(`${baseUrl}/teams`)
    .then(response => {
      // dispatch an TEAMS_FETCHED action that contains the TEAMS
      dispatch(teamsFetched(response.body))
    })
    .catch(console.error)
}