'use client'
import { usePathname } from 'next/navigation';
import galcss from './Gallery.module.css'
import { useEffect, useLayoutEffect, useState } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all'
export default function Gallery() {
    const [slide, setSlide] = useState(1);
    const path = usePathname();
    useLayoutEffect(function () {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(`.${galcss.links}`, {
            duration: 0.5,
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: `.${galcss.section}`,
                scroller: 'body',
                start: 'top bottom',
                // markers: true,
            }
        })
    })
    useEffect(function () {
        const links = document.querySelectorAll(`.${galcss.links} ul li`);
        var active = document.querySelector(`.${galcss.active}`);
        links.forEach(function (link, index) {
            link.addEventListener('click', function () {
                active.classList.remove(galcss.active);
                link.classList.add(galcss.active);
                setSlide(index + 1)
                active = link;
            })
        })
    }, [])
    useEffect(function () {
        const imageContainer = document.querySelectorAll(`.${galcss.imageContainer}`)
        imageContainer.forEach(function (img) {
            const data = img.getAttribute('data')
            if (Number(data) === slide || slide === 1) {
                if (path === '/gallery') {
                    img.style.width = "calc(100% / var(--x1))";
                }
                else {

                    img.style.width = 'calc(100% / var(--x))';
                }
                img.style.transition = "0.5s ease all"
            }
            else {
                img.style.width = '0';
            }
        })
    }, [slide])

    return <section className={galcss.section}>
        <div className={galcss.links}>
            <ul>
                <li className={galcss.active}>ALL PROJECTS</li>
                <li>HOSPITALITY</li>
                <li>MODULAR KITCHEN</li>
                <li>RESIDENTIAL</li>
            </ul>
        </div>
        <div className={galcss.imagesContainer}>
            <div data='4' className={galcss.imageContainer}>
                <h2>Study Room</h2>
                <img src='/VINITA-MAM-UPDATED-NEW-PROJECT-converted_page-0029-750x499.jpg' alt='study room' />
            </div>
            <div className={galcss.imageContainer}>
                <h2>Staircase</h2>
                <img src='/VINITA-MAM-UPDATED-NEW-PROJECT-converted_page-0048-750x499.jpg' alt='Stairs' />
            </div>
            <div data="3" className={galcss.imageContainer}>
                <h2>Modular Kitchen</h2>
                <img src='/VINITA-MAM-UPDATED-NEW-PROJECT-converted_page-0043-750x499.jpg' alt='Modular Kitchen' />
            </div>
            <div data='4' className={galcss.imageContainer}>
                <h2>Lounge Area</h2>
                <img src='/VINITA-MAM-UPDATED-NEW-PROJECT-converted_page-0016-1-750x499.jpg' alt='Lounge Area' />
            </div>
            <div className={galcss.imageContainer}>
                <h2>Living Area</h2>
                <img src='/VINITA-MAM-UPDATED-NEW-PROJECT-converted_page-0016-750x499.jpg' alt='Living Area' />
            </div>
            <div className={galcss.imageContainer}>
                <h2>Homeo Gym</h2>
                <img src='/GYM-1-750x499.jpg' alt='Homeo Gym' />
            </div>
            <div data='4' className={galcss.imageContainer}>
                <h2>Elegant Bathrooms</h2>
                <img src='/VINITA-MAM-UPDATED-NEW-PROJECT-converted_page-0054-750x499.jpg' alt='Elegant Bathrooms' />
            </div>
            <div data='4' className={galcss.imageContainer}>
                <h2>Dining Area</h2>
                <img src='/Picture6-1-750x499.jpg' alt='Dining Area' />
            </div>
            <div data='4' className={galcss.imageContainer}>
                <h2>Bed Room</h2>
                <img src='/SANJAY-JHA-PROJECT-converted_page-0013-750x499.jpg' alt='Bed Area' />
            </div>
            <div data='4' className={galcss.imageContainer}>
                <h2>Eco Green Interior</h2>
                <img src='/pf-1.jpg' alt='Eco green interior' />
            </div>
            <div data='2' className={galcss.imageContainer}>
                <h2>Modern Elegance Suite</h2>
                <img src='/pf-2.jpg' alt='Modern Elegance Suits' />
            </div>
            <div data='2' className={galcss.imageContainer}>
                <h2>Apartment Renovation</h2>
                <img src='/pf-3.jpg' alt='Apartment Restroom' />
            </div>
        </div>
    </section>
}