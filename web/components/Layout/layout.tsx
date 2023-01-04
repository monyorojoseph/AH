import React from "react";
import Footer from "../Footer/footer";
import Navbar from "../Navbar/navbar";

type props = {
    children: React.ReactNode
}

export default function Layout({children}:props){
    return (
        <>
        <Navbar />
        <main>{children}</main>
        <Footer />
        </>
    )
}