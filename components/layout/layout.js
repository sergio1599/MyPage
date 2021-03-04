import Head from 'next/head'
import NavBar from "../navbar/navbar";
import Footer from '../footer/footer';
import styles from './layout.module.css'
import React from "react";

export default function Layout(props){

    return(<>
        <div>
            <Head>
                <title>{props.title}</title>
                <link rel="icon" href="/icons/logo.png"/>
                <link href="https://fonts.googleapis.com/css2?family=Truculenta:wght@500&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,600&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400&display=swap" rel="stylesheet"/>
            </Head>
            <NavBar/>
            <div className={styles.principal}>
                {props.children}
            </div>
            <Footer/>
        </div>
        </>)
}