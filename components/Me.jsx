import Link from 'next/link';
import React from 'react';
import pic from '../public/images/pic.jpg';
import { MdExpandMore } from 'react-icons/md';

const Me = () => {
  return (
    <div id="me" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          간단한 소개
        </h2>

        <div className="shadow-xl shadow-blue-300 my-8 px-8">
          <p className="py-4 max-w-2xl mx-auto">
            21살이며 정보보호학과를 다니고있고 관심분야는 네트워크와 리눅스
            입니다. 취미는 야구시청이고 기회가 되면 구단에서도 일해보고싶습니다.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            <br />

            <br />

            <br />
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            <br />
          </p>
        </div>

        <div className="flex items-center justify-center gap-10">
          <Link href="/">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              홈으로
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>

          <Link href="/">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              포트폴리오
              <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-180">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Me;
