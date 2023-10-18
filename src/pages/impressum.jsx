import Layout from "./components/Layout";

export default function Impressum() {
    return (
        <Layout title={"Impressum"}>
            <div className={"flex flex-col gap-20 px-6 sm:px-20 py-28"}>
                <h1 className={"text-4xl"}>Impressum</h1>
                <div className={"flex flex-col gap-10"}>
                    <Section title={"Rechtliche Informationen"}>
                        <Item name={"Name des Restaurants"} value={"Döner Center Mieste"} />
                        <Item name={"Inhaber"} value={"-"} />
                        <Item name={"Adresse"} value={"Riesebergstraße 49 39649 Mieste"} />
                        <Item name={"Postleitzahl und Stadt"} value={"39649, Mieste"} />
                        <Item name={"Telefon"} value={"039082931673"} />
                        <Item name={"E-Mail"} value={"-"} />
                    </Section>
                    <Section title={"Handels-und Rechtsregistrierung"}>
                        <Item name={"Handelsregisternummer"} value={"-"} />
                        <Item name={"Steuernummer "} value={"-"} />
                        <Item name={"Lokales Handelsregister"} value={"-"} />
                    </Section>
                    <Section title={"Aufsichtsbehörde"}>
                        <Item name={"Name der Aufsichtsbehörde"} value={"-"} />
                        <Item name={"Adresse der Aufsichtsbehörde "} value={"-"} />
                        <Item name={"Website der Aufsichtsbehörde"} value={"-"} />
                    </Section>
                    <Section title={"Aufsichtsbehörde"}>
                        <Item name={"Name der Aufsichtsbehörde"} value={"-"} />
                        <Item name={"Adresse der Aufsichtsbehörde "} value={"-"} />
                        <Item name={"Website der Aufsichtsbehörde"} value={"-"} />
                    </Section>
                    <Section title={"Lizenzen und Genehmigungen"}>
                        <p>Das Restaurant Döner Center Mieste ist ordnungsgemäß lizenziert und genehmigt, um als Restaurant in Mieste zu betreiben und erfüllt alle geltenden örtlichen und staatlichen Vorschriften.</p>
                    </Section>
                    <Section title={"Urheberrechte und geistiges Eigentum"}>
                        <p>Alle Inhalte, einschließlich Texte, Bilder und Grafikdesign auf dieser Website, sind durch Urheberrechte und geistiges Eigentum geschützt. Eine unbefugte Vervielfältigung oder Verwendung eines Teils des Inhalts ist strengstens untersagt, ohne die schriftliche Zustimmung des Restaurantinhabers.</p>
                    </Section>
                    <Section title={"Haftung für Inhalte"}>
                        <p>Das Restaurant Döner Center Mieste übernimmt keine Verantwortung für den Inhalt externer Links, die auf dieser Website bereitgestellt werden. Die Verantwortung für den Inhalt der verlinkten Seiten liegt ausschließlich bei den Betreibern dieser Seiten.</p>
                    </Section>
                    <Section title={"Streitbeilegung"}>
                        <p>Im Falle rechtlicher Streitigkeiten im Zusammenhang mit der Website des Restaurants Döner Center Mieste gilt die zuständige Gerichtsbarkeit als [Gerichtsbarkeit] und unterliegt den geltenden Gesetzen von [Geltende Gesetze].</p>
                    </Section>
                    <Section title={"Kontakt"}>
                        <p>Für Fragen, Kommentare oder rechtliche Anfragen im Zusammenhang mit dem Restaurant Döner Center Mieste können Sie uns über die oben angegebene Kontaktinformation erreichen.</p>
                    </Section>
                    <p>Dieses Impressum wurde zuletzt aktualisiert am 2023/09/01.</p>
                </div>
            </div>
        </Layout>
    )
}

function Section({ title, children }) {
    return (
        <div className={"flex flex-col gap-5"}>
            <div className={"text-xl font-bold"}>{title}</div>
            <div className={"flex flex-col gap-1"}>
                {children}
            </div>
        </div>
    )
}

function Item({ name, value }) {
    return (
        <div className={"flex flex-col sm:flex-row items-start sm:gap-2"}>
            <div className={"font-semibold whitespace-nowrap"}>{name}:</div>
            <div>{value}</div>
        </div>
    )
}