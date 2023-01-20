import { useRouter } from "next/router";
import ListApartments from "../../components/Listing/Apartment/listing_apartments";

export default function Estate(){
    const router = useRouter()
    const extra =`Located in ${router.query['estate']}`
    return(<ListApartments extra={extra} location={true} listings={null} />)

}