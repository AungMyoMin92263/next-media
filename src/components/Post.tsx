import React from 'react';
import Image from "next/image";
import Commets from "@/components/Commets";

const Post = () => {
    return (
        <div className="flex flex-col gap-4">
            {/*USER*/}
            <div className="flex items-center gap-4 justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/29034031/pexels-photo-29034031/free-photo-of-serene-sheep-grazing-in-lush-meadow.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" width={40} height={40} className="w-10 h-10 rounded-full"/>
                    <span className="font-medium">Jack </span>
                </div>
                <Image src="/more.png" alt="" width={16} height={16} />
            </div>
            {/*DESC*/}
            <div className="flex flex-col gap-4">
                <div className="w-full min-h-96 relative ">
                    <Image src="https://images.pexels.com/photos/15894618/pexels-photo-15894618/free-photo-of-green-rocky-mountain-and-dry-yellow-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" fill className="object-cover rounded-md" alt=""  />
                </div>
                <p>This CSS property allows you to control how the image should be resized to fit the container. Common values include cover, contain, or fill, which define how the image fits within the container’s dimensions. </p>
            </div>
            {/*INTERACTION*/}
            <div className="flex items-center justify-between text-sm my-2">
                <div className="flex gap-8">
                    <div className="flex items-center gap-4 p-2 bg-slate-50 rounded-lg">
                        <Image src="/like.png" alt="" width={16} height={16}/>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-300 flex gap-1">123<span className="hidden md:inline">Likes</span></span>
                    </div>
                    <div className="flex items-center gap-4 p-2 bg-slate-50 rounded-lg">
                        <Image src="/comment.png" alt="" width={16} height={16}/>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-300 flex gap-1">123<span className="hidden md:inline">Comments</span></span>
                    </div>

                </div>
                <div className="">
                    <div className="flex items-center gap-4 p-2 bg-slate-50 rounded-lg">
                        <Image src="/share.png" alt="" width={16} height={16}/>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-300">123<span className="hidden md:inline">Shares</span></span>
                    </div>
                </div>
            </div>
            <Commets />
        </div>
    );
};

export default Post;