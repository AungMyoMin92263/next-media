import React from 'react';
import Link from "next/link";
import Image from "next/image";

const FriendRequest = () => {
    return (
        <div className="bg-white shadow-md rounded-lg text-sm p-4 flex flex-col gap-4">
            {/*    TOP */}
            <div className="flex items-center justify-between font-medium">
                <span className="text-gray-500">
                    Friend Request
                </span>
                <Link href="/" className="text-blue-400 text-xs"> See All</Link>

            </div>

            {/*    User */}
            <div className="flex items-center justify-between font-medium">
                <div className="flex items-center gap-4">
                    <Image
                        src="https://images.pexels.com/photos/7961664/pexels-photo-7961664.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        alt="homepage" width={40} height={40} className="w-8 h-8 object-cover rounded-full"/>
                    <span> Wennie brown</span>
                </div>

                <div className="flex justify-end gap-3">
                    <Image src="/accept.png" alt="" width={20} height={20} className="cursor-pointer"/>
                    <Image src="/reject.png" alt="" width={20} height={20} className="cursor-pointer"/>
                </div>
            </div>
            <div className="flex items-center justify-between font-medium mt-2">
                <div className="flex items-center gap-4">
                    <Image
                        src="https://images.pexels.com/photos/7961664/pexels-photo-7961664.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        alt="homepage" width={40} height={40} className="w-8 h-8 object-cover rounded-full"/>
                    <span> Wennie brown</span>
                </div>

                <div className="flex justify-end gap-3">
                    <Image src="/accept.png" alt="" width={20} height={20} className="cursor-pointer"/>
                    <Image src="/reject.png" alt="" width={20} height={20} className="cursor-pointer"/>
                </div>
            </div>
            <div className="flex items-center justify-between font-medium mt-2">
                <div className="flex items-center gap-4">
                    <Image
                        src="https://images.pexels.com/photos/7961664/pexels-photo-7961664.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        alt="homepage" width={40} height={40} className="w-8 h-8 object-cover rounded-full"/>
                    <span> Wennie brown</span>
                </div>

                <div className="flex justify-end gap-3">
                    <Image src="/accept.png" alt="" width={20} height={20} className="cursor-pointer"/>
                    <Image src="/reject.png" alt="" width={20} height={20} className="cursor-pointer"/>
                </div>
            </div>
        </div>
    );
};

export default FriendRequest;