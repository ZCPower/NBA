import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getTeamById, getSeasons } from '../API/api';
import '../Styles/SingleTeam.css'
import TeamRoster from './TeamRoster';

function SingleTeam() {
    //perhaps have a selector that maps through the seasons and that season gets passed down as a prop to the other things (roster, standings, schedule, etc.)
    const { teamId } = useParams();
    const [singleTeam, setSingleTeam] = useState([]);
    const [seasons, setSeasons] = useState([]);
    const [singleSeason, setSingleSeason] = useState(2022);
    const [view, setView] = useState(null)

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

    useEffect(() => {
        async function fetchSeasons() {
            try {
                const szns = await getSeasons()
                console.log(szns.response, 'IN HERE')
                setSeasons(szns.response)
            } catch (error) {
                console.log(error)
            }
        }
        fetchSeasons()
    }, [])

    function viewRoster() {
        setView('roster')
    }

    function viewSchedule() {
        setView('schedule')
    }

    function viewStats() {
        setView('stats')
    }

    function handleSelect(e) {
        e.preventDefault();
        setSingleSeason(e.target.value);
        console.log(singleSeason)
    }

    let mappedSeasons = seasons.map((x) => {
        return (
            <option>{x}</option>
        )
    })

    let sortedSzns = mappedSeasons.reverse()

    return (
        <div id='singleTeam'>
            <div className='teamPageHeader'>
                <img className='teamPageLogo' src={singleTeam.logo}></img>
                <select>{sortedSzns}</select>
            </div>
            <aside id='teamNav'>
                <ul>
                    <button onClick={viewRoster}>Roster</button>
                    <button onClick={viewSchedule}>Schedule</button>
                    <button onClick={viewStats}>Stats</button>
                </ul>
            </aside>
            <section id='teamPageView'>
                {view === 'roster' ? <TeamRoster teamId={singleTeam.id} season={2021} /> : null}
                {view === 'schedule' ? <h2>Schedule</h2> : null}
                {view === 'stats' ? <h2>Stats</h2> : null}
            </section>
        </div>
    )
}

export default SingleTeam

/* 
have a tab where you can view roster
    - and have a select element where you can view past rosters. 
have a tab where you can view schedule? 

*/ 