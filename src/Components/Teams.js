import React, { useState, useEffect } from 'react'
import { getTeams } from '../API/api';
import '../Styles/Teams.css'
import { Link } from 'react-router-dom'

function Teams() {
    const [allTeams, setAllTeams] = useState([]);
    useEffect(() => {
        async function fetchTeams() {
            try {
                await getTeams()
                    .then((result) => {
                        // console.log(result)
                        setAllTeams(result.response)
                    })
            } catch (error) {
                console.log(error)
            }
        }
        fetchTeams()
    }, [])


    let nba = allTeams.filter((x) => {
        return x.nbaFranchise && x.logo
    });

    console.log(nba)


    let mappedNba = nba.map((team) => {
        return (
            //Want each card to have a link to
            //A page that has each team's roster and what not. Misc team info. going to have to use params for links
            <div className='teamCard'>
                <Link to={`/teams/${team.id}`}>
                    <img src={team.logo} alt={team.nickname + ' logo'}></img>
                </Link>
            </div>
        )
    })

    return (
        <div id='teamsContainer'>
            {mappedNba}
        </div>
    )
}

export default Teams