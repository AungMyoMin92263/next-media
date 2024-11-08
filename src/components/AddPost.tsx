import React from 'react';
import Image from "next/image";

const AddPost = () => {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
        {/*    Avatar */}
            <Image src="https://images.pexels.com/photos/13082851/pexels-photo-13082851.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" className="w-12 h-12 object-cover rounded-full" width={48} height={48}/>



        {/*   POST */}
            <div className="flex-1">
            {/*  TEXT INPUT  */}
                <div className="flex gap-4">
                    <textarea name="" id="" placeholder="What's on your mind?" className="bg-slate-100 rounded-lg p-2 w-full"></textarea>
                    <Image src="/emoji.png" alt="" className="w-5 h-5 object-cover cursor-pointer self-end" width={20} height={20}/>

                </div>
            {/*    POST OPTIONS */}
                <div className="flex gap-2 mt-4 text-gray-400 items-center flex-wrap">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/addimage.png" alt="" width={20} height={20}/>
                        Photo

                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/addVideo.png" alt="" width={20} height={20}/>
                            Video

                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/addEvent.png" alt="" width={20} height={20}/>
                            Event

                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/poll.png" alt="" width={20} height={20}/>
                            Poll

                    </div>


                </div>
            </div>
        </div>
    );
};

export default AddPost;