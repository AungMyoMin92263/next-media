import React from 'react';
import Link from "next/link";
import Image from "next/image";

const UserMediaCard = ({userId}: { userId: string }) => {
    return (
        <div className="bg-white shadow-md rounded-lg text-sm p-4 flex flex-col gap-4">
            {/*    TOP */}
            <div className="flex items-center justify-between font-medium">
                <span className="text-gray-500">
                    User Media
                </span>
                <Link href="/" className="text-blue-400 text-xs"> See All</Link>
            </div>
            {/*    Bottom */}
            <div className="flex gap-4 justify-between flex-wrap">
                <div className="relative w-1/5 h-24">
                    <Image
                        src="https://images.pexels.com/photos/15201062/pexels-photo-15201062/free-photo-of-view-of-green-field-from-train-window.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        alt="" fill className="object-cover rounded-md"/>
                </div>
                <div className="relative w-1/5 h-24">
                    <Image
                        src="https://images.pexels.com/photos/15201062/pexels-photo-15201062/free-photo-of-view-of-green-field-from-train-window.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        alt="" fill className="object-cover rounded-md"/>
                </div>
                <div className="relative w-1/5 h-24">
                    <Image
                        src="https://images.pexels.com/photos/15201062/pexels-photo-15201062/free-photo-of-view-of-green-field-from-train-window.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        alt="" fill className="object-cover rounded-md"/>
                </div>
                <div className="relative w-1/5 h-24">
                    <Image
                        src="https://images.pexels.com/photos/15201062/pexels-photo-15201062/free-photo-of-view-of-green-field-from-train-window.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        alt="" fill className="object-cover rounded-md"/>
                </div>
                <div className="relative w-1/5 h-24">
                    <Image
                        src="https://images.pexels.com/photos/15201062/pexels-photo-15201062/free-photo-of-view-of-green-field-from-train-window.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        alt="" fill className="object-cover rounded-md"/>
                </div>
                <div className="relative w-1/5 h-24">
                    <Image
                        src="https://images.pexels.com/photos/15201062/pexels-photo-15201062/free-photo-of-view-of-green-field-from-train-window.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        alt="" fill className="object-cover rounded-md"/>
                </div>
                <div className="relative w-1/5 h-24">
                    <Image
                        src="https://images.pexels.com/photos/15201062/pexels-photo-15201062/free-photo-of-view-of-green-field-from-train-window.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        alt="" fill className="object-cover rounded-md"/>
                </div>
                <div className="relative w-1/5 h-24">
                    <Image
                        src="https://images.pexels.com/photos/15201062/pexels-photo-15201062/free-photo-of-view-of-green-field-from-train-window.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        alt="" fill className="object-cover rounded-md"/>
                </div>


            </div>
        </div>
    );
};

export default UserMediaCard;