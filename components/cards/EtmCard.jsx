import React from "react";
import Image from "next/image";
import Link from "next/link";
function EtmCard({ data }) {
  console.log(data);
  return (
    <div>
      <div className="container m-auto">
        <div className=" flex flex-wrap  gap-9 items-start  justify-center">
         
          <div className="grid grid-cols-2 gap-7 ">
          
              <div className="col-span-2 md:col-span-1">
                <div className=" sm:w-[370px]">
                  <Link href={"/post/k"}>
                  <div className="relative  h-[13rem]  lg:h-[13rem] lg:w-[21rem] xl:h-[13rem] xl:w-[24rem] hover:cursor-pointer ">
                    <Image
                      src={data[0].imgurl}
                      objectFit="strech"
                      layout="fill"
                      className="w-fit h-fit"
                      alt="img"
                    />
                  </div>
                  <div className="text-xl font-bold   text=[1.100rem]">
                    <div className=" cursor-pointer line-clamp-3">
                      {data[0].title}
                    </div>
                  </div>
                  </Link>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className=" sm:w-[370px]">
                  <div className="relative h-[13rem]  lg:h-[13rem] lg:w-[21rem] xl:h-[13rem] xl:w-[24rem] hover:cursor-pointer ">
                    <Image
                      src={data[0].imgurl}
                      objectFit="strech"
                      layout="fill"
                      className="w-fit h-fit"
                      alt="img"
                    />
                  </div>
                  <div className="text-xl font-bold   text=[1.100rem]">
                    <div className=" cursor-pointer line-clamp-3">
                      {data[0].title}
                    </div>
                  </div>
                </div>
              </div>
            
          </div>

{/* ************************************************************** */}
          {data.map((item,index) => (
            <div key={index} className="w-[240px] ">
              <div className="h-full flex flex-col flex-wrap justify-start">
                <Link href={"/post/k"}>
                <div className="relative h-[8rem] w-[15rem] hover:cursor-pointer mb-3 ">
                  <Image
                    src={item.imgurl}
                    objectFit="strech"
                    layout="fill"
                    className="w-fit h-fit"
                    alt="img"
                  />
                </div>
                <div className="text-normal font-normal pb-2">
                  <div className=" cursor-pointer line-clamp-3">
                    {item.title}
                  </div>
                </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EtmCard;
