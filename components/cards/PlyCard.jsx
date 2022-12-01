import React from "react";
import Image from "next/image";
import Link from "next/link";
function PlyCard({ data }) {
  return (
    <div>
      <div className="container mx-auto ">
          <Link href={"/post/k"}>
        <div className=" sm:flex sm:flex-wrap  gap-9 sm:items-start items-center   justify-center ">
          {data.map((item ,index) => (
            <div key={index} className="my-5 sm:my-1  sm:mx-0  sm:w-[600px] md:w-[235px] lg:w-[320px] xl:w-[380px] ">
              <div className="relative h-[13rem] sm:h-[18rem] sm:w-[37rem] md:h-[8rem] md:w-[15rem]  lg:h-[11rem] lg:w-[20rem] xl:h-[13rem] xl:w-[24rem] hover:cursor-pointer ">
                <Image
                  src={item.imgurl}
                  objectFit="strech"
                  layout="fill"
                  className="w-fit h-fit"
                  alt="img"
                />
              </div>
              <div className="text-xl font-bold   text=[1.100rem]">
                <div className=" cursor-pointer line-clamp-3">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
          </Link>
      </div>
    </div>
  );
}

export default PlyCard;
