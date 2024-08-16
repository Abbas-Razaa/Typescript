let ab: number | string;
ab = 12;
ab = 'harsh';

type City = {
    name: string,
    population: number
}

type Planet = {
    name: string,
    cities: number
}

type CitiesInPlanet = City & Planet;

let value: CitiesInPlanet = {
    name: 'Karachi',
    population: 12000000,
    cities: 12
}