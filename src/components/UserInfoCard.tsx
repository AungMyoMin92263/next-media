import React from 'react';
import Link from "next/link";
import Image from "next/image";

const UserInfoCard = ({userId}: { userId: string }) => {
    return (
        <div className="bg-white shadow-md rounded-lg text-sm p-4 flex flex-col gap-4">
            {/*    TOP */}
            <div className="flex items-center justify-between font-medium">
                <span className="text-gray-500">
                    User Information
                </span>
                <Link href="/" className="text-blue-400 text-xs"> See All</Link>
            </div>

            {/*    Bottom */}
            <div className="flex flex-col gap-4 text-gray-500">
                <div className="flex items-center gap-2">
                    <span className="text-xl text-black">Llyod Fleming</span>
                    <span className="text-sm">@jaonathan</span>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius justo et arcu consectetur,
                    non hendrerit turpis convallis. Fusce fringilla lectus a orci dignissim facilisis. Integer ultrices,
                    massa a malesuada posuere, dui lectus malesuada nisl, at tristique lectus magna id risus.
                </p>
                <div className="flex items-center gap-2">
                    <Image src="/map.png" alt="" width={16} height={16}/>
                    <span> Living in <b>Denver </b></span>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="/school.png" alt="" width={16} height={16}/>
                    <span>Went to  <b>Edgar High School </b></span>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="/work.png" alt="" width={16} height={16}/>
                    <span>Works at  <b>Apple Inc. </b></span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-1 items-center">
                        <Image src="/link.png" alt="" width={16} height={16}/>
                        <Link href="htts://lama.dev" className="text-blue-500 font-medium"> Lama.dev</Link>
                    </div>

                    <div className="flex items-center gap-1">
                        <Image src="/date.png" alt="" width={16} height={16}/>
                        <span> Joined November 2024</span>
                    </div>
                </div>
                <button className="bg-blue-500 text-white font-medium rounded-md p-2">Follow</button>
                <span className="text-red-400 self-end text-xs cursor-pointer">Block User</span>
            </div>
        </div>
    );
};

export default UserInfoCard;