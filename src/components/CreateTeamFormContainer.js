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

const mapStateToProps = state => ({
    event: state.event
  })

export default connect(mapStateToProps, { createTeam })(CreateTeamFormContainer)

// {createevent}, is the object we want to dispatch!!!