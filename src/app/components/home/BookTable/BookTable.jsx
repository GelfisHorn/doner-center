import axios from "axios";
// React
import { useState } from "react";
// Notifications
import { toast } from "react-hot-toast";
// Date formatter
import moment from "moment/moment";
// Animations
import { motion } from "framer-motion";

export default function BookTable() {

    const actualDate = new Date(Date.now()).toISOString();

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ date, setDate ] = useState(actualDate.split('T')[0]);
    const [ hour, setHour ] = useState(`${actualDate.split("T")[1].split(":")[0]}:00`);
    const [ persons, setPersons ] = useState(1);
    
    function handleSubmit(e) {
        e.preventDefault();
        
        if([name, email, date, hour, persons].includes("")) {
            toast.error("Sie müssen alle Felder ausfüllen");
            return;
        }

        const formattedDate = moment(date).format("LL");
        const formattedHour = moment(date).format("LT");

        Promise.all([
            axios.post('/api/bookTable/sendMailToDoner', { name, email, date: formattedDate, hour: formattedHour, persons }),
            axios.post('/api/bookTable/sendMailToClient', { email })
        ]).then(res => {
            toast.success("Danke schön! Wir haben Ihre Informationen erhalten");
        }).catch(err => {
            toast.error("Es gab einen Fehler beim Abschicken des Formulars");
        }).finally(() => resetForm());
    }

    function resetForm() {
        setName("");
        setEmail("");
        setDate(actualDate.split('T')[0]);
        setHour(`${actualDate.split("T")[1].split(":")[0]}:00`);
        setPersons(1);
    }
    
    return (
        <section className={"flex justify-center py-28 px-6 sm:px-10"} id={"booktable"}>
            <div className={"flex flex-col gap-16"}>
                <motion.h2 
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className={"text-4xl text-center"}
                >Einen Tisch reservieren</motion.h2>
                <form onSubmit={handleSubmit} className={"grid grid-cols-1 sm:grid-cols-2 gap-5 sm:w-[35rem]"}>
                    <div>
                        <label className={"block"} htmlFor="name">Name</label>
                        <input className={"py-2 px-3 border outline-none w-full"} type="text" id="name" placeholder={"Schreib deinen Namen"} value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <label className={"block"} htmlFor="email">Email</label>
                        <input className={"py-2 px-3 border outline-none w-full"} type="text" id="email" placeholder={"Schreiben Sie Ihre E-Mail"} value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label className={"block"} htmlFor="date">Datum</label>
                        <input className={"py-2 px-3 border outline-none w-full"} type="date" id="date" value={date} onChange={e => setDate(e.target.value)} />
                    </div>
                    <div>
                        <label className={"block"} htmlFor="hour">Stunde</label>
                        <input className={"py-2 px-3 border outline-none w-full"} type="time" id="hour" step={"3600"} value={hour} onChange={e => setHour(e.target.value)} />
                    </div>
                    <div className={"sm:col-start-1 sm:col-end-3"}>
                        <label className={"block"} htmlFor="persons">Anzahl der Personen</label>
                        <select id="persons" className={"py-2 px-3 border outline-none w-full"} value={persons} onChange={e => setPersons(e.target.value)}>
                            <option value="1">1 Person</option>
                            <option value="2">2 Personen</option>
                            <option value="3">3 Personen</option>
                            <option value="4">4 Personen</option>
                            <option value="5">5 Personen</option>
                            <option value="6">6 Personen</option>
                            <option value="7">7 Personen</option>
                            <option value="8">8 Personen</option>
                            <option value="9">9 Personen</option>
                            <option value="10">10 Personen</option>
                        </select>
                    </div>
                    <button type={"submit"} className={"py-2 btn-primary hover:text-primary sm:col-start-1 sm:col-end-3"}>Einen Tisch reservieren</button>
                </form>
            </div>
        </section>
    )
}