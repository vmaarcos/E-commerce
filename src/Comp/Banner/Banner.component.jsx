import { useState } from "react"
import { AiOutlineArrowLeft,
         AiOutlineArrowRight,
} from "react-icons/ai"

export default function Banner({ slides }){
  
    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
      if(current === 0) setCurrent(slides.length - 1);
      else setCurrent(current - 1);
    };

    let nextSlide = () => {
      if(current === slides.length - 1) setCurrent(0);
      else setCurrent(current + 1);
    };

  return (
    <div className="overflow-hidden relative">
      <div className={`flex transition ease-out duration-40`}
      style={{
        transform: `translateX(-${current * 100}%)`,
      }}
     >
        {slides.map((s) => {
          return <img src={s} />
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-black px-10 text-3xl">
      <button onClick={previousSlide}>
          <AiOutlineArrowLeft />
        </button>
        <button onClick={nextSlide}>
          <AiOutlineArrowRight />
        </button>
      </div>
      
      <div className="absolute bottom-0 py-4 flex justify-center gap-5 w-full">
          {slides.map((s, i) => {
            return(
            <div 
            onClick={() => {
              setCurrent(i);
            }}
            key={"circle" + i}
            className={`rounded-full w-5 h-5 cursor-pointer
            ${i===current?'bg-white':"bg-gray-300"}`}>
            </div>
                  );
          })}
      </div>
    </div>
  );
  
}