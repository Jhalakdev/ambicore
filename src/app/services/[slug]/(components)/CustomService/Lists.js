'use client'
import { usePathname } from "next/navigation"
export default function Lists() {
    const path = usePathname();
    console.log(path);
    return <ul>
        <a href={'/services/hospitalitydesign'}><li style={{ background: path === '/services/hospitalitydesign' ? 'var(--yellow)' : '#111113', color: path === '/services/hospitalitydesign' ? 'black' : 'white' }}>HOSPITALITY DESIGN</li></a>
        <a href={'/services/officedesign'}><li style={{ background: path === '/services/officedesign' ? 'var(--yellow)' : '#111113', color: path === '/services/officedesign' ? 'black' : 'white' }}>OFFICE DESIGN</li></a>
        <a href={'/services/commercialdesign'}><li style={{ background: path === '/services/commercialdesign' ? 'var(--yellow)' : '#111113', color: path === '/services/commercialdesign' ? 'black' : 'white' }}>COMMERCIAL DESIGN</li></a>
    </ul>

}