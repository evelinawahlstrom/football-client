import React from 'react'
import {loadTeams} from '../actions/teams'
import {connect} from 'react-redux'
import TeamsList from './TeamsList'
import CreateTeamFormContainer from './CreateTeamFormContainer'

class TeamsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadTeams()
  }

  render() {
    return <div>
    <TeamsList teams={this.props.teams} />
    <CreateTeamFormContainer />
    </div>
  }
}

const mapStateToProps = state => ({
  teams: state.teams
})

export default connect(mapStateToProps, {loadTeams})(TeamsListContainer)