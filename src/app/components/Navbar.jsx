"use client"

import Link from "next/link"

export default function Navbar({ absolute, color }) {
    return (
        <div className={`${absolute ? "absolute top-0 left-0 w-full" : null} ${color ? color : null} flex items-center justify-between h-24 px-6 sm:px-10 lg:px-20`} style={{zIndex: "2"}}>
            <div className={"flex items-center gap-8"}>
                <h2 className={"text-2xl"}>Döner Center</h2>
            </div>
            <div className={"hidden md:block"}>
                <ul className={"flex items-center gap-3 uppercase text-lg text-neutral-200"}>
                    <li><Link href={"/"} className={"hover:no-underline"}>Startseite</Link></li>
                    <li><Link href={"/#menu"} className={"hover:no-underline"}>Menu</Link></li>
                    <li><Link href={"/#booktable"} className={"hover:no-underline"}>Reservieren</Link></li>
                    <li><Link href={"/#kontakt"} className={"hover:no-underline"}>Kontakt</Link></li>
                </ul>
            </div>
            {/* <div>
                <Link href={"/#booktable"} className={"btn-secondary"}>Reservieren</Link>
            </div> */}
        </div>
    )
}