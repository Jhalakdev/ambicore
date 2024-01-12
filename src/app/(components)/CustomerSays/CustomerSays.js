'use client'
import { useEffect, useLayoutEffect } from 'react'
import LineDotLine from '../LineDotLine/LineDotLine'
import cscss from './CustomerSays.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
export default function CustomerSays() {
    useEffect(function () {
        const dots = document.querySelectorAll(`.${cscss.dot}`)
        const carousel = document.querySelectorAll(`.${cscss.carousel}`);
        dots.forEach(function (dot) {
            dot.addEventListener('click', function () {
                document.querySelector(`.${cscss.active}`).classList.remove(cscss.active);
                dot.classList.add(cscss.active);
                if (dot === dots[0]) {
                    carousel.forEach(function (t) {
                        t.style.transform = "translate(0)";
                    })
                    // carousel[0].style.transform = "translate(0)"
                    // carousel[1].style.transform = "translate(0)"
                }
                else if (dot === dots[1]) {

                    carousel.forEach(function (t) {
                        t.style.transform = "translate(-100%)";
                    })
                }
                else if (dot === dots[2]) {

                    carousel.forEach(function (t) {
                        t.style.transform = "translate(-200%)";
                    })
                }
                else if (dot === dots[3]) {
                    carousel.forEach(function (t) {
                        t.style.transform = "translate(-300%)";
                    })
                }
                else {

                    carousel.forEach(function (t) {
                        t.style.transform = "translate(-400%)";
                    })
                }
            })
        })


    })
    useEffect(function () {
        //dragging logic here

    })
    useLayoutEffect(function () {
        gsap.to(`#cussays`, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                scroller: 'body',
                trigger: `#cussays`,
                start: 'top bottom',
            }
        })

        gsap.to(`.${cscss.carouselContainer}`, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                scroller: 'body',
                trigger: `.${cscss.carouselContainer}`,
                start: 'top bottom',
                // markers: true,

            }
        })
    })
    return <section className={cscss.section}>
        <div className={cscss.bg}></div>
        <div className={cscss.wrapper}>
            <div className={cscss.cusays} id='cussays'>
                <h2>CUSTOMER SAYS</h2>
                <LineDotLine />
            </div>
            <div className={cscss.carouselContainer}>
                <div className={cscss.carousel}>
                    <div>
                        <div className={cscss.quot}>
                            <svg height="16" width="14" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" /></svg>
                        </div>
                        <p>Absolutely thrilled with the transformation of our living space! The interior design team at Ambicor Space has a keen eye for detail and a knack for blending functionality with style.!</p>
                        <span>Aman Agarwal</span>
                    </div>
                    <div>
                        <div className={cscss.quot}>
                            <svg height="16" width="14" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" /></svg>
                        </div>
                        <p>Working with Ambicor Space was a seamless experience from start to finish. The designers demonstrated creativity and professionalism, incorporating our preferences while introducing fresh ideas.</p>
                        <span>Atif Ansari</span>
                    </div>
                </div>
                <div className={cscss.carousel}>
                    <div>
                        <div className={cscss.quot}>
                            <svg height="16" width="14" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" /></svg>
                        </div>
                        <p>Impressed by the attention to color schemes, furniture selection, and overall aesthetics was impeccable. Our home now feels like a magazine-worthy showcase!</p>
                        <span>Raunak Sahu</span>
                    </div>
                    <div>
                        <div className={cscss.quot}>
                            <svg height="16" width="14" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" /></svg>
                        </div>
                        <p>From concept to execution, Ambicor Space delivered excellence. The team&apos;s ability to balance functionality and aesthetics is commendable.</p>
                        <span>Pooja Mishra</span>
                    </div>
                </div>
                <div className={cscss.carousel}>
                    <div>
                        <div className={cscss.quot}>
                            <svg height="16" width="14" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" /></svg>
                        </div>
                        <p>Highly satisfied with the professionalism and creativity of Ambicor Space. The designers paid attention to every detail, ensuring a cohesive and elegant design throughout our home.</p>
                        <span>Pranab Roy Sahu</span>
                    </div>

                </div>
            </div>
            <div className={cscss.carouselContainer + ' ' + cscss.mobileContainer}>
                <div className={cscss.carousel}>
                    <div>
                        <div className={cscss.quot}>
                            <svg height="16" width="14" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" /></svg>
                        </div>
                        <p>Absolutely thrilled with the transformation of our living space! The interior design team at Ambicor Space has a keen eye for detail and a knack for blending functionality with style.!</p>
                        <span>Aman Agarwal</span>
                    </div>
                </div>
                <div className={cscss.carousel}>

                    <div>
                        <div className={cscss.quot}>
                            <svg height="16" width="14" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" /></svg>
                        </div>
                        <p>Working with Ambicor Space was a seamless experience from start to finish. The designers demonstrated creativity and professionalism, incorporating our preferences while introducing fresh ideas.</p>
                        <span>Atif Ansari</span>
                    </div>
                </div>
                <div className={cscss.carousel}>
                    <div>
                        <div className={cscss.quot}>
                            <svg height="16" width="14" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" /></svg>
                        </div>
                        <p>Impressed by the attention to color schemes, furniture selection, and overall aesthetics was impeccable. Our home now feels like a magazine-worthy showcase!</p>
                        <span>Raunak Sahu</span>
                    </div>
                </div>
                <div className={cscss.carousel}>
                    <div>
                        <div className={cscss.quot}>
                            <svg height="16" width="14" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" /></svg>
                        </div>
                        <p>From concept to execution, Ambicor Space delivered excellence. The team&apos;s ability to balance functionality and aesthetics is commendable.</p>
                        <span>Pooja Mishra</span>
                    </div>
                </div>
                <div className={cscss.carousel}>
                    <div>
                        <div className={cscss.quot}>
                            <svg height="16" width="14" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" /></svg>
                        </div>
                        <p>Highly satisfied with the professionalism and creativity of Ambicor Space. The designers paid attention to every detail, ensuring a cohesive and elegant design throughout our home.</p>
                        <span>Pranab Roy Sahu</span>
                    </div>

                </div>
            </div>
            <div className={cscss.dots}>
                <div className={cscss.dot + ' ' + cscss.active}></div>
                <div className={cscss.dot}></div>
                <div className={cscss.dot}></div>
                <div className={cscss.dot}></div>
                {/* <div className={cscss.dot}></div> */}
            </div>
        </div>
    </section>
}