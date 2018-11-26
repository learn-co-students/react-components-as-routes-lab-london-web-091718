import React from 'react';

export default class Movie extends React.Component{

    render(){
        return(
            <div key={ index }>
                <h3>Name: { this.props.movie.title }</h3>
                <p>Time: { this.props.movie.time }</p>
                <p>Genres:</p>
                <ul>
                    { this.props.movie.genres.map((genre, index) => (
                        <li key={ index }>{ genre }</li>
                    )) }
                </ul>
            </div>
        )
    }
}
