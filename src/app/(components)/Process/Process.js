'use client'
import { useEffect, useLayoutEffect, useState } from 'react'
import LineDotLine from '../LineDotLine/LineDotLine'
import pcss from './Process.module.css'
import gsap from 'gsap'
export default function Process() {
    const [select, setSelect] = useState(1);
    useLayoutEffect(function () {
        gsap.to(`.${pcss.proline}`, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: `.${pcss.proline}`,
                scroller: 'body',
                start: "top bottom",
            }
        })
        gsap.to(`.${pcss.circle}`, {
            opacity: 1,
            // y: 0,
            duration:1,
            stagger:0.5,
            scrollTrigger: {
                scroller: 'body',
                trigger: `.${pcss.circleContainer}`,
                start: 'top bottom',
            }
        })
    })
    useEffect(function () {
        var circles = document.querySelectorAll(`.${pcss.circle}`);
        circles.forEach(function (circle, index) {
            circle.addEventListener('click', function () {
                setSelect(index + 1);
                var c = document.querySelector(`.${pcss.active}`);
                c.classList.remove(pcss.active);
                circle.classList.add(pcss.active);
            })
        })
    })
    return <section className={pcss.section}>
        <div className={pcss.wrapper}>
            <div className={pcss.proline}>
                <h2>OUR PROCESS</h2>
                <LineDotLine />
            </div>
            <div className={pcss.circleContainer}>
                <div className={pcss.circle + ' ' + pcss.active}>
                    <h2>CLIENT REQUIREMENTS</h2>
                </div>
                <div className={pcss.circle}>
                    <h2>CREATIVE SKILLS</h2>
                </div>
                <div className={pcss.circle}>
                    <h2>APPROVALS</h2>
                </div>
                <div className={pcss.circle}>
                    <h2>CONSTRUCTION TEAM</h2>
                </div>

            </div>
            <div className={pcss.line}></div>
            <div className={pcss.text}>
                {select === 1 &&
                    <p>Understanding their personalities, requirements, and budgets to optimize the project.</p>
                }
                {select === 2 &&
                    <p>Our enriched team of architects and designers work in teams dedicated exclusively to that particular project.</p>
                }
                {select === 3 &&
                    <p>With our vast experience of dealing with the various building codes and working with governmental agencies, we get the designs approved. Of course, the client&apos;s approval is paramount.</p>
                }
                {select === 4 &&
                    <p>We engage closely with the construction teams to ensure that our ideas are implemented flawlessly on the ground.</p>
                }
            </div>
        </div>
    </section>
}