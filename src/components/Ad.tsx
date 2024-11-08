import React from 'react';
import Image from "next/image";

const Ad = ({size}: { size: "sm" | "md" | "lg" }) => {
    return (
        <div className="bg-white shadow-md rounded-lg text-sm p-4 flex flex-col gap-4">
            {/* TOP*/}
            <div className="flex items-center justify-between text-gray-500 font-medium">
                <span>Sponsored Ads</span>
                <Image src="/more.png" alt="" width={16} height={16}/>
            </div>

            {/*    Bottom */}
            <div className={`flex flex-col mt-4 ${size == 'sm' ? "gap-2" : "gap-4"}`}>
                <div className={`relative w-full ${size == 'sm' ? 'h-24' : size == 'md' ? 'h-36' : 'h-48'}`}>
                    <Image src="https://images.pexels.com/photos/10414204/pexels-photo-10414204.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" fill className='rounded-lg object-cover' />
                </div>
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/10414204/pexels-photo-10414204.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" width={24} height={24} className='rounded-full w-6 h-6 object-cover' />
                    <span className="text-blue-500 font-medium"> Big Chef Lounge</span>
                </div>
                <p className={size == 'sm' ? 'text-xs' : 'text-sm'}>
                    {size == 'sm' ? "Lorem Ipsum" : size == 'md' ? "Lorem Ipsum dolor is" : "Lorem Ipsum dolor is amet"}

                </p>

                <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">Learn more</button>
            </div>
        </div>
    );
};

export default Ad;