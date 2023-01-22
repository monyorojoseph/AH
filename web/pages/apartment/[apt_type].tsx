import { useRouter } from "next/router";
import ListApartments from "../../components/Listing/Apartment/listing_apartments";

export default function ApartmentType(){
    const router = useRouter()
    const type = router.query['apt_type'] as string;
    
    return(<ListApartments type={type}/>)
}
