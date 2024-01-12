import hero2css from './Heroc.module.css'
import Link from 'next/link'
export default function HeroCustom({ imgSrc, h2, p, ...props }) {
    return <div style={{ backgroundImage: `url(${imgSrc})` }} className={hero2css.section}>
        <div className={hero2css.wrapper}>
            <h2>{h2}</h2>
            <p><Link href='/'>HOME</Link>{p}</p>
        </div>
    </div>
}