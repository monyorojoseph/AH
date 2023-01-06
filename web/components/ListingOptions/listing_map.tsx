import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '90vh'
  };

const center = {lat: -1.284100,lng: 36.815500};

const Positions = [
    {lat: -1.284100,lng: 36.815500},
    {lat: -1.384100,lng: 36.715500},
    {lat: -1.294100,lng: 36.615500},
    {lat: -1.394100,lng: 36.515500},
    {lat: -1.484100,lng: 36.415500},
    {lat: -1.584100,lng: 36.825500},
    {lat: -1.494100,lng: 36.835500},
    {lat: -1.594100,lng: 36.845500},
    {lat: -1.264100,lng: 36.855500},
    {lat: -1.244100,lng: 36.865500},
    {lat: -1.224100,lng: 36.875500},


]

export default function ListingMap(){
    const api_key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: api_key as string
    })

    if (!isLoaded){
        return <h6>Loading ...</h6>
    }

    return(
        <GoogleMap 
        
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        >
            {
                Positions.map((pos, idx)=>(<MarkerF position={pos} key={idx} />))
            }

        </GoogleMap>
        )
}