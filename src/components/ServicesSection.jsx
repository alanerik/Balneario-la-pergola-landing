import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import "../css/services.css";
import services from "../components/Data/services.json";

export default function App() {
  return (
    <>
      
     <section className="px-320 py-320 py-768 py-1024 ">
      <Swiper
        slidesPerView="auto"
        spaceBetween={10}
        grabCursor={true}
        slideToClickedSlide={true}
        navigation={true}
        freeMode={true}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        breakpoints={{
          320: { spaceBetween: 10 },
          
          768: { spaceBetween: 30  },
          1024: { spaceBetween: 80  },
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        
        
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <div >
              <div className="lg:h-[30vw] lg:w-[20.8333333333vw] md:h-[30vw] md:w-[20.8333333333vw] xs:h-full xs:w-full">
              <img
                src={service.image}
                alt={service.title}
                className="lg:h-[30vw] lg:w-[20.8333333333vw] md:h-[30vw] md:w-[20.8333333333vw] xs:h-full xs:w-full"
              />
              </div>
              <div>
              <h5 className="h5-320 h5-768 h5-1024 text-[#000] flex flex-col">
                {service.title}
              </h5>
              
              <div className="md:w-[20.8333333333vw]">
              <p className="text-medium-services-320 text-medium-services-768 text-medium-services-1024">{service.description}</p>
              </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
      </section>
     
    </>
    
    
  );
}
