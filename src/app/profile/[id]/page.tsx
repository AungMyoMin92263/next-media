import React from 'react';
import LeftMenu from "@/components/LeftMenu";
import Stories from "@/components/Stories";
import AddPost from "@/components/AddPost";
import Feed from "@/components/Feed";
import RightMenu from "@/components/RightMenu";
import Image from "next/image";

const ProfilePage = () => {
    return (
        <div className="flex gap-6 pt-6">
            <div className="hidden xl:block w-[20%]">
                <LeftMenu type='profile'/>
            </div>
            <div className="w-full lg:w-[70%] xl:w-[50%]">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-full h-64 relative">
                            <Image src="https://images.pexels.com/photos/27772451/pexels-photo-27772451/free-photo-of-boys-playing-flutes.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" fill className="object-cover rounded-md"/>
                            <Image src="https://images.pexels.com/photos/18853163/pexels-photo-18853163/free-photo-of-people-reading-books-at-boston-public-library-hall.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" width={128} height={128} className="object-cover rounded-full w-32 h-32 left-0 right-0 absolute ring-4 ring-white m-auto -bottom-16 "/>
                        </div>
                        <h1 className="mt-20 mb-4 text-2xl font-medium">Elva Weaver</h1>
                        <div className="flex items-center justify-center gap-12 mb-4">
                            <div className="flex flex-col items-center">
                                <span className="font-medium">123</span>
                                <span className="text-sm">Posts</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="font-medium">222</span>
                                <span className="text-sm">Followers</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="font-medium">12</span>
                                <span className="text-sm">Following</span>
                            </div>
                        </div>

                    </div>
                    <Feed/>
                </div>
            </div>
            <div className="hidden lg:block w-[30%]">
                <RightMenu userId="test"/>
            </div>
        </div>
    );
};

export default ProfilePage;