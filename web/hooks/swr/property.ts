import useSWR from 'swr'
import { fetch } from '../../shared/services'

export function useFetchApartmentTypes(){
    const { data, error, isLoading } = useSWR('/property/apartment-types/', fetch)
    return { data, error, isLoading }
}

export function useFetchHouseTypes(){
    const { data, error, isLoading } = useSWR('/property/house-types/', fetch)
    return { data, error, isLoading }
}


export function useFetchApartment(query_param?: string){
    const { data, isLoading, error } = useSWR(`/property/apartments/${query_param}`, fetch)
    if (data){
        const { next, previous, results } = data
        return {next, previous, results}
    }
    return { isLoading, error}
}