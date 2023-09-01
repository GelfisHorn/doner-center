// Nextjs
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={"border-t"}>
            <div className={"flex flex-col"}>
                <div className={"flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-center md:justify-between max-w-7xl mx-auto w-full py-16 px-6"}>
                    <div className={""}>
                        <Image src={"/logo/128.webp"} width={"80"} height={"80"} alt={"Döner Center Mieste"} />
                    </div>
                    <div>
                        <ul className={"flex flex-col md:flex-row items-center md:gap-3"}>
                            <li><Link href={"/datenschutz"}>Datenschutz</Link></li>
                            <li><Link href={"/impressum"}>Impressum</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={"flex justify-center items-center h-12 border-t"}>
                    <div className={"text-sm text-neutral-600"}>© Copyright 2023 Döner Center Mieste</div>
                </div>
            </div>
        </footer>
    )
}