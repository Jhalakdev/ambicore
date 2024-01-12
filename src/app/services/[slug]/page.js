import { Copyright, Footer, HeroCustom, Nav } from "@/app/(components)";
import CustomHero from "./(components)/CustomHero/CustomHero";
import CustomService from "./(components)/CustomService/CustomService";
import data from "../utils/data";

export default function Page(props) {
    const id = props.params.slug;
    // console.log(data[id]);
    return <>
        <Nav />
        <CustomHero h2={data[id].name} imgSrc={'/subheader-1.jpg'} p={` / ${data[id].name}`} />
        <CustomService data={data[id]} />
        <Footer />
        <Copyright />
    </>
}