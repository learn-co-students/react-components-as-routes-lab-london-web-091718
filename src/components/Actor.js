import React from 'react'


export default class Actor extends React.Component{

render(){
    return(
        <div className='actor'>
            <p>{ this.props.actor.name }</p>
            <ul>{
                this.props.actor.movies.map(mov => <li>{ mov }</li>)
            }</ul>
        </div>
    )
}

}