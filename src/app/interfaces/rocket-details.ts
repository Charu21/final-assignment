export interface RocketDetails {
    name: string;
    image: string;
    description: string;
    first_flight: string;
    country: string;
    height: RocketHeight,
    diameter: RocketDiameter,
    mass: RocketMass
}

export interface RocketHeight {
    meters: string,
    feet: string
}

export interface RocketDiameter {
    meters: string,
    feet: string
}

export interface RocketMass {
    kg: string,
    lb: string
}
