import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/layout";
import AuthForm from "../../components/Forms/auth_form";
import { Credentials } from "../../shared/types";
import { poster } from "../../shared/services";

export default function Login() {
    const [ data, setData ] = useState<Credentials>({
        email: '',
        password: ''
    })

    const handleSubmit = async(e:React.SyntheticEvent)=> {
        e.preventDefault()
        const resData = await poster('/auth/jwt/create/', data)
    }

    useEffect(()=> {
        // signIn()
    }, [])

    return (
        <Layout>
            <section className="mx-auto container md:w-9/12 lg:w-7/12 my-10">
                <div className="w-full md:w-6/12 mx-auto space-y-2">
                    <AuthForm data={data} setData={setData}
                     handleSubmit={handleSubmit} button_text='Sign In'/>
                </div>
            </section>
        </Layout>
    )
}
