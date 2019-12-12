import React from 'react'
import {connect} from 'react-redux'
import {createTeam} from '../actions/teams'
import TeamForm from './TeamForm'

class CreateTeamFormContainer extends React.Component {
  state = {
    name: ""
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault()
    this.props.createTeam(this.state)
    this.setState({
      name: ""
    })
  }

  render() {
    return (<TeamForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}

export default connect(
  null,
  { createTeam }
)(CreateTeamFormContainer);
