import React from 'react'
import {connect} from 'react-redux'
import TeamDetails from './TeamDetails'
import {loadTeam, updateTeam, deleteTeam} from '../actions/teams'

class TeamDetailsContainer extends React.Component {
  componentDidMount() {
      console.log("hello")
    this.props.loadTeam(Number(this.props.match.params.id))
  }

  render() {
    return <TeamDetails team={this.props.team} />
    console.log(this.props.team)
  }
}

const mapStateToProps = state => ({
  team: state.team
})

export default connect(mapStateToProps, {loadTeam})(TeamDetailsContainer)