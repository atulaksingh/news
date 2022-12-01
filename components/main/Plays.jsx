import React from "react";
import Mline from "../cards/Mline";
import PlyCard from "../cards/PlyCard";
import PlyCard2 from "../cards/PlyCard2";

const rightData = [
  {
    title:
      "सलीम मलिक मुझसे नौकर जैसा बर्ताव करते थे, वसीम अकरम ने लगाए ये गंभीर आरोप",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669717060/salim-malik-treated-me-like-servant-wasim-akram-made-big-allegation-on-him_evhypb.jpg",
  },
  {
    title:
      "IND vs NZ : तीसरे वनडे में इस दिग्गज खिलाड़ी का बाहर होना तय, देखें संभावित प्लेइंग इलेवन",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669717066/india-vs-new-zealand-3rd-odi-match-playing-11-yuzvendra-chahal-poor-performance-know-probable-playing-xi_pstdjo.jpg",
  },
  {
    title:
      "FIFA 2022 : पुर्तगाल ने उरुग्वे को तो ब्राजील ने स्विट्जरलैंड को हराकर प्री-क्वार्टर फाइनल में की",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669717073/fifa-world-cup-2022-portugal-and-brazil-in-the-pre-quarterfinals_lxpvri.jpg",
  },
  {
    title:
      "6,6,6,6,6nb,6,6... ऋतुराज गायकवाड़ ने कैसे तोड़ा युवराज सिंह का रिकॉर्ड, देखें वीडियो",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669716863/ruturaj-gaikwad-on-ms-dhoni-csk-captain-hit-7-sixes-in-1-over-vijay-hazare-trophy-2022_ue8bgz.jpg",
  },
];
const leftData = [
  {
    title:
      "'कुली' बने चहल तो धवन ने की धनश्री की खिंचाई, देखें Video",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669716849/ind-vs-nz-3rd-odi-shikhar-dhawan-dhanashree-yuzvendra-chahal-coolie-watch-video_uizeyz.jpg",
  },
  {
    title:
      "बीसीसीआई का बड़ा एक्शन!, टीम इंडिया के सीनियर खिलाड़ियों की टी20 से होगी छुट्‌टी",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669716429/team-india-senior-players-will-focus-on-test-and-odi-cricket-in-2023-juniors-will-be-in-t20i_zfscd5.jpg",
  },
  {
    title:
      "चीफ सेलेक्टर की दौड़ में कई बड़े नाम, विनोद कांबली समेत इन दिग्गजों ने किया आवेदन",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669716856/team-india-new-chief-selector-race-vinod-kambli-maninder-singh-ajit-agarkar-bcci-election_hjyste.jpg",
  },
  {
    title:
      "ऋतुराज ने खोला 1 ओवर में 7 छक्के जड़ने राज, बोले- धोनी की सीख कर गई काम",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669716863/ruturaj-gaikwad-on-ms-dhoni-csk-captain-hit-7-sixes-in-1-over-vijay-hazare-trophy-2022_ue8bgz.jpg",
  },
];

function Plays() {
  return (
    <div className="container m-auto mt-20 ">
      <div className="my-10">
        <Mline data={{ name: "खेल" }} />
      </div>
      <div className="grid grid-cols-9 gap-4 ">
        <div className="col-span-9 sm:col-span-9 md:col-span-6">
          {" "}
          <PlyCard data={leftData} />{" "}
        </div>
        <div className="col-span-9 sm:col-span-9 md:col-span-3 border-l-2 border-gray-300">
          {" "}
          <PlyCard2 data={rightData} />{" "}
        </div>
      </div>
    </div>
  );
}

export default Plays;
