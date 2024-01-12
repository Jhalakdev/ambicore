'use client'
import Link from 'next/link'
import Navcss from './Nav.module.css'
import { usePathname } from 'next/navigation'
import Burger from './Burger';
export default function Nav() {
    var path = usePathname();
    // useEffect(function () {
    //     const menubutton = document.querySelector(`.${Navcss.burger}`);
    //     menubutton.addEventListener('click', function () {
    //         handleMenu();
    //     })
    //     function handleMenu() {
    //         const open = document.getElementById('open');
    //         const close = document.getElementById('close');
    //         const menu = document.querySelector(`.${Navcss.mlinks}`)
    //         if (open.style.display === 'block') {
    //             open.style.display = 'none';
    //             close.style.display = 'block';
    //             menu.style.paddingBottom = "320px";
    //             console.log("close");
    //         }
    //         else {
    //             open.style.display = 'block';
    //             close.style.display = 'none';
    //             menu.style.paddingBottom = "0";
    //             console.log('open');
    //         }

    //     }
    // }, [])
    return <div style={{ background: path !== '/' ? 'rgba(0,0,0,0.4) ' : '#18191B' }} className={Navcss.outer}>
        <div className={Navcss.upperwrapper}>
            <div className={Navcss.navupper}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512" fill='currentColor'><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>                    <p>Get In Touch</p>
                    <span> +91 86051 83887</span>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512" fill='currentColor'><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" /></svg>                    <p>Email us:</p>
                    <span className={Navcss.yellow}>ambicorspace@gmail.com</span>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512" fill='currentColor'><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
                    <p>Working Hours:</p>
                    <span className={Navcss.yellow}>08:00-17:00</span>
                </div>
            </div>
            <div className={Navcss.svgsContainer}>
                <a target='_blank' href='https://www.facebook.com/ambicorspace/' className={Navcss.svgContainer}>
                    <svg fill='currentColor' height="16" width="10" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>
                </a>
                <a target='_blank' href='https://api.whatsapp.com/send/?phone=918605183887&text&type=phone_number&app_absent=0' className={Navcss.svgContainer}>
                    <svg fill='currentColor' height="16" width="14" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                </a>
                <a target='_blank' href='https://www.instagram.com/ambicorspace/' className={Navcss.svgContainer}>
                    <svg fill='currentColor' height="16" width="14" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                </a>
            </div>
        </div>
        <hr></hr>
        <div className={Navcss.links + ' ' + Navcss.mlinks}>
            <ul>
                <Link style={{ color: path === '/' && 'var(--yellow)' }} href={'/'}><li>HOME</li></Link>
                <div className={Navcss.dot}></div>
                <Link style={{ color: path === '/about' && 'var(--yellow)' }} href={'/about'}><li>ABOUT US</li></Link>
                <div className={Navcss.dot}></div>
                <Link style={{ color: path === '/gallery' && 'var(--yellow)' }} href={'/gallery'}><li>GALLERY</li></Link>
                <div className={Navcss.dot}></div>
                <Link style={{ color: path === '/services' && 'var(--yellow)' }} href={'/services'}><li>SERVICES</li></Link>
                <div className={Navcss.dot}></div>
                <Link style={{ color: path === '/contact' && 'var(--yellow)' }} href={'/contact'}><li>CONTACT</li></Link>
            </ul>
        </div>
        <div className={Navcss.wrapper}>
            <Link href={'/'}>
                <div className={Navcss.logo}>
                    <img src='/Ambi-PNG.png' alt='Logo' />
                </div>
            </Link>
            <Burger />
            <div className={Navcss.links}>
                <ul>
                    <Link style={{ color: path === '/' && 'var(--yellow)' }} href={'/'}><li>HOME</li></Link>
                    <div className={Navcss.dot}></div>
                    <Link style={{ color: path === '/about' && 'var(--yellow)' }} href={'/about'}><li>ABOUT US</li></Link>
                    <div className={Navcss.dot}></div>
                    <Link style={{ color: path === '/gallery' && 'var(--yellow)' }} href={'/gallery'}><li>GALLERY</li></Link>
                    <div className={Navcss.dot}></div>
                    <Link style={{ color: path === '/services' && 'var(--yellow)' }} href={'/services'}><li>SERVICES</li></Link>
                    <div className={Navcss.dot}></div>
                    <Link style={{ color: path === '/contact' && 'var(--yellow)' }} href={'/contact'}><li>CONTACT</li></Link>
                </ul>
            </div>
        </div>
    </div>
}