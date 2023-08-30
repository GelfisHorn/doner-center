// Nextjs
import Link from "next/link";

export default function Footer() {
    return (
        <div className={"border-t"}>
            <div className={"flex flex-col"}>
                <div className={"flex items-center justify-between max-w-7xl mx-auto w-full h-28"}>
                    <div className={"text-xl"}>Döner Center</div>
                    <div>
                        <ul className={"flex items-center gap-3"}>
                            <li><Link href={"/datenschutz"}>Datenschutz</Link></li>
                            <li><Link href={"/impressum"}>Impressum</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={"flex justify-center items-center h-12 border-t"}>
                    <div>© Copyright 2023 Döner Center</div>
                </div>
            </div>
        </div>
    )
}