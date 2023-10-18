
// Nextjs
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Navbar() {

    const router = useRouter();

    const path = router.pathname;

    return (
        <header className={`fixed top-0 left-0 w-full bg-white flex items-center justify-between h-24 px-6 sm:px-10 lg:px-20 border-b`} style={{zIndex: "10", borderColor: "rgba(0, 0, 0, .2)"}}>
            <div className={"flex items-center gap-8"}>
                <Link href={"/"} className={"hover:no-underline"}>
                    <Image src={"/logo/128.webp"} width={"70"} height={"70"} alt={"Döner Center Mieste"} />
                </Link>
            </div>
            <div className={"hidden md:flex items-center h-full"}>
                <ul className={`flex items-center gap-5 text-lg font-medium h-full`}>
                    <li className={`flex items-center h-full border-b-[3px] ${path == "/" ? "border-primary text-primary" : "border-transparent"} pt-2`}><Link href={"/"} className={"hover:no-underline"}>Startseite</Link></li>
                    <li className={`flex items-center h-full border-b-[3px] border-transparent pt-2`}><Link href={"/#menu"} className={"hover:no-underline"}>Menu</Link></li>
                    <li className={`flex items-center h-full border-b-[3px] border-transparent pt-2`}><Link href={"/#booktable"} className={"hover:no-underline"}>Reservieren</Link></li>
                </ul>
            </div>
            <div>
                <Link 
                    href={"tel:+039082933314"} 
                    className={"rounded-md px-3 py-2 bg-primary hover:bg-transparent border-2 border-transparent hover:border-primary text-white hover:text-primary hover:no-underline flex items-center gap-2"}
                >
                    <i className="fa-solid fa-phone"></i>
                    0390 82931673
                </Link>
            </div>
        </header>
    )
}