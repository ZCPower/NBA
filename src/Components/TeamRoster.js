import React, { useState, useEffect } from 'react'
import { getRosterByTeam } from '../API/api';
import '../Styles/TeamRoster.css'

function TeamRoster({ teamId, season }) {
    const [szn, setSzn] = useState(2021);
    const [roster, setRoster] = useState([])
    //have a selector that changes the season we're on. 
    console.log(teamId, 'ID OF TEAM')
    useEffect(() => {
        async function getRoster() {
            try {
                let rost = await getRosterByTeam(teamId, szn)
                setRoster(rost.response)

            } catch (error) {
                console.log(error)
            }
        }
        getRoster()
    }, [])

    console.log(roster, 'ROSTTERR')

    let mappedRoster = roster.map((x) => {
        return (
            <p>{x.firstname + ' ' + x.lastname}</p>
        )
    })

    return (
        <div id='rosterContainer'>
            {mappedRoster}
        </div>
    )
}

export default TeamRoster