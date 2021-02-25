export interface ILegend {
    legend_id: number
    legend_name_key: string
    bio_name: string
    bio_aka: string
    weapon_one: string
    weapon_two: string
    strength: number
    dexterity: number
    defense: number
    speed: number
}

export interface IBrawlSquadPlayer {
    name: string
    username: string
    xp: number,
    level: number,
    wins: number
    games: number
    brawlhalla_id: number
    rating: number
    peak_rating: number
    tier: string
}

export interface IClan {
    clan_name: string
    clan_id: number
    clan_xp: string
    personal_xp: number
}

export interface IAll_Player_Legends_Stats {
    legend_id: number
    legend_name_key: string
    damagedealt: string
    damagetaken: string
    kos: number
    falls: number
    suicides: number
    teamkos: number
    matchtime: number
    games: number
    wins: number
    damageunarmed: string
    damagethrownitem: string
    damageweaponone: string
    damageweapontwo: string
    damagegadgets: string
    kounarmed: number
    kothrownitem: number
    koweaponone: number
    koweapontwo: number
    kogadgets: number
    timeheldweaponone: number
    timeheldweapontwo: number
    xp: number
    level: number
    xp_percentage: number
}


export interface IAll_Player_Stats {
    brawlhalla_id: number
    name: string,
    xp: number,
    level: number,
    xp_percentage: number
    games: number
    wins: number
    damagebomb: string
    damagemine: string
    damagespikeball: string
    damagesidekick: string
    hitsnowball: number
    kobomb: number
    komine: number
    kospikeball: number
    kosidekick: number
    kosnowball: number
    legends: IAll_Player_Legends_Stats[]
    clan: IClan
}

export interface IRanked_Player_Legends_Stats {
    legend_id: number,
    legend_name_key: string
    rating: number
    peak_rating: number
    tier: string
    wins: number
    games: number
}

export interface IRanked_Player_2v2_Stats {
    brawlhalla_id_one: number
    brawlhalla_id_two: number
    rating: number
    peak_rating: number
    tier: string
    wins: number
    games: number
    teamname: string
    region: number
    global_rank: number
}

export interface IRanked_Player_Stats {
    name: string
    brawlhalla_id: number
    rating: number
    peak_rating: number
    tier: string
    wins: number
    games: number
    region: string
    global_rank: number
    region_rank: number
    legends: IRanked_Player_Legends_Stats[]
    "2v2": IRanked_Player_2v2_Stats[]
}