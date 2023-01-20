import useSWR from 'swr'
import { fetch } from '../../shared/services'

export function useFetchRegions(){
    const { data, error, isLoading } = useSWR('/property/regions/', fetch)
    return { data, error, isLoading }
}

export function useFetchEstate(region:string){
    const { data, error, isLoading } = useSWR(`/property/estates/${region}/`, fetch)
    return { data, error, isLoading }
}