import useSWR from 'swr'
import { fetcher } from '../../shared/services'

export function useFetchApartmentTypes(){
    const { data, error, isLoading } = useSWR('/property/apartment-types/', fetcher)
    return { data, error, isLoading }
}

export function useFetchHouseTypes(){
    const { data, error, isLoading } = useSWR('/property/house-types/', fetcher)
    return { data, error, isLoading }
}


export function useFetchApartments(query_param: string){
    const { data, isLoading, error } = useSWR(`/property/apartments/${query_param}`, fetcher)
    if (data){
        const { next, previous, results } = data
        return {next, previous, results}
    }
    return { isLoading, error}
}


export function useFetchHouses(query_param: string){
    const { data, isLoading, error } = useSWR(`/property/houses/${query_param}`, fetcher)
    if (data){
        const { next, previous, results } = data
        return {next, previous, results}
    }
    return { isLoading, error}
}