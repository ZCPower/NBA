import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getTeamById } from '../API/api';
import '../Styles/SingleTeam.css'

function SingleTeam() {
    const { teamId } = useParams();
    const [singleTeam, setSingleTeam] = useState([]);

    console.log('in the componenet', teamId)
    useEffect(() => {
        async function fetchSingleTeam() {
            try {
                const team = await getTeamById(teamId)
                console.log(team)
                setSingleTeam(team.response[0])
            } catch (error) {
                console.error(error)
            }
        }
        fetchSingleTeam()


    }, [])

    console.log(singleTeam, 'yee')

    return (
        <div id='singleTeam'>
            <h2>{singleTeam.name}</h2>
            <img src={singleTeam.logo}></img>
        </div>
    )
}

export default SingleTeam