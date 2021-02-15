import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer/footer';
import React from "react";
import NavBar from "../components/navbar/navbar";

export default function Home() {
    return (<>
        <Head>
            <title>Sergio Quintana</title>
            <link rel="icon" href="/icons/developer.svg"/>
            <link href="https://fonts.googleapis.com/css2?family=Truculenta:wght@500&display=swap" rel="stylesheet"/>
        </Head>
            <NavBar/>
            <Footer/>
    </>)
}
