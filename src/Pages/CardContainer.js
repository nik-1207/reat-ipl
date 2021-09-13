import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import logomap from '../helper/logomap'
import axios from 'axios';
import '../components/temp.css'
function CardContainer() {
    const URL='https://ipl-t20.herokuapp.com/teams'
    const [TeamData, setTeamData] = useState('');

    useEffect(() => {
        async function getAllTeamData()
        {
            const res=await axios.get(URL)
            setTeamData(res.data)
        }
        getAllTeamData();
    }, [URL])
    return (
        <div className='card-container'>
            {Object.keys(logomap).map((key,index)=>
            {
                return(
                    <Card 
                    img={logomap[key].default} 
                    key={index}
                    data={TeamData[index]}
                    />
                )
            })
            }
        </div>
    )
}

export default CardContainer
