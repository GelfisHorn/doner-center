import Layout from "./components/Layout";

export default function Datenschutz() {
    return (
        <Layout title={"Datenschutz"}>
            <div className={"flex flex-col gap-20 px-6 sm:px-20 py-28"}>
                <h1 className={"text-4xl"}>Datenschutz</h1>
                <div className={"flex flex-col gap-10"}>
                    <p>Bei Döner Center Mieste nehmen wir den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzrichtlinie soll Ihnen detaillierte Informationen darüber bieten, wie wir Ihre persönlichen Daten sammeln, verwenden und schützen, wenn Sie unsere Website besuchen oder auf andere Weise mit uns interagieren.</p>
                    <Section title={"Sammlung personenbezogener Daten"}>
                        <p>Wenn Sie eine Reservierung in unserem Restaurant vornehmen oder uns über unsere Website kontaktieren, können wir Informationen wie Ihren Namen, Ihre E-Mail-Adresse, Ihre Telefonnummer und persönliche Präferenzen im Zusammenhang mit Ihrem Besuch sammeln.</p>
                    </Section>
                    <Section title={"Verwendung Ihrer personenbezogenen Daten"}>
                        <div className={"flex flex-col gap-2"}>
                            <div className={"font-medium text-lg"}>Wir verwenden Ihre personenbezogenen Daten für folgende Zwecke:</div>
                            <ul className={"list-disc pl-5"}>
                                <li>Bearbeitung und Bestätigung Ihrer Reservierungen in unserem Restaurant.</li>
                                <li>Senden von Bestätigungen, Erinnerungen und mit Ihrer Reservierung zusammenhängenden Mitteilungen.</li>
                                <li>Beantwortung Ihrer Fragen und Anfragen.</li>
                            </ul>
                        </div>
                    </Section>
                    <Section title={"Sammlung personenbezogener Daten"}>
                        <p>Wenn Sie eine Reservierung in unserem Restaurant vornehmen oder uns über unsere Website kontaktieren, können wir Informationen wie Ihren Namen, Ihre E-Mail-Adresse, Ihre Telefonnummer und persönliche Präferenzen im Zusammenhang mit Ihrem Besuch sammeln.</p>
                    </Section>
                    <Section title={"Kontakt"}>
                        <p>Wenn Sie Fragen oder Bedenken hinsichtlich unserer Datenschutzrichtlinie haben, zögern Sie nicht, sich über die in unserem Kontaktbereich auf unserer Website bereitgestellten Informationen mit uns in Verbindung zu setzen.</p>
                    </Section>
                    <p>Datum der letzten Aktualisierung: 2023/09/01</p>
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