import { Copyright, CustomerSays, Footer, Gallery, Hero, Nav, Process, WhatWeDo } from "./(components)";

export default function Page() {
  return <section>
    <Nav path={'/'} />
    <Hero />
    <WhatWeDo />
    <Process />
    <Gallery />
    <div style={{ height: '2rem', background: 'var(--black)' }}></div>
    <CustomerSays />
    <Footer />
    <Copyright />
  </section>
}