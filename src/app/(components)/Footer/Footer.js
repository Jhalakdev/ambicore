import fcss from './Footer.module.css'
export default function Footer() {
    return <section className={fcss.section}>
        <div className={fcss.wrapper}>
            <div className={fcss.div}>
                <div className={fcss.imageContainer}>
                    <img src='/Ambi-PNG.png' alt='Logo' />
                </div>
                <p>From providing the most vibrant color options to the staidest palette, we have it all covered for you. From the most exclusive furniture pieces to the ultra-modern utilities, Ambicor Space helps you make your interior look like one out of a magazine.</p>
            </div>
            <div className={fcss.div}>
                <h2>INTERIOR DESIGNER IN RANCHI AND PUNE</h2>
            </div>
            <div className={fcss.div}>
                <h2>CONTACT US</h2>
                <p><span style={{ color: 'var(--yellow)' }}>Ranchi</span> - Office 2nd Floor, Madhushree Heights, Beside Central Bank, Near Meenakshi Netralaya, Harmu - 834002</p>
                <p><span style={{ color: 'var(--yellow)' }}>Pune</span> - Office no.107, Ganesh Imperia, Opp. Omega Paradise Society, Wakad - 411057</p>
                <p><span>Phone:</span> +91 86051 83887</p>
                <p><span>Email:</span> <a href=''>ambicorspace@gmail.com</a></p>
                <p><span>Web:</span> <a href={'http://ambicorspace.com/'}>http://ambicorspace.com/</a></p>
            </div>
        </div>

    </section>
}