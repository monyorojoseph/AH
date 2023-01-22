import { useRouter } from "next/router";
import Layout from "../../../components/Layout/layout";

export default function HouseDetails(){
    const router = useRouter()
    const id  = router.query['id']
    return(
        <Layout>
            <section>
                {id}
            </section>
        </Layout>
    )
}