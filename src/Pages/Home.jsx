import React from 'react'
import Banner from "../components/Banner";
import Header from "../components/Header";
import Experts from "../components/Experts";
import Newsletter from '../components/Newsletter'
import Plans from "../components/Plans";
import Footer from '../components/Footer';


export default function Home() {
    return (
        <div>
            <Header />
            {/* <Floating></Floating> */}
            <Banner />
            <Experts />
            <Newsletter />
            <Plans />
            <Footer></Footer>


        </div>
    )
}
