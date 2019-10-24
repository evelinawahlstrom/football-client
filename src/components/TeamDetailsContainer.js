import React from 'react'
import {connect} from 'react-redux'
import TeamDetails from './TeamDetails'
import { loadTeam } from '../actions/teams'
import CreatePlayerContainer from "./CreatePlayerContainer";
import DeleteTeamButtonContainer from "./DeleteTeamButtonContainer";
import { Link } from "react-router-dom";

class TeamDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadTeam(Number(this.props.match.params.id))
  }

  render() {
    console.log(this.props.team)
    return (
      <>
        <TeamDetails team={this.props.team} />
        {this.props.loggedIn ? (
          <CreatePlayerContainer teamId={this.props.team.id} />
        ) : (
          <Link to="/login">Please log in to add players to this team.</Link>
        )}
        <DeleteTeamButtonContainer />
      </>
    );
  }
}

const mapStateToProps = state => ({
  team: state.team,
  loggedIn: !!state.auth
});

export default connect(
  mapStateToProps,
  { loadTeam }
)(TeamDetailsContainer);