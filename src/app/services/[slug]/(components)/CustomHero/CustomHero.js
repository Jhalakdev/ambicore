import hero2css from './Heroc.module.css'
import Link from 'next/link'
export default function CustomHero({ imgSrc, h2, p, ...props }) {
    return <div style={{ backgroundImage: `url(${imgSrc})` }} className={hero2css.section}>
        <div className={hero2css.wrapper}>
            <h2>{h2}</h2>
            <p><Link href='/'>HOME</Link> <Link href={'/services'}>/ SERVICES</Link>{p}</p>
        </div>
    </div>
}