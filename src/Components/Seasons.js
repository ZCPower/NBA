import React, { useEffect, useState } from 'react'
import { getSeasons } from '../API/api';

function Seasons() {
    const [seasons, setSeasons] = useState([]);
    useEffect(() => {
        async function fetchSeasons() {
            try {
                const szns = await getSeasons()
                console.log(szns)
                setSeasons(szns)
            } catch (error) {
                console.log(error)
            }
        }
        fetchSeasons()
    }, [])
    return (
        <div>Seasons</div>
    )
}

export default Seasons