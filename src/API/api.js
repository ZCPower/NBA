const { RAPID_API_KEY } = process.env;
const baseURL = 'https://api-nba-v1.p.rapidapi.com'

const makeHeaders = () => {
    let headers = {
        'X-RapidAPI-Key': '38daec2d52mshcf0436b550bd077p17b424jsn507c96880769',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    };

    return headers;
};


//WORK ON THIS AND CREATE A FUNCTION THAT HANDLES THE HEADERS AT THE TOP OF THE PAGE.
export async function getSeasons() {
    const url = `${baseURL}/seasons`
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '38daec2d52mshcf0436b550bd077p17b424jsn507c96880769',
                'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            }
        })
        const data = response.json()
        console.log(data)
        return data
    } catch (error) {

    }
}

export async function getTeams() {
    const url = `${baseURL}/teams`
    try {
        const response = await fetch(url, {
            method: 'GET',
            params: { league: 'Standard' },
            headers: {
                'X-RapidAPI-Key': '38daec2d52mshcf0436b550bd077p17b424jsn507c96880769',
                'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            }
        })
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function getTeamById(id) {
    const url = `${baseURL}/teams/?id=${id}`
    try {
        const response = await fetch(url, {
            method: 'GET',
            params: { id: id },
            headers: {
                'X-RapidAPI-Key': '38daec2d52mshcf0436b550bd077p17b424jsn507c96880769',
                'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            }
        })
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error)
    }
}


//add seasons as a parameter
export async function getRosterByTeam(teamId) {
    const url = `${baseURL}/players`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            params: { team: teamId, season: 2021 },
            headers: {
                'X-RapidAPI-Key': '38daec2d52mshcf0436b550bd077p17b424jsn507c96880769',
                'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            }

        })
        const data = response.json();
        console.log(data, 'in the api')
        console.log(teamId, 'IN THE API')
        return data
    } catch (error) {
        console.log(error)
    }
}