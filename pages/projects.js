import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer/footer';
import React from "react";
import NavBar from "../components/navbar/navbar";
import Info from '../components/info/info';
import InfoProjects from "../info_projects/info_projects";
import Layout from "../components/layout/layout";

export default function Home() {
    return (<>
        <Layout title={'Projects'}>
            <InfoProjects/>
        </Layout>
    </>)
}
