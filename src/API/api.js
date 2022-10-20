const { RAPID_API_KEY } = process.env;
const baseURL = 'https://api-nba-v1.p.rapidapi.com'

const makeHeaders = (token) => {
    let headers = {
        "Content-Type": "application/json",
    };

    if (token) {
        headers["Authorization"] = "Bearer " + token;
    }
    return headers;
};


//WORK ON THIS AND CREATE A FUNCTION THAT HANDLES THE HEADERS AT THE TOP OF THE PAGE.
export async function getSeasons() {
    const url = `${baseURL}/seasons`
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': RAPID_API_KEY,
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
            headers: {

            }
        })
    } catch (error) {

    }
}