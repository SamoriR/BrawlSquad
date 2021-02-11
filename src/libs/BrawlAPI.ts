import { ILegend, IAll_Player_Stats, IRanked_Player_Stats } from './Interfaces'

const URLAPI = 'https://api.brawlhalla.com'
const PLAYER = '/player'
const STATS = '/stats'
const RANKED = '/ranked'
const API_KEY = '?api_key='
const ALL_LEGENDS = '/legend/all'

const apiKey: string | undefined = process.env.REACT_APP_BRAWL_KEY


export const GetPlayerStats = async (userID: number) : Promise<IAll_Player_Stats | null> => {
    const fetchURL: string = URLAPI + PLAYER + '/' + userID + STATS + API_KEY + apiKey

    let userStats: IAll_Player_Stats | null = null

    await fetch(`${fetchURL}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then((response) => response.json())
    .then((response: IAll_Player_Stats) => {
        userStats = response
    })

    return userStats
}

export const GetPlayerRankedStats = async (userID: number) : Promise<IRanked_Player_Stats | null> => {
    const fetchURL: string = URLAPI + PLAYER + '/' + userID + RANKED + API_KEY + apiKey

    let userRankedStats: IRanked_Player_Stats | null = null

    await fetch(`${fetchURL}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then((response) => response.json())
    .then((response: IRanked_Player_Stats) => {
        userRankedStats = response
    })

    return userRankedStats
}

export const GetAllLegends = async () : Promise<ILegend[] | null> => {
    const fetchURL: string = URLAPI + ALL_LEGENDS + API_KEY + apiKey

    let allLegends: ILegend[] | null = null

    await fetch(`${fetchURL}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then((response) => response.json())
    .then((response: ILegend[]) => {
        allLegends = response
    })

    return allLegends
}