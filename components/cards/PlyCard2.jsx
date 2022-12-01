import React from "react";
import Image from "next/image";
import Link from "next/link";

function PlyCard2({ data }) {
  return (
    <>
      <div className="sm:px-3">
        {data.map((item ,index) => (
          <div key={index} className=" sm:mx-0">
            <div className="flex gap-2 justify-between  hover:cursor-pointer ">
              <div>
                <Link href={"/post/k"}>
                <h4 className="line-clamp-3  font-normal text-sm ">
                  {item.title}
                </h4>
                </Link>
              </div>
              <div>
                <Link href={"/post/k"}>
                <div className="w-28 aspect-video relative">
                  <Image
                    src={item.imgurl}
                    alt="img"
                    layout="fill"
                    className="absolute "
                  />
                </div>
                </Link>
              </div>
            </div>

            <div className="  border-b-2 border-gray-300 my-3"></div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PlyCard2;
