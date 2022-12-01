import React from 'react'
import CityC1 from '../cards/CityC1';
import Mline from '../cards/Mline';
import PlyCard2 from '../cards/PlyCard2';
const rightData = [
    {
      title:
        "Rojgar Mela 2022: दूसरा रोजगार मेला आज, PM नरेंद्र मोदी 71 हजार उम्मीदवारों को देंगे अपॉइंटमेंट लेटर",
      imgurl:
        "https://res.cloudinary.com/dizhwrjyc/image/upload/v1669113445/rozgar-mela-pm-to-hand-over-appointment-letters-to-71-000-recruits-on-tuesday_ncnpyy.jpg",
    },
    {
      title:
        "Earthquake Turkey: तुर्की में आया जोरदार भूकंप, राजधानी अंकारा में धूजी धरती, घर छोड़",
      imgurl:
        "https://res.cloudinary.com/dizhwrjyc/image/upload/v1669179047/earthqwack_usqw3o.webp",
    },
    {
      title:
        "Rojgar Mela 2022: दूसरा रोजगार मेला आज, PM नरेंद्र मोदी 71 हजार उम्मीदवारों को देंगे अपॉइंटमेंट लेटर",
      imgurl:
        "https://res.cloudinary.com/dizhwrjyc/image/upload/v1669113445/rozgar-mela-pm-to-hand-over-appointment-letters-to-71-000-recruits-on-tuesday_ncnpyy.jpg",
    },
    {
      title:
        "Earthquake Turkey: तुर्की में आया जोरदार भूकंप, राजधानी अंकारा में धूजी धरती, घर छोड़",
      imgurl:
        "https://res.cloudinary.com/dizhwrjyc/image/upload/v1669179047/earthqwack_usqw3o.webp",
    },
  ];

function Business() {
  return (
    <div className="container m-auto mt-20 ">
      <Mline  data={{ name: 'बिज़नेस '}} />
      <div className="grid grid-cols-12 gap-5 mt-8">
        <div className="lg:block hidden col-span-4 ">
        <CityC1 />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
        
          <PlyCard2 data={rightData} />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 border-2">
          <PlyCard2 data={rightData} />
        </div>
      </div>
    </div>
  )
}

export default Business