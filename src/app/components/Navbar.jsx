"use client"

// Nextjs
import Link from "next/link"

export default function Navbar({ absolute, color }) {
    return (
        <div className={`${absolute ? "absolute top-0 left-0 w-full" : null} ${color ? color : null} flex items-center justify-between h-24 px-6 sm:px-10 lg:px-20 border-b`} style={{zIndex: "2", borderColor: "rgba(255, 255, 255, .1)"}}>
            <div className={"flex items-center gap-8"}>
                <Link href={"/"} className={"hover:no-underline"}>
                    <h2 className={"text-2xl"}>Döner Center</h2>
                </Link>
            </div>
            <div className={"hidden md:block"}>
                <ul className={`flex items-end gap-5 text-lg ${absolute ? "text-neutral-200" : null} font-medium`}>
                    <li className={""}><Link href={"/"} className={"hover:no-underline"}>Startseite</Link></li>
                    <li className={""}><Link href={"/#menu"} className={"hover:no-underline"}>Menu</Link></li>
                    <li className={""}><Link href={"/#kontakt"} className={"hover:no-underline"}>Kontakt</Link></li>
                </ul>
            </div>
            <div>
                <Link href={"/#booktable"} className={"btn-primary"}>Reservieren</Link>
            </div>
        </div>
    )
}