import React from 'react';
import ProfileCard from "@/components/ProfileCard";
import Link from "next/link";
import Image from "next/image";

const LeftMenu = ({type} : {type: "home" | "profile"}) => {
    return (
        <div className="flex flex-col gap-6">
            {type == "home" && (
                <ProfileCard/>
            )}
            <div className="bg-white shadow-md rounded-lg text-sm p-4 flex flex-col text-gray-500 gap-2">
                <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
                    <Image src="/posts.png" alt="" width={20} height={20}/>
                    <span>My posts</span>
                </Link>
                <hr className="border-t-1 border-gray-50 w-36 self-end"/>
                <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
                    <Image src="/market.png" alt="" width={20} height={20}/>
                    <span>Marketplace</span>
                </Link>
                <hr className="border-t-1 border-gray-50 w-36 self-end"/>
                <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
                    <Image src="/activity.png" alt="" width={20} height={20}/>
                    <span>Activity</span>
                </Link>
                <hr className="border-t-1 border-gray-50 w-36 self-end"/>
                <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
                    <Image src="/albums.png" alt="" width={20} height={20}/>
                    <span>Albums</span>
                </Link>
                <hr className="border-t-1 border-gray-50 w-36 self-end"/>
                <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
                    <Image src="/news.png" alt="" width={20} height={20}/>
                    <span>News</span>
                </Link>
                <hr className="border-t-1 border-gray-50 w-36 self-end"/>
                <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
                    <Image src="/courses.png" alt="" width={20} height={20}/>
                    <span>News</span>
                </Link>
                <hr className="border-t-1 border-gray-50 w-36 self-end"/>
                <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
                    <Image src="/lists.png" alt="" width={20} height={20}/>
                    <span>Lists</span>
                </Link>
                <hr className="border-t-1 border-gray-50 w-36 self-end"/>
                <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
                    <Image src="/settings.png" alt="" width={20} height={20}/>
                    <span>Settings</span>
                </Link>
                <hr className="border-t-1 border-gray-50 w-36 self-end"/>
            </div>

        </div>
    );
};

export default LeftMenu;