import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { SlimHouse } from '../../shared/types';
import { useFetchHouses } from '../../hooks/swr/property';
import Error from '../States/error';
import Loading from '../States/loading';

const containerStyle = {
    width: '100%',
    height: '90vh'
  };

const center = {lat: -1.284100,lng: 36.815500};


export default function HouseMapListing({queryParams}: {queryParams: string}){

    const { next, results, previous, isLoading, error } = useFetchHouses(queryParams)
    
    const api_key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: api_key as string
    })

    if (!isLoaded || isLoading){
        return <Loading />
    }

    if ( error ) {
        return <Error />
    }

    const setPosition = (lon: number, lat: number)=> {
        return { lat: lat, lng:lon}
    }
    return(
        <GoogleMap 
        
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        >
            {
                results?.map(
                    (listing:SlimHouse)=>(
                    <MarkerF 
                    position={setPosition(listing.lon, listing.lat)} 
                    key={listing.id} />))
            }

        </GoogleMap>
        )
}