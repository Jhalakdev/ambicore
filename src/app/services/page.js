import { Copyright, Footer, HeroCustom, Nav } from "../(components)";
import { Services } from "./(components)";

export default function ServicesPage() {
    return <div>
        <Nav />
        <HeroCustom imgSrc={'/subheader-2.jpg'} h2={'SERVICES LIST'} p={' / SERVICES LIST'} />
        <Services />
        <Footer />
        <Copyright />
    </div>
}