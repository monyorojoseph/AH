import { useRouter } from 'next/router'
import ListApartments from "../../components/ListingOptions/listing_apartments";

export default function HouseType(){
    const router = useRouter()
    const extra = `${router.query['hse_type']} houses`
    return(<ListApartments extra={extra} location={false} />)
}
