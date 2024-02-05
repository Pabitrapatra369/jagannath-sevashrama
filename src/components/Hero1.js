import React from "react";
import GURUDEV from "./utils/Srila-BV-Narayana-Goswami-Maharaj.png";
const Hero1 = () => {
  return (
    <div>
      <div className=" text-7xl h-52 w-100 px-40 font-bold font-mono py-9 ">
        Shree Jaganntha Sevashrama
        <br />
        <h1 className=" text-7xl 0 px-40 font-bold font-mono py-9 ">
          ଶ୍ରୀ ଜଗନ୍ନାଥ ସେବାଶ୍ରମ
        </h1>
      </div>
      <div className=" h-[500px] w-[1200px]  bg-slate-300 rounded-lg hover:bg-white my-9 ml-20 flex hover:scale-105 shadow-slate-600 duration-125">
        <img src={GURUDEV} alt="imgw" className=" h-[500px]" />
        <div className=" ml-4 my-4">
          <h1 className=" text-red-400 text-1xl">
            Founder Ācārya : Śrīla Bhaktivedānta Nārāyana Gosvāmī Mahārāja
          </h1>
          <h1 className=" text-red-700 text-3xl font-bold">
            Śrī Śrīmad Bhaktivedānta Nārāyaṇa Gosvāmī Mahārāja
          </h1>
          <p className=" text-lg gap-2">
            A disciple of Śrī Śrīmad Bhakti Prajñāna Keśava Gosvāmī Mahārāja,
            one of the foremost disciples of Śrī Śrīmad Bhaktisiddhānta
            Sarasvatī Prabhupāda.
            <br />
            <br /> On February 7, the new moon day of the month of Māgha, 1921,
            Śrī Śrīmad Bhaktivedānta Nārāyaṇa Gosvāmī Mahārāja took his divine
            birth in a highly educated and respected brāhmaṇa family in the
            village of Tiwārīpura, in the Buxar district of Bihar, India. He was
            given the name Śrīman Nārāyaṇa. His parents were devout Vaiṣṇavas of
            the Śrī sampradāya, and from the time he was a small baby, Śrīman
            Nārāyaṇa's father regularly took him to recitations of the Rāmāyaṇa,
            which he loved. His devotional nature was evident even in his
            childhood.
          </p>
          <button className=" h-9 w-36 bg-slate-700 my-9 rounded-lg text-white hover:bg-slate-950">
            Learn more...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
