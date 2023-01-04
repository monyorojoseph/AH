import { useRouter } from "next/router";
import ListApartments from "../../components/ListingOptions/listing_apartments";

export default function ApartmentType(){
    const router = useRouter()
    const extra = `${router.query['apt_type']} apartments`

    return(<ListApartments extra={extra} location={false}/>)
}
