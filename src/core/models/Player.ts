
interface Team {
    id: number,
    abbreviation: string,
    city: string,
    conference: string,
    division: string,
    full_name: string,
    name: string
}

interface Player {
    id: number,
    first_name: string,
    last_name: string,
    position: string,
    height_feet: string,
    height_inches: string,
    weight_pounds: string,
    team: Team
}

export default Player