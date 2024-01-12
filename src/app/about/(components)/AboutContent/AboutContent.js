import style from './style.module.css'
export default function AboutContent() {
    return <div className={style.section}>
        <div className={style.image}>
            <img src='/bg-side-11.jpg' />
        </div>
        <div className={style.content}>
            <div>
                <h1>Award Winning Interior Designer</h1>
                {/* <h2>We engage closely with the construction teams to ensure that our ideas are implemented flawlessly on the ground.</h2> */}
                <p>
                    At Ambicor Space, we redefine spaces, infusing creativity and functionality into every project. With a passion for design excellence, our dedicated team brings dreams to life, crafting interiors that resonate with individuality and purpose. From concept to completion, we embark on a journey with our clients, tailoring each detail to align seamlessly with their vision. Our commitment to quality, innovation, and client satisfaction defines us. Discover a world where aesthetics meet functionality – welcome to Ambicor Space, where your space becomes a masterpiece.
                    <br />
                    <br />
                    At the heart of Ambicor Space, lies a commitment to transforming spaces into living works of art. With a keen understanding of our clients&apos; unique tastes and lifestyle, we embark on a collaborative journey to curate environments that go beyond aesthetics - they tell a story.
                    <br />
                    <br />
                    Our team of seasoned designers combines creativity with practicality, ensuring that every design element serves a purpose. From conceptualization and meticulous planning to the final flourish, we take pride in delivering unparalleled craftsmanship. We believe that exceptional design has the power to enhance the way people live, work, and connect.
                    <br />
                    <br />
                    At Ambicor Space, we don&apos;t just create interiors; we craft experiences. Our portfolio showcases a diverse range of projects, from chic urban residences to timeless corporate spaces. We stay on the cutting edge of design trends while respecting timeless classics, ensuring that your space stands the test of time.
                    <br />
                    <br />
                    Experience the fusion of innovation and sophistication - entrust your vision to Ambicor Space, where every space becomes a testament to our passion for creating environments that inspire and captivate.</p>
            </div>
        </div>
    </div>
}