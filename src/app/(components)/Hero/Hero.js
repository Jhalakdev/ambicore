'use client'
import Link from 'next/link'
import Herocss from './Hero.module.css'
import { useEffect, useLayoutEffect } from 'react'
import gsap from 'gsap'
export default function Hero() {
    useLayoutEffect(function () {
        gsap.to(`.${Herocss.text} h2`, {
            duration: 0.25,
            opacity: 1,
            scale: 1,
        })
        gsap.to('#one', {
            y: 0,
            x: 0,
            opacity: 1,
            duration: 0.25,
        })
        gsap.to('#linkbutton', {
            y: 0,
            x: 0,
            opacity: 1,
            duration: 0.25,
        })
    })
    return (<section className={Herocss.section}>
        <div className={Herocss.wrapper}>
            <div className={Herocss.text}>
                <p id='one'>FEATURED PROJECT</p>
                <h2>GREEN INTERIOR</h2>
                <div id='linkbutton'>
                    <Link href='https://ambicorspace.com/'><button>OUR PORTFOLIO</button></Link>
                </div>
            </div>
        </div>
        <div className={Herocss.imageContainer}>
            <img src='/wide2.jpg' alt='Hero Image Background' />
        </div>
    </section>)
}