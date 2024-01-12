'use client'
import data from '../../utils/data'
import Link from 'next/link'
import style from './style.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useLayoutEffect } from 'react'
export default function Services() {
    useLayoutEffect(function () {
        gsap.registerPlugin(ScrollTrigger)
        const services = document.querySelectorAll(`.${style.service}`);
        services.forEach(function (service) {

            gsap.to(service.firstChild, {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: service,
                    scroller: 'body',
                    start: 'top bottom',
                    // markers: true,

                }
            })
        })
    })
    return <div className={style.section}>
        <div className={style.service}>

            <div className={style.content}>
                <h2>{data.bathroom.name}</h2>
                <p>{data.bathroom.desc}</p>
                <Link href={data.bathroom.buttonLink}><button>READ MORE <svg fill="var(--textColor)" height="16" width="10" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg></button>
                </Link>
            </div>
            <div className={style.image}>
                <img src='/VINITA-MAM-UPDATED-NEW-PROJECT-converted_page-0055-blackwhite.jpg' />
            </div>
        </div>
        <div className={style.service}>
            <div className={style.content}>
                <h2>{data.studyroom.name}</h2>
                <p>{data.studyroom.desc}</p>
                <Link href={data.studyroom.buttonLink}>
                    <button>READ MORE <svg fill="var(--textColor)" height="16" width="10" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg></button>
                </Link>
            </div>
            <div className={style.image}>
                <img src='/VINITA-MAM-UPDATED-NEW-PROJECT-converted_page-0029-1-blackwhite.jpg' />
            </div>
        </div>
        <div className={style.service}>
            <div className={style.content}>
                <h2>{data.homeogym.name}</h2>
                <p>{data.homeogym.desc}</p>
                <Link href={data.homeogym.buttonLink}>
                    <button>READ MORE <svg fill="var(--textColor)" height="16" width="10" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg></button>
                </Link>
            </div>
            <div className={style.image}>
                <img src='/GYM-2-blackwhite.jpg' />
            </div>
        </div>
        <div className={style.service}>
            <div className={style.content}>
                <h2>{data.fallceiling.name}</h2>
                <p>{data.fallceiling.desc}</p>
                <Link href={data.fallceiling.buttonLink}>
                    <button>READ MORE <svg fill="var(--textColor)" height="16" width="10" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg></button>
                </Link>
            </div>
            <div className={style.image}>
                <img src='/VINITA-MAM-UPDATED-NEW-PROJECT-converted_page-0018-blackwhite.jpg' />
            </div>
        </div>
        <div className={style.service}>
            <div className={style.content}>
                <h2>{data.pujaroom.name}</h2>
                <p>{data.pujaroom.desc}</p>
                <Link href={data.studyroom.buttonLink}>
                    <button>READ MORE <svg fill="var(--textColor)" height="16" width="10" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg></button>
                </Link>
            </div>
            <div className={style.image}>
                <img src='/MANDIR-blackwhite.jpg' />
            </div>
        </div>
        <div className={style.service}>
            <div className={style.content}>
                <h2>{data.bedroom.name}</h2>
                <p>{data.bedroom.desc}</p>
                <Link href={data.bedroom.buttonLink}>
                    <button>READ MORE <svg fill="var(--textColor)" height="16" width="10" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg></button>
                </Link>
            </div>
            <div className={style.image}>
                <img src='https://ambicorspace.com/wp-content/uploads/2016/06/subheader-2.jpg' />
            </div>
        </div>

        <div className={style.service}>
            <div className={style.content}>
                <h2>{data.livingrooms.name}</h2>
                <p>{data.livingrooms.desc}</p>
                <Link href={data.livingrooms.buttonLink}>
                    <button>READ MORE <svg fill="var(--textColor)" height="16" width="10" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg></button>
                </Link>
            </div>
            <div className={style.image}>
                <img src='/SANJAY-JHA-PROJECT-converted_page-0008-blackwhite.jpg' />
            </div>
        </div>
        <div className={style.service}>
            <div className={style.content}>
                <h2>{data.homedesign.name}</h2>
                <p>{data.homedesign.desc}</p>
                <Link href={data.homedesign.buttonLink}>
                    <button>READ MORE <svg fill="var(--textColor)" height="16" width="10" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg></button>
                </Link>
            </div>
            <div className={style.image}>
                <img src='/SANJAY-JHA-PROJECT-converted_page-0009-blackwhite.jpg' />
            </div>
        </div>
        <div className={style.service}>
            <div className={style.content}>
                <h2>{data.modularkitchen.name}</h2>
                <p>{data.modularkitchen.desc}</p>
                <Link href={data.modularkitchen.buttonLink}>
                    <button>READ MORE <svg fill="var(--textColor)" height="16" width="10" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg></button>
                </Link>
            </div>
            <div className={style.image}>
                <img src='/VINITA-MAM-UPDATED-NEW-PROJECT-converted_page-0043-blackwhite.jpg' />
            </div>
        </div>
        <div className={style.service}>
            <div className={style.content}>
                <h2>{data.hospitalitydesign.name}</h2>
                <p>{data.hospitalitydesign.desc}</p>
                <Link href={data.hospitalitydesign.buttonLink}>
                    <button>READ MORE <svg fill="var(--textColor)" height="16" width="10" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg></button>
                </Link>
            </div>
            <div className={style.image}>
                <img src='/SANJAY-JHA-PROJECT-converted_page-0004-blackwhite.jpg' />
            </div>
        </div>
        <div className={style.service}>
            <div className={style.content}>
                <h2>{data.officedesign.name}</h2>
                <p>{data.officedesign.desc}</p>
                <Link href={data.officedesign.buttonLink}>
                    <button>READ MORE <svg fill="var(--textColor)" height="16" width="10" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg></button>
                </Link>
            </div>
            <div className={style.image}>
                <img src='/pic_2.jpg' />
            </div>
        </div>
        <div className={style.service}>
            <div className={style.content}>
                <h2>{data.commercialdesign.name}</h2>
                <p>{data.commercialdesign.desc}</p>
                <Link href={data.commercialdesign.buttonLink}>
                    <button>READ MORE <svg fill="var(--textColor)" height="16" width="10" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg></button>
                </Link>
            </div>
            <div className={style.image}>
                <img src='/pic_3.jpg' />
            </div>
        </div>
    </div>
}