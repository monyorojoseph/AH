// apartment
export interface SlimApartment {
    id: string,
    name: string,
    cover_image: string,
    price: number,
    estate: string,
    lon: number,
    lat: number,
}

export interface Item {
    label: string;
    value: string;
}

export interface Region {
    region: string
}

export interface PropertyTypes {
    key: string
}