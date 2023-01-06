import React, { useEffect } from "react";
import Layout from "../../components/Layout/layout";
import { useSession, signIn } from "next-auth/react"
import AuthForm from "../../components/Forms/auth_form";

export default function Login() {
    const { data: session } = useSession()

    const handleSubmit = (e:React.SyntheticEvent)=> {
        e.preventDefault()
        signIn()
    }

    useEffect(()=> {
        // signIn()
    }, [])

    return (
        <Layout>
            <section className="mx-auto container md:w-9/12 lg:w-7/12 my-10">
                <div className="w-full md:w-6/12 mx-auto space-y-2">
                    <AuthForm handleSubmit={handleSubmit} button_text='Sign In'/>
                </div>
            </section>
        </Layout>
    )
}
