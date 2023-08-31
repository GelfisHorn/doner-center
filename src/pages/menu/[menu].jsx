
// Nextjs
import { useRouter } from "next/router";
// Components
import Layout from "../components/Layout";
import Menu from "@/app/components/menu/Menu";
import MenuSection from "@/app/components/home/Menu/Menu";

export default function MenuPage() {

    const router = useRouter();

    const { menu: menuId } = router.query;

    return (
        <Layout title={"Speisekarte"}>
            <Menu id={menuId} />
            <MenuSection />
        </Layout>
    )
}