"use client";

import Image from "next/image";
import React from "react";

function ImageResult({ image, isTransforming }: ImageResultProps) {
  console.log(image);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="h3-bold text-dark-600">Transformed</h3>

        {/* {hasDownload && (
                    <button className="p-14-medium mt-2 flex items-center gap-2 px-2" onClick={downloadHandler}>
                        <Image
                            src="/assets/icons/download.svg"
                            alt="Download"
                            width={24}
                            height={24}
                            className="pb-[6px]"
                        />
                    </button>
                )} */}
      </div>

      {image?.url ? (
        <div className="relative">
          <Image
            src={
              image?.url
            }
            width={image.width}
            height={image.height}
            alt="spinner"
          />

          {isTransforming && (
            <div className="flex-center absolute left-[50%] top-[50%] size-full -translate-x-1/2 -translate-y-1/2 flex-col gap-2 rounded-[10px] border bg-dark-700/90">
              <Image
                src="/assets/icons/spinner.svg"
                width={50}
                height={50}
                alt="spinner"
              />
              <p className="text-white/80">Please wait...</p>
            </div>
          )}
        </div>
      ) : (
        <div className="flex-center p-14-medium h-full min-h-72 flex-col gap-5 rounded-[16px] border border-dashed bg-purple-100/20 shadow-inner">
          Transformed Image
        </div>
      )}
    </div>
  );
}

export default ImageResult;
