import React from 'react';
import Image from "next/image";

const ProfileCard = () => {
    return (
        <div className="bg-white shadow-md rounded-lg text-sm p-4 flex flex-col gap-6">
            <div className="h-20 relative">
                <Image src="https://images.pexels.com/photos/13610249/pexels-photo-13610249.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" fill className="rounded-md object-cover" />
                <Image src="https://images.pexels.com/photos/28437243/pexels-photo-28437243/free-photo-of-elegant-fashion-model-in-glamorous-outfit.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" width={48} height={48} alt=""  className="rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-white z-10" />
            </div>
            <div className="flex flex-col gap-2 h-20 items-center">
                <span className="font-semibold">Edward Gabriel May</span>
                <div className="flex items-center gap-4">
                    <div className="flex">
                        <Image
                            src="https://images.pexels.com/photos/13610249/pexels-photo-13610249.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                            alt="" width={12} height={12} className="rounded-full object-cover w-3 h-3"/>
                        <Image
                            src="https://images.pexels.com/photos/13610249/pexels-photo-13610249.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                            alt="" width={12} height={12} className="rounded-full object-cover w-3 h-3"/>
                        <Image
                            src="https://images.pexels.com/photos/13610249/pexels-photo-13610249.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                            alt="" width={12} height={12} className="rounded-full object-cover w-3 h-3"/>
                    </div>
                    <span className="text-xs text-gray-500">500 Followers</span>
                </div>
                <button className="bg-blue-500 text-white text-xs p-2 rounded-md">My Profile</button>
            </div>
        </div>
    );
};

export default ProfileCard;