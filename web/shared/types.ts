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

export interface SlimHouse {
    id: string;
    village: string;
    cover_image: string;
    price: number;
    estate: string;
    lat: number;
    lon: number;
}

export interface Item {
    label: string;
    value: string | number;
}

export interface Region {
    region: string
}

export interface PropertSummary {
    type: string;
    max: number;
    min: number;
    avg: number;
    total: number;
    available: number;
}

export interface HomeData {
    total_apts: number;
    total_hses: number;
    total_regions: number;
}

export interface Credentials {
    email: string
    password: string
}