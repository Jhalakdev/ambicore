import { Copyright, CustomContactButton, CustomerSays, Footer, HeroCustom, Nav } from "../(components)";
import Link from 'next/link'
import AboutContent from "./(components)/AboutContent/AboutContent";
import { Process } from "./(components)";
// import { Team } from "./(components)";
export default function Page() {
    return <div>
        <Nav />
        <HeroCustom imgSrc={'/subheader-3.jpg'} h2={'ABOUT'} p={' / ABOUT'} />
        <AboutContent />
        <Process />
        <CustomerSays />
        <CustomContactButton text="TALK WITH US" />
        <Footer />
        <Copyright />
    </div>
}