import React from 'react';


function Card(props)
{
    const img=props.img;
    const data=props.data
    console.log(data)
    return (
        <div>
            <img src={img} alt="team-logo"/>
            {!data?"null":data.id}
        </div>
    )
}

export default Card
