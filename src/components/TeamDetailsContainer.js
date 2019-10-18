import React from 'react'
import {connect} from 'react-redux'
import TeamDetails from './TeamDetails'
import {loadTeam, updateTeam, deleteTeam} from '../actions/teams'

class TeamDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadTeam(Number(this.props.match.params.id))
  }

  render() {
    return <TeamDetails Team={this.props.team} />
  }
}

const mapStateToProps = state => ({
  team: state.team
})

export default connect(mapStateToProps, {loadTeam})(TeamDetailsContainer)