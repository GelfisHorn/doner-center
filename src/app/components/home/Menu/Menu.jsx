
// Nextjs
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// Styles
import styles from './Menu.module.css'
import Link from 'next/link';

export default function Menu() {
    return (
        <section className={"flex flex-col gap-20"} id={"menu"}>
            <div className={"flex flex-col gap-14"}>
                <div className={"flex items-center gap-5 pt-20"}>
                    <div className={"h-[2px] w-full bg-[#e4cb2641]"}></div>
                    <div className={"text-primary text-[2.6rem]"}><i className="fa-sharp fa-light fa-hat-chef"></i></div>
                    <div className={"h-[2px] w-full bg-[#e4cb2641]"}></div>
                </div>
                <div className={"flex flex-col items-center gap-3"}>
                    <div className={"uppercase text-3xl font-light tracking-widest"}>Speisekarte</div>
                    <div className={"h-[2px] w-8 bg-primary"}></div>
                </div>
            </div>
            <div>
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        500: {
                            slidesPerView: 2
                        },
                        960: {
                            slidesPerView: 3
                        },
                        1280: {
                            slidesPerView: 4
                        }
                    }}
                    modules={[Navigation]}
                    navigation
                >
                    <SwiperSlide>
                        <Slide
                            href={"pizza"}
                            text={"Pizzen"}
                            description={"Handwerklicher Geschmack in jeder Scheibe."}
                            image={"/menu/1.webp"}
                            alt={"Restaurant menu image"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slide
                            href={"rotisserie"}
                            text={"Drehspieß"}
                            description={"Saftigkeit auf jedem Grillbissen."}
                            image={"/menu/2.webp"}
                            alt={"Restaurant menu image"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slide
                            href={"salad"}
                            text={"Salate"}
                            description={"Frische und Geschmack in jeder Mischung."}
                            image={"/menu/3.webp"}
                            alt={"Restaurant menu image"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slide
                            href={"german"}
                            text={"Deutsche Gerichte"}
                            description={"Kulinarische Tradition aus Mitteleuropa."}
                            image={"/menu/4.webp"}
                            alt={"Restaurant menu image"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slide
                            href={"baked"}
                            text={"Überbackenes"}
                            description={"Frisch gebackene hausgemachte Köstlichkeiten."}
                            image={"/menu/5.webp"}
                            alt={"Restaurant menu image"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slide
                            href={"beverages"}
                            text={"Getränke"}
                            description={"Erfrische dein Erlebnis mit einzigartigen Schlucken."}
                            image={"/menu/6.webp"}
                            alt={"Restaurant menu image"} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

function Slide({ href, text, description, image, alt }) {
    return (
        <Link href={`/menu/${href}`} className={`${styles.card} hover:no-underline text-white hover:text-white`}>
            <div className={"image-container bg-black"}>
                <Image src={image} fill className={"image transition-opacity"} alt={alt} />
            </div>
            <div className={`${styles.text} absolute top-0 left-0 grid place-content-center gap-3 w-full h-full text-center`}>
                <div className={"font-detail text-4xl"}>{text}</div>
                <div className={"w-2/3 mx-auto"}>{description}</div>
            </div>
        </Link>
    )
}