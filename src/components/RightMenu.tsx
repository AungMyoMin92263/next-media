import React from 'react';
import FriendRequest from "@/components/FriendRequest";
import Birthdays from "@/components/Birthdays";
import Ad from "@/components/Ad";

const RightMenu = ({userId}: {userId ? : string}) => {
    return (
        <div className="flex flex-col gap-6">
            <FriendRequest />
            <Birthdays />
            <Ad size="md"/>

        </div>
    );
};

export default RightMenu;