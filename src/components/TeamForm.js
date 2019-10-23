import React from 'react'

// dumb component without state (!!!)

export default function(props){
    return <form onSubmit={props.onSubmit}>
        <label>Team: </label>
        <input value={props.name} name="name" onChange={props.onChange}/>
        <input type="submit"/>
    </form>
}
