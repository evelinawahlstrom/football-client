import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTeam } from '../actions/teams';
import {  } from 'react-router-dom';

class DeleteTeamButtonContainer extends Component {
  state = {
    deleted: false
  };

  handleClick = () => {
    const { teamId } = this.props;
    this.props.deleteTeam(teamId);
    this.setState({ deleted: true });
  }


  render() {
    if (this.state.deleted) {
      return <Redirect to="/teams" />;
    }
    return (
      <button onClick={this.handleClick}>
        Delete Team
      </button>
    )
  }
}


// ASK, how does this team work here
const mapStateToProps = ({ team }) => ({ teamId: team.id });
const mapDispatchToProps = { deleteTeam };

export default connect(mapStateToProps, mapDispatchToProps)(DeleteTeamButtonContainer);