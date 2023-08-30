"use client"

import Link from "next/link"

export default function Navbar() {
    return (
        <div className={"flex items-center justify-between h-16 px-6 sm:px-10 lg:px-20"}>
            <div className={"flex items-center gap-8"}>
                <h2 className={"text-2xl"}>Döner Center</h2>
                <div>
                    <ul className={"flex items-center gap-3"}>
                        <li><Link href={"/"}>Startseite</Link></li>
                        <li><Link href={"/#menu"}>Menu</Link></li>
                    </ul>
                </div>
            </div>
            <div>
                <Link href={"/#kontakt"} className={"btn-secondary"}>Kontakt</Link>
            </div>
        </div>
    )
}