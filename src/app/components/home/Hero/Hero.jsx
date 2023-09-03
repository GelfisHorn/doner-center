
// Nextjs
import Link from 'next/link';
// Styles
import styles from './Index.module.css';
// Animations
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className={`flex items-center text-white text-center min-h-[750px] h-screen`} /* style={{height: 'calc(100vh - 6rem)'}} */>
            <motion.div 
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className={"relative flex flex-col gap-12 w-full xl:w-2/3 mx-auto px-6 sm:px-10 lg:px-20 xl:pl-20 pt-24"} 
                style={{ zIndex: 1 }}
            >
                <div className={"flex flex-col gap-7"}>
                    <div className={"font-detail text-xl md:text-2xl"}>Unerwiderstehliche Köstlichkeiten</div>
                    <div className={"flex flex-col gap-2 title-1"}>
                        <div className={"text-4xl md:text-5xl lg:text-6xl font-[1000]"}><span className={"text-primary"}>Döner Center Mieste</span> - Die besten Döner in Mieste!</div>
                    </div>
                    <p className={"text-neutral-300 font-semibold"}>Pizza, Drehspieß und mehr: Entdecken Sie unsere unvergleichlichen Döner beim Döner Center Mieste!</p>
                </div>
                <div className={"flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-5"}>
                    <Link href={"/#booktable"} className={"flex items-center btn-primary h-12"}>Einen Tisch reservieren</Link>
                    <Link href={"/#menu"} className={"flex items-center gap-2 btn-secondary h-12"}>
                        Speisekarte
                        <i className="fa-regular fa-arrow-down"></i>
                    </Link>
                </div>
            </motion.div>
        </section>
    )
}