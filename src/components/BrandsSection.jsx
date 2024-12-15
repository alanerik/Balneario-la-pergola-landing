import { Marquee } from "@devnomic/marquee";
import "../css/brands.css";
import {BRANDS} from '../consts/brands';




const App = () => (

<section className="px-320 py-320 py-768 py-1024 overflow-hidden  bg-slate-950">

<h4 className="text-white text-center font-bold xs:text-[20px] lg:text-[30px] pb-10">Nuestros Sponsors</h4>

<Marquee className="gap-[4rem] [--duration:20s] lg:mb-14 xs:mb-10 " innerClassName="gap-[3rem] [--gap:3rem]"  pauseOnHover={true} fade={true} >
  
  {BRANDS.map(brand => (
    <img key={brand} loading="lazy" src={`/${brand}.svg`} className="lg:w-36 xs:w-24 mx-4 "   alt={` logotipo  ${brand}`}  />))
  }
</Marquee>



<Marquee className="gap-[4rem] [--duration:20s]" innerClassName="gap-[3rem] [--gap:3rem]"  pauseOnHover={true} reverse={true} fade={true}>
  
  {BRANDS.map(brand => (
    <img key={brand} loading="lazy" src={`/${brand}.svg`} className="lg:w-36 xs:w-24 mx-4  "   alt={` logotipo  ${brand}`}  />))
  }
</Marquee>


</section>

);

export default App