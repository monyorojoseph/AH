import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { SlimApartment } from '../../shared/types';

const containerStyle = {
    width: '100%',
    height: '90vh'
  };

const center = {lat: -1.284100,lng: 36.815500};


export default function HouseMapListing({listings}: {listings: Array<SlimApartment> | null}){
    const api_key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: api_key as string
    })

    if (!isLoaded){
        return <h6>Loading ...</h6>
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
                listings?.map(
                    (listing)=>(
                    <MarkerF 
                    position={setPosition(listing.lon, listing.lat)} 
                    key={listing.id} />))
            }

        </GoogleMap>
        )
}