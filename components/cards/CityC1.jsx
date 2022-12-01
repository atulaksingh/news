import React from "react";
import Image from "next/image";
import Link from "next/link";

function CityC1() {
  return (
    <>
      <div className="">
        <Link href={"/post/k"}>
        <div className="relative m-auto h-[14rem]  md:h-[14rem] md:w-[31rem] lg:h-[16rem] lg:w-[20rem] xl:h-[14rem] xl:w-[25rem] hover:cursor-pointer ">
          <Image
            src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1669718621/photo_29_lxsy64.webp"
            objectFit="strech"
            layout="fill"
            className="w-fit h-fit"
            alt="img"
          />
        </div>
        <div className="text-xl font-bold sm:text-left text-start sm:pl-2 text=[1.100rem]">
          <div className=" cursor-pointer line-clamp-3">
          चादर, फादर वाली संस्कृति के खिलाफ आंदोलन करेगा हिंदूवादी संगठन
          </div>
        </div>
        </Link>
      </div>
    </>
  );
}

export default CityC1;
