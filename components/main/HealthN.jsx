import React from 'react'
import Oneline from "../cards/Oneline";
import PlyCard2 from "../cards/PlyCard2";
import Rightcard from "../cards/Rightcard";
import Image from "next/image";
import CityC1 from "../cards/CityC1";
import Mline from '../cards/Mline';

const rightData = [
  {
    title:
      "प्लेटलेट्स दान से बचाएं जान- अंतरराष्ट्रीय काशी घाट वॉक का देव दीपावली पर अनूठा जागरूकता अभियान",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669718845/vijaynath_mishra_zutgde.jpg",
  },
  {
    title:
      "Aligarh Muslim University : 3 महीने में जे0एन0 मेडिकल कॉलेज नहीं सुधरा, तो खत्म ",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669718852/jain_medical_college_lrcunc.png",
  },
  {
    title:
      "जिला अस्पताल में घंटों बिजली ना आने से तड़पते दिखे मरीज, शो पीस बना रहा जेनरेटर",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669718857/distict_hospital_not_supply_light_myk3iy.png",
  },
  {
    title:
      "Soaked Walnuts Benefits: भीगे हुए अखरोट में भी छिपे हैं कई अनगिनत राज, गर्भवती",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669718861/soaked_walnuts_benefits_jxwzhw.jpg",
  },
];

function HealthN() {
  return (
    <>
    <div className="container m-auto mt-20 ">
      <Mline  data={{ name: 'स्वास्थ्य '}} />
      <div className="grid grid-cols-12 gap-5 mt-8">
        <div className="col-span-12 md:col-span-8 lg:col-span-4">
        <CityC1 />
        </div>
        <div className="col-span-12 md:col-span-4">
        
          <PlyCard2 data={rightData} />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <PlyCard2 data={rightData} />
        </div>
      </div>
    </div>
  </>
  )
}

export default HealthN