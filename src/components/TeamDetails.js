import React from 'react'

function TeamDetails(props){
    console.log(props)
    if(!props.team.name) return 'Loading'

    return <div>
        {props.team.name}
    </div>
}

export default TeamDetails