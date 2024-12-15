import { Marquee } from "@devnomic/marquee";
import "../css/services.css";



const App = () => (
 
   <section className="overflow-hidden xs:px-[30px] xs:py-[50px]">
      <Marquee fade={false} pauseOnHover={true} numberOfCopies={3}>
        
          <div className="lg:text-6xl xs:text-[30px]  tracking-[.195em] text-[#000] uppercase font-thin">Nuestros Servicios ·</div>
       
      </Marquee>

      </section>
    
  
);

export default App;



