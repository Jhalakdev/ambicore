import { Copyright, Footer, HeroCustom, Nav } from "../(components)";
import { ContactSection } from "./(component)";

export default function ContactPage() {
    return <div>
        <Nav />
        <HeroCustom imgSrc={'/subheader-1.jpg'} h2={'CONTACT'} p={' / CONTACT'} />
        <ContactSection />
        <Footer />
        <Copyright />
    </div>
}