import React from "react";
import Image from "next/image";
import Link from "next/link";
function Middlecard({ data }) {
  return (
    <>
      {data && data.length > 0 && (
        <div className="container mx-auto px-5">
            <Link href={"/post/k"}>
          <div className="h-full flex flex-wrap items-start mb-5">
            <div className="text-3xl font-bold pb-2">
              <div className=" cursor-pointer">{data[0].title}</div>
            </div>
            <div className="relative  h-[15rem] w-[29rem] hover:cursor-pointer ">
              <Image
                src={data[0].imgurl}
                objectFit="strech"
                layout="fill"
                className="w-fit h-fit"
                alt="img"
              />
            </div>
          </div>
          </Link>
          <div className="h-[2px] w-full my-1 bg-gray-400"></div>

          <div className="">
            <div className="grid grid-cols-2 gap-2">
              {data.map((item , index) => (
                <div key={index} className="col-span-1 ">
                  <Link href={"/post/k"}>
                    <div className=" flex flex-wrap ">
                      <div className="relative h-[7rem] w-[14rem] lg:h-[6rem] xl:h-[8rem] lg:w-[11rem] xl:w-[14rem] hover:cursor-pointer mb-3 ">
                        <Image
                          src={item.imgurl}
                          objectFit="strech"
                          layout="fill"
                          className="w-fit h-fit"
                          alt="img"
                        />
                      </div>
                      <div className="text-normal font-normal pb-2 w-[14rem]">
                        <div className=" cursor-pointer line-clamp-3">
                          {item.title}
                        </div>
                      </div>
                      <div className="h-[2px] w-full my-1 bg-gray-400"></div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Middlecard;
