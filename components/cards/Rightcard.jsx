import React from "react";
import Image from "next/image";
import Link from "next/link";
function Rightcard({ data }) {

    return (
    <>
    
      <div className="container ">
        <div class="overflow-y-scroll h-96">
          {data.map((item,index) =>(

          <div key={index} className="flex">
            <div className="justify-start">
              <div className="relative h-3   w-3 rounded">
                <Image
                  src="https://res.cloudinary.com/dizhwrjyc/image/upload/v1669182584/icons8-filled-circle-16_pwwurk.webp"
                  objectFit="contain"
                  layout="fill"
                  className="w-fit h-fit"
                  alt="img"
                />
              </div>
              <div class=" border-l-2 border-gray-300 h-[85px] ml-[5px]"></div>
            </div>
            <div className="px-3 ">
              <div className="pb-2  text-xs text-gray-400">{item.time} </div>
              <Link href={"/post/k"}>
              <div className="text-sm line-clamp-3 cursor-pointer">
            {item.title}
              </div>
              </Link>
              <div className="h-[2px] w-80 my-1 float-right bg-gray-300 mt-3"></div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Rightcard;
