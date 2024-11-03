import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Birthdays = () => {
    return (
        <div className="bg-white shadow-md rounded-lg text-sm p-4 flex flex-col gap-4">
            <div className="flex items-center justify-between font-medium">
                <span className="text-gray-500">
                    Birthdays
                </span>

            </div>

            <div className="flex items-center justify-between font-medium mt-2">
                <div className="flex items-center gap-4">
                    <Image
                        src="https://images.pexels.com/photos/7961664/pexels-photo-7961664.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        alt="homepage" width={40} height={40} className="w-8 h-8 object-cover rounded-full"/>
                    <span> Wennie brown</span>
                </div>

                <div className="flex justify-end gap-3">
                    <button className='bg-blue-500 text-white text-xs px-2 py-1 rounded-md' >Celebrate</button>
                </div>
            </div>

        {/*    Upcoming*/}
            <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
                <Image src="/gift.png" alt="" width={24} height={24}/>
                <Link href="/" >
                    <span>

                    </span>
                </Link>

            </div>
        </div>
    );
};

export default Birthdays;