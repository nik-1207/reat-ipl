import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import logomap from '../helper/logomap'
import axios from 'axios';
import '../components/temp.css'

function CardContainer(props) {
    const URL=props.url;
    const isDef=props.isDef;
    const [TeamData, setTeamData] = useState('');

    useEffect(() => {
        async function getAllTeamData()
        {
            const res=await axios.get(URL)
            setTeamData(res.data)
        }
        getAllTeamData();
    }, [URL])

    if(isDef)
    {
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
    }else{
        console.log(TeamData)
        return(
            <div>
                hello
            </div>
        )
    }

}

export default CardContainer
