// Nextjs
import Head from "next/head";
// Components
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
// Styles
import "@/app/globals.css"

export default function Layout({ title, children, metaDesc }) {
    return (
        <>
            <Head>
                <title>{title} | Döner Center</title>
                <meta name="description" content={metaDesc || ""} />
                <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.4.2/css/all.css" />
                <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.4.2/css/sharp-solid.css" />
                <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.4.2/css/sharp-regular.css" />
                <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.4.2/css/sharp-light.css" />
            </Head>
            <div>
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    )
}