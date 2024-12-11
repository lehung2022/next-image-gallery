import React from "react";
import Image from "next/image";


type Props = {};

export default function BuiDacTuyenPage(props: Props) {
  return (
    <>
      <div className="grid place-items-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-red-800">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center text-lime-50">
        {/* <div className="flex justify-center mb-8"> */}
          <Image
            src="/vietnamese_generals/bui_dac_tuyen.jpg"
            alt="Bui Dac Tuyen"
            width={300} // Set desired width
            height={300} // Set desired height
            className="mx-auto" // Centers the image horizontally
          ></Image>
        </div>
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center text-lime-50">
          <p>
            {/* Your introduction text goes here */}
            Bùi Đắc Tuyên là người ở thôn Xuân Hòa, xã Bình Phú, huyện Tuy Viễn (Bình
            Khê), phủ Quy Nhơn (nay thuộc huyện Tây Sơn, tỉnh Bình Định).
          </p>
        </div>
      </div>
    </>
  );
}
