import Link from 'next/link'
import style from './style.module.css'
// import Links from './Lists'
import Lists from './Lists'
export default function CustomService({ data, ...props }) {
    // console.log(data);
    return <div className={style.section}>
        <div className={style.wrapper}>

            <div className={style.links}>
                <Lists />
            </div>
            <div className={style.content}>

                <div className={style.desc}>
                    <p>{data.desc}</p>
                </div>
                <div className={style.images}>
                    {data.images.map(function (image, index) {
                        // console.log(image);
                        return <img src={image.src} key={index} />
                    })}
                </div>
            </div>
        </div>
    </div>
}