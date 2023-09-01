
// Nextjs
import Head from "next/head";
// Components
import Hero from "@/app/components/home/Hero/Hero";
import Layout from "./components/Layout";
import Introduction from "@/app/components/home/Introduction/Introduction";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
// Styles
import styles from './index.module.css'
import Menu from "@/app/components/home/Menu/Menu";
import Map from "@/app/components/home/Map/Map";
import BookTable from "@/app/components/home/BookTable/BookTable";
// Notifications
import { Toaster } from "react-hot-toast";

export default function Home() {
    return (
        <>
            <Head>
                <title>Startseite | Döner Center Mieste</title>
                <meta name="description" content={""} />
                <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.4.2/css/all.css" />
                <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.4.2/css/sharp-solid.css" />
                <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.4.2/css/sharp-regular.css" />
                <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.4.2/css/sharp-light.css" />
            </Head>
            <div>
                <div className={`${styles.backgroundImage}`}>
                    <Navbar absolute={true} color={"text-[#fff]"} />
                    <Hero />
                </div>
                <Introduction />
                <Menu />
                <Map />
                <BookTable />
                <Footer />
                <Toaster position={"top-right"} />
            </div>
        </>
    )
}