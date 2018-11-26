import React from 'react'

const Director = (props) =>
    (
        <div>Director:  

            { props.director.name }
            <ul>
                { props.director.movies.map(mov=> <li>{mov}</li>)}
            </ul>
        </div>
    )

export default Director