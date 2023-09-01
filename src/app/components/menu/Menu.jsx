"use client"

import { useEffect, useState } from 'react';
// Nextjs
import { useRouter } from 'next/navigation'
import Link from 'next/link';
// Components
import MenuItem from './MenuItem';
// Menu Data
import menuData from '@/app/mockData/menu';
// Animations
import { motion } from "framer-motion";

export default function Menu({ id }) {

    const router = useRouter();

    const [ menu, setMenu ] = useState({});

    useEffect(() => {
        if(id === undefined) return;

        if(!Object.keys(menuData).includes(id)) {
            router.push("/404");
            return;
        }

        setMenu(menuData[id]);
    }, [id]);

    return (
        Object.keys(menu).length != 0 ? (
            <div className={"flex flex-col gap-16 py-28 lg:w-[60rem] mx-auto"}>
                <Link href={"/#menu"} className={"underline text-primary ml-6 w-fit"}><i class="fa-regular fa-arrow-left-long"></i> Geh zurück</Link>
                <motion.div 
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className={"flex flex-col items-center gap-3 px-6 text-center"}
                >
                    <h1 className={"text-4xl"}>{menu?.title}</h1>
                    <div className={"h-[2px] w-32 bg-primary"}></div>
                    <div>{menu?.description}</div>
                </motion.div>
                <div className={"grid grid-cols-1 lg:grid-cols-2 gap-x-24 divide-y lg:divide-none"}>
                    {menu.menu.map((item, index) => (
                        <MenuItem
                            key={index}
                            name={item.name}
                            ingredients={item.ingredients}
                            price={item.price}
                            priceSmall={item.priceSmall}
                            priceBig={item.priceBig}
                        />
                    ))}
                </div>
            </div>
        ) : null        
    )
}