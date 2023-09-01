"use client"

// Nextjs
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    return (
        <header className={`fixed top-0 left-0 w-full bg-white flex items-center justify-between h-24 px-6 sm:px-10 lg:px-20 border-b`} style={{zIndex: "10", borderColor: "rgba(0, 0, 0, .1)"}}>
            <div className={"flex items-center gap-8"}>
                <Link href={"/"} className={"hover:no-underline"}>
                    <Image src={"/logo/128.webp"} width={"70"} height={"70"} alt={"Döner Center Mieste"} />
                </Link>
            </div>
            <div className={"hidden md:block"}>
                <ul className={`flex items-end gap-5 text-lg font-medium`}>
                    <li className={""}><Link href={"/"} className={"hover:no-underline"}>Startseite</Link></li>
                    <li className={""}><Link href={"/#menu"} className={"hover:no-underline"}>Menu</Link></li>
                    <li className={""}><Link href={"/#booktable"} className={"hover:no-underline"}>Reservieren</Link></li>
                </ul>
            </div>
            <div>
                <Link 
                    href={"tel:+039082933314"} 
                    className={"rounded-md px-3 py-2 bg-primary hover:bg-transparent border-2 border-transparent hover:border-primary text-white hover:text-primary hover:no-underline flex items-center gap-2"}
                >
                    <i className="fa-solid fa-phone"></i>
                    0390 829 33 314
                </Link>
            </div>
        </header>
    )
}