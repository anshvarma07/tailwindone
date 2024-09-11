import React from 'react'
import Banner from "../components/Banner";
import Header from "../components/Header";
import Experts from "../components/Experts";
import Newsletter from '../components/Newsletter'
import Plans from "../components/Plans";

export default function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <Experts />
            <Newsletter />
            <Plans />

        </div>
    )
}
