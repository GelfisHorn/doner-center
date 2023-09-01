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
                <title>{title} | Döner Center Mieste</title>
                <meta name="description" content={metaDesc || ""} />
                <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.4.2/css/all.css" />
                <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.4.2/css/sharp-solid.css" />
                <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.4.2/css/sharp-regular.css" />
                <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.4.2/css/sharp-light.css" />
                <link rel="shortcut icon" type="image/png" href="/logo.png" />
            </Head>
            <div className={"overflow-x-hidden"}>
                <Navbar />
                <div className={"pt-24"}>{children}</div>
                <Footer />
            </div>
        </>
    )
}