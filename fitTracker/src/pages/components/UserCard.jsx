import React from 'react';
import baseUserImg from "./../../assets/baseUser.jpg";

function UserCard() {

    return (

        <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center">
                <img className="w-24 h-24 rounded-full shadow-lg mt-10" src={baseUserImg} alt="Profile picture" />
                <h6 className="text-white m-0">{window.localStorage.getItem("username")}</h6>
            </div>
        </div>

    );
}

export default UserCard;