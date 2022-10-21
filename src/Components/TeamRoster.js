import React, { useState, useEffect } from 'react'
import { getRosterByTeam } from '../API/api';

function TeamRoster({ teamId, season }) {
    const [szn, setSzn] = useState('2021');
    const [roster, setRoster] = useState([])
    //have a selector that changes the season we're on. 
    console.log(teamId, 'ID OF TEAM')
    useEffect(() => {
        async function getRoster() {
            try {
                let rost = await getRosterByTeam(teamId, season)
                //WHY IS THIS NOT WORKING
                console.log(rost, 'ROSTER')

            } catch (error) {
                console.log(error)
            }
        }
        getRoster()
    }, [])

    return (
        <div>
            <h2>Roster</h2>
        </div>
    )
}

export default TeamRoster