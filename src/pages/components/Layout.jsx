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
                <title>{title}</title>
                <meta name="description" content={metaDesc || ""} />
            </Head>
            <div>
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    )
}