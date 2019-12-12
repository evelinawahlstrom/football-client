import React from 'react'

function TeamDetails(props){
    console.log(props)
    if(!props.team.name) return 'Loading'
    return (
        <div>
          {props.team.name}
          <ul>
            {props.team.players.map(player => {
              return (
                <li key={player.id}>
                  {player.number} : {player.name}
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
    
    export default TeamDetails