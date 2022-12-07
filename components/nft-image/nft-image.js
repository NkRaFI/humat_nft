import React from 'react';
import Image from "next/image";

const NftImage = (image, handleClick, category) => {
    return (
        <div>
            <div
                onClick={handleClick}
                className="text-center mb-[70px] pr-[10px] cursor-pointer"
            >
                {/*eslint disable next-line*/}
                <p className="uppercase font-normal text-[14px] tracking-wider">
                    {category}
                </p>
            </div>
        </div>
    );
};

export default NftImage;