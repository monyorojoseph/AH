import { useRouter } from "next/router";
import ListApartments from "../../components/ListingOptions/listing_apartments";

export default function Location(){
    const router = useRouter()
    const extra =`Located in ${router.query['location']}`
    return(<ListApartments extra={extra} location={true} />)

}