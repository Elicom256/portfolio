import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import eli1 from "../pics/bg-null.png";
import eli2 from "../pics/me.jpg";
import eli3 from "../pics/meme.jpeg";

export default function HomeBackground() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      pagination={{ clickable: true }}
      navigation
      speed={800} // smooth animation
      grabCursor={true} // enable swipe grab
      className="w-full h-screen"
    >
      {/* Slide 1 */}
      <SwiperSlide>
  <div
    className="relative w-full h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${eli3})`}}
  >
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center  text-center px-4">

      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        NRM Youth League
      </h1>
      <p className="max-w-xl text-lg md:text-xl opacity-90">
        Emlessed by the NRM Chairman, President Museveni
      </p>
    </div>
  </div>
</SwiperSlide>


      {/* Slide 2 */}
      <SwiperSlide>
  <div
    className="relative w-full h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${eli1})`}}
  >
    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Peace in the Wilderness
      </h1>
      <p className="max-w-xl text-lg md:text-xl opacity-90">
        Nature wonderfully changes and renews a weary spirit.
      </p>
    </div>
  </div>
</SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
  <div
    className="relative w-full h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${eli2})`}}
  >
    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Peace in the Wilderness
      </h1>
      <p className="max-w-xl text-lg md:text-xl opacity-90">
        Nature wonderfully changes and renews a weary spirit.
      </p>
    </div>
  </div>
</SwiperSlide>

    </Swiper>
  );
}
