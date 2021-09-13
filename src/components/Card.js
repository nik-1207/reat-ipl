import React from 'react';
import { useHistory } from 'react-router-dom'
import './temp.css'
function Card(props)
{
    const img=props.img;
    const data=props.data
    const HISTORY=useHistory();
    if(!data)
    {
        return(
            <h1>Loading...</h1>
        )
    }else{
        return (
            <div className='card' onClick={()=>{HISTORY.push(`teams/${data.id}`)}}>
                <img src={img} alt="team-logo"/>
            <div>
                <h2>{data.teamName}</h2>
                <h4 >{data.venue}</h4>
                <div>
                    <i className="fas fa-trophy"></i>
                    <span >{data.winningYears}</span>
                </div>
            </div>
               Team Home
            <i className="fas fa-angle-right tab-arrow"></i>
        </div>
        )
    }
    
}

export default Card
