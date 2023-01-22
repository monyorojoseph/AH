import useSWR from 'swr'
import { fetcher } from '../../shared/services'

export function useFetchRegions(){
    const { data, error, isLoading } = useSWR('/property/regions/', fetcher)
    return { data, error, isLoading }
}

export function useFetchEstate(region:string){
    const { data, error, isLoading } = useSWR(`/property/estates/${region}/`, fetcher)
    return { data, error, isLoading }
}