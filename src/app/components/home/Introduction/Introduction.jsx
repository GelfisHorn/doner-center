
// Nextjs
import Image from 'next/image'
// Styles
import styles from './Index.module.css'
// Animations
import { motion } from 'framer-motion'

export default function Introduction() {
    return (
        <section className={`flex items-center justify-center py-20 lg:py-32 ${styles.backgroundImage} lg:min-h-screen select-none px-6 lg:pr-14`}>
            <motion.div 
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                className={`relative lg:left-14 flex flex-col gap-5 w-[40rem] text-center bg-white ${styles.card} p-10`} 
                style={{ zIndex: "2" }}
            >
                <div
                    className={"font-detail text-primary text-xl"}
                >Hallo liebe Gäste!</div>
                <h3 className={"text-3xl"}>Willkommen im Döner Center <span className={"text-primary"}>Mieste</span></h3>
                <i className={"fa-light fa-pizza text-primary text-xl"}></i>
                <p className={"text-neutral-600"}>
                    Bei Döner Center Mieste finden Sie zweifellos die besten Döner in der Stadt! Unsere leckeren Dönergerichte sind ein wahrer Genuss und eine Hommage an die hohe Qualität, die wir stets anstreben. Besuchen Sie uns und überzeugen Sie sich selbst von unserem unübertroffenen Döner-Erlebnis!
                </p>
            </motion.div>
            <div className={`flex items-center gap-5`}>
                <div className={"hidden lg:block relative w-[396px] h-[540px] bg-black"}>
                    <Image src={"/introduction1.webp?v=1"} fill className={"relative h-[540px] w-full object-contain opacity-60"} alt={"Introduction image 1"} />
                </div>
                <div className={"hidden xl:block relative w-[356px] h-[485px] bg-black"}>
                    <Image src={"/introduction2.webp?v=1"} fill className={"relative h-[485px] w-full object-contain opacity-60"} alt={"Introduction image 2"} />
                </div>
            </div>
        </section>
    )
}