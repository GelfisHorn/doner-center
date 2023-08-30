
// Styles
import Link from 'next/link'
import styles from './Index.module.css'

export default function Hero() {
    return (
        <div className={`flex items-center ${styles.backgroundImage} text-white text-center lg:text-left min-h-[600px] h-screen`} /* style={{height: 'calc(100vh - 6rem)'}} */>
            <div className={"relative xl:w-1/2 flex flex-col gap-12 px-6 sm:px-10 lg:px-20 xl:pl-20"} style={{ zIndex: 1 }}>
                <div className={"flex flex-col gap-5"}>
                    <div className={"flex flex-col gap-2 uppercase title-1"}>
                        <div className={"text-5xl sm:text-6xl font-bold"}>Kosten Sie die</div> 
                        <div className={"text-primary text-4xl"}>Perfektion</div>
                    </div>
                    <p className={"xl:w-2/3 text-neutral-300"}>Entdecken Sie eine Welt voller Geschmack in jedem Bissen. Von außergewöhnlichen Pizzen bis hin zu unvergesslichen Shawarmas entführt Sie GeschmacksFreuden auf eine kulinarische Reise, die Sie nie vergessen werden.</p>
                </div>
                <div className={"flex flex-col lg:flex-row items-center gap-3 lg:gap-5"}>
                    <Link href={"/#booktable"} className={"flex items-center btn-primary h-12"}>Einen Tisch reservieren</Link>
                    <Link href={"/#menu"} className={"flex items-center gap-2 btn-secondary h-12"}>
                        Speisekarte
                        <i className="fa-regular fa-arrow-down"></i>
                    </Link>
                </div>
            </div>
            <div className={`w-1/2 ${styles.sideImage}`}></div>
        </div>
    )
}