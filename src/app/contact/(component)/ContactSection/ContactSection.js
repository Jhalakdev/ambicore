import style from './style.module.css'
export default function ContactSection() {
    return <div className={style.section}>
        <div className={style.wrapper}>
            <p>FIND US ON GOOGLE</p>
            <div className={style.mapArea}>
                <div className={style.navigator}>
                    <div className={style.nav + ' ' + style.active}>View All</div>
                    <div className={style.nav}>Pune</div>
                    <div className={style.nav}>Ranchi</div>
                </div>
                <div className={style.maps}>
                    Maps
                </div>
            </div>
            <div className={style.container}>
                <div className={style.formArea}>
                    <p>SEND US A MESSAGE</p>
                    <form>
                        <div className={style.form}>
                            <div>
                                <input required type='text' placeholder='Your Name' />
                                <input required type='email' placeholder='Your Email' />
                                <input required type='number' placeholder='Your Phone' />
                            </div>
                            <textarea rows={5} required placeholder='Your message'></textarea>
                        </div>
                        <button type='submit'>SUBMIT FORM</button>
                    </form>
                </div>
                <div className={style.contactArea}>
                    <p>CONTACT INFO</p>
                    <p><span>Pune</span> - Office no.107, Ganesh Imperia, Opp. Omega Paradise Society, Wakad - 411057</p>
                    <p><span>Ranchi</span> - Office 2nd Floor, Madhushree Heights, Beside Central Bank, Near Meenakshi Netralaya, Harmu - 834002</p>
                    <p><span>Phone:</span> +91 86051 83887</p>
                    <p><span>Email:</span> ambicorspace@gmail.com</p>
                    <p><span>Web:</span> https://ambicorspace.com</p>
                    <p><span>Open</span> Monday - Saturday 10:00 - 18:00</p>
                </div>
            </div>

        </div>
    </div>
}