import { useRouter } from 'next/router'
import ListHouses from '../../components/Listing/House/listing_houses';

export default function HouseType(){
    const router = useRouter()
    const type = router.query['hse_type'] as string;
    return(<ListHouses type={type} />)
}
