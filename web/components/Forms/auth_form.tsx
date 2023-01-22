import React from "react";
import { Credentials } from "../../shared/types";

type AuthFormProps = {
    handleSubmit: React.FormEventHandler<HTMLFormElement>
    button_text: string
    data: Credentials
    setData: Function
}

export default function AuthForm({handleSubmit, button_text, data, setData}: AuthFormProps){
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        e.persist()
        setData({
            ...data, [e.target.name]: e.target.value
        })        
    }

    return (
        <>
            <form className="mt-8 space-y-3" onSubmit={handleSubmit}>
                <div className="-space-y-px rounded-md shadow-sm">
                <div>
                    <label htmlFor="email-address" className="sr-only">
                    Email address
                    </label>
                    <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    onChange={handleChange}
                    value={data.email}
                    className="block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2
                    text-gray-900 placeholder-gray-500 focus:z-10 focus:border-black focus:outline-none focus:ring-blacborder-black sm:text-sm"
                    placeholder="Email address"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="sr-only">
                    Password
                    </label>
                    <input
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    onChange={handleChange}
                    value={data.password}
                    className="block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 
                    text-gray-900 placeholder-gray-500 focus:z-10 focus:border-black focus:outline-none focus:ring-blacborder-black sm:text-sm"
                    placeholder="Password"
                    />
                </div>
                </div>


                {button_text === "Sign In" && (<div className="text-sm text-start">
                    <a href="#" className="font-medium text-blacborder-black hover:text-blacborder-black">
                    Forgot your password?
                    </a>
                </div>)}

                <div>
                <button
                    type="submit"
                    className="w-full rounded-md border border-transparent bg-blacborder-black font-bold
                    py-2 px-4 text-sm bg-black text-white hover:bg-blacborder-black focus:outline-none focus:ring-2 
                    focus:ring-blacborder-black focus:ring-offset-2"
                >
                    {button_text}
                </button>
                </div>
            </form>
        </>
    )
}