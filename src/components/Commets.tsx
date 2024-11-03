import React from 'react';
import Image from "next/image";

const Commets = () => {
    return (
        <div className="">
            {/*WRITE*/}
            <div className="flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/13082851/pexels-photo-13082851.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" className="w-8 h-8 object-cover rounded-full" width={32} height={32}/>


                <div className="flex items-center justify-between bg-slate-100 rounded-xl px-6 py-2 w-full">
                    <input type="text" placeholder="Write a comment ..." className="bg-transparent outline-none"/>
                    <Image src="/emoji.png" alt="" width={32} height={32} className="cursor-pointer"/>
                </div>


            </div>

            {/*COMMENTS*/}
            <div className="">
                {/*COMMENT*/}
                <div className="flex gap-4 justify-between mt-6">
                    {/* AVATOR */}
                    <Image src="https://images.pexels.com/photos/13082851/pexels-photo-13082851.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" className="w-8 h-8 object-cover rounded-full" width={40} height={40}/>

                    {/* DESC */}
                    <div className="flex flex-col gap-2 flex-1">
                        <span className="font-medium"> Dustin Davis </span>
                        <p>
                            When you use fill, you must ensure the parent element has a defined height and width because the image will fill the entire area of the parent.
                        </p>

                        <div className="flex items-center gap-8 text-gray-400 text-xs">
                            <div className="flex items-center gap-4">
                                <Image src="/like.png" alt="" width={16} height={16} className="cursor-pointer"/>
                                <span className="text-gray-300">|</span>
                                <span className="text-gray-500">123 Likes</span>
                            </div>
                            <div className="">Reply</div>
                        </div>

                    </div>
                    {/* ICON */}
                    <Image src="/more.png" alt="" width={16} height={16} className="cursor-pointer w-4 h-4" />


                </div>
            </div>
        </div>
    );
};

export default Commets;